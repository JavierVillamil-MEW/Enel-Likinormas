<?php

namespace Drupal\bulk_update_fields\Form;

use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormState;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Plugin\DefaultPluginManager;
use Drupal\Core\Routing\RouteBuilderInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Session\SessionManagerInterface;
use Drupal\Core\TempStore\PrivateTempStoreFactory;
use Drupal\datetime\Plugin\Field\FieldWidget\DateTimeWidgetBase;
use Drupal\paragraphs\Plugin\Field\FieldWidget\ParagraphsWidget;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a form for bulk updating fields on multiple entities.
 */
class BulkUpdateFieldsForm extends FormBase {

  /**
   * Set a var to make stepthrough form.
   *
   * @var int
   */
  protected $step = 1;
  /**
   * Keep track of user input.
   *
   * @var array
   */
  protected $userInput = [];

  /**
   * Tempstorage.
   *
   * @var \Drupal\Core\TempStore\PrivateTempStoreFactory
   */
  protected $tempStoreFactory;

  /**
   * Session.
   *
   * @var \Drupal\Core\Session\SessionManagerInterface
   */
  private $sessionManager;

  /**
   * User.
   *
   * @var \Drupal\Core\Session\AccountInterface
   */
  private $currentUser;

  /**
   * The route builder.
   *
   * @var \Drupal\Core\Routing\RouteBuilderInterface
   */
  protected $routeBuilder;

  /**
   * The module handler service.
   *
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  protected $moduleHandler;

  /**
   * Plugin manager.
   *
   * @var \Drupal\Core\Plugin\DefaultPluginManager
   */
  protected $pluginManager;

  /**
   * Constructs a \Drupal\bulk_update_fields\Form\BulkUpdateFieldsForm.
   *
   * @param \Drupal\Core\TempStore\PrivateTempStoreFactory $temp_store_factory
   *   Temp storage.
   * @param \Drupal\Core\Session\SessionManagerInterface $session_manager
   *   Session.
   * @param \Drupal\Core\Session\AccountInterface $current_user
   *   User.
   * @param \Drupal\Core\Routing\RouteBuilderInterface $route_builder
   *   Route.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   Module handler.
   * @param \Drupal\Core\Plugin\DefaultPluginManager $plugin_manager
   *   Plugin manager.
   */
  public function __construct(PrivateTempStoreFactory $temp_store_factory, SessionManagerInterface $session_manager, AccountInterface $current_user, RouteBuilderInterface $route_builder, ModuleHandlerInterface $module_handler, DefaultPluginManager $plugin_manager) {
    $this->tempStoreFactory = $temp_store_factory;
    $this->sessionManager = $session_manager;
    $this->currentUser = $current_user;
    $this->routeBuilder = $route_builder;
    $this->moduleHandler = $module_handler;
    $this->pluginManager = $plugin_manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('tempstore.private'),
      $container->get('session_manager'),
      $container->get('current_user'),
      $container->get('router.builder'),
      $container->get('module_handler'),
      $container->get('plugin.manager.field.widget')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'bulk_update_fields_form';
  }

  /**
   * {@inheritdoc}
   */
  public function updateFields() {
    $entities = $this->userInput['entities'];
    $fields = $this->userInput['fields'];
    $operations = [];
    foreach ($entities as $entity) {
      $operations[] = [
        '\Drupal\bulk_update_fields\BulkUpdateFields::updateFields',
        [$entity, $fields],
      ];
    }
    $batch = [
      'title' => $this->t('Updating Fields...'),
      'operations' => $operations,
      'finished' => '\Drupal\bulk_update_fields\BulkUpdateFields::bulkUpdateFieldsFinishedCallback',
      'file' => '\Drupal\bulk_update_fields\BulkUpdateFields',
    ];
    batch_set($batch);
    return 'All fields were updated successfully';
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    switch ($this->step) {
      case 1:
        $this->userInput['fields'] = array_filter($form_state->getValues()['table']);
        $form_state->setRebuild();
        break;

      case 2:
        $form_state_values = $form_state->getValues();
        foreach ($form_state_values as $field_name => $form_state_value) {
          // Paragraphs dont allow defaults.
          // Force it with just values.
          if ($field_name != 'default_value_input' && is_array($form_state_value)) {
            $form_state_values['default_value_input'][$field_name] = $form_state_value;
            foreach ($form_state_value as $key => $value) {
              if (!is_numeric($key)) {
                unset($form_state_values['default_value_input'][$field_name][$key]);
              }
              elseif (isset($form['default_value_input'][$field_name]['widget'][$key]['#paragraph_type'])) {
                $form_state_values['default_value_input'][$field_name][$key]['paragraph_type'] = $form['default_value_input'][$field_name]['widget'][$key]['#paragraph_type'];
              }
            }
          }
        }
        if (isset($this->userInput['fields']) && isset($form_state_values['default_value_input'])) {
          $this->userInput['fields'] = array_merge($this->userInput['fields'], $form_state_values['default_value_input']);
        }
        $form_state->setRebuild();
        break;

      case 3:
        if (method_exists($this, 'updateFields')) {
          $return_verify = $this->updateFields();
        }
        $this->messenger()->addStatus($return_verify);
        $this->routeBuilder->rebuild();
        break;
    }
    $this->step++;
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    if (isset($this->form)) {
      $form = $this->form;
    }
    $form['#title'] = $this->t('Bulk Update Fields');
    $submit_label = 'Next';

    switch ($this->step) {
      case 1:
        // Retrieve IDs from the temporary storage.
        $this->userInput['entities'] = $this->tempStoreFactory
          ->get('bulk_update_fields_ids')
          ->get($this->currentUser->id());
        $options = [];
        // Exclude some base fields.
        // @todo add date fields and revision log.
        $excluded_base_fields = [
          'nid',
          'uuid',
          'vid',
          'type',
          'revision_uid',
          'title',
          'path',
          'menu_link',
          'status',
          'uid',
          'default_langcode',
          'revision_timestamp',
          'revision_log',
          'created',
          'changed',
          'pass',
          'name',
          'mail',
          'init',
        ];
        $excluded_fields = $this->config('bulk_update_fields.settings')->get('exclude') ?? [];
        // Make it possible to bulk update 'Generate automatic URL alias'.
        // @todo add code to remove 'URL alias'.
        if ($this->moduleHandler->moduleExists('pathauto')) {
          if (($key = array_search('path', $excluded_base_fields)) !== FALSE) {
            unset($excluded_base_fields[$key]);
          }
        }

        foreach ($this->userInput['entities'] as $index => $entity) {
          $langcode = explode(':', $index)[1];
          $entity = $entity->getTranslation($langcode);
          $this->entity = $entity;
          $fields = $entity->getFieldDefinitions();
          foreach ($fields as $field) {
            if (!in_array($field->getName(), $excluded_base_fields) && !isset($options[$field->getName()])) {
              if (!in_array($field->getName(), array_filter($excluded_fields))) {
                $options[$field->getName()]['field_name'] = ($field->getLabel()) ? $field->getLabel() : $field->getName();
              }
            }
          }
        }
        $header = [
          'field_name' => $this->t('Field Name'),
        ];
        $form['#title'] .= ' - ' . $this->t('Select Fields to Alter');
        $form['table'] = [
          '#type' => 'tableselect',
          '#header' => $header,
          '#options' => $options,
          '#empty' => $this->t('No fields found'),
        ];
        break;

      case 2:
        foreach ($this->userInput['entities'] as $index => $entity) {
          $langcode = explode(':', $index)[1];
          $entity = $entity->getTranslation($langcode);
          $this->entity = $entity;
          foreach ($this->userInput['fields'] as $field_name) {
            $temp_form_element = [];
            $temp_form_state = new FormState();
            $temp_form_state->setFormObject($form_state->getFormObject());
            if ($field = $entity->getFieldDefinition($field_name)) {
              // @todo Dates fields are incorrect due to @todo s below.
              if ($field->getType() == 'datetime') {
                $plugin_definition = $this->pluginManager->getDefinition('datetime_default');
                $widget = new DateTimeWidgetBase('datetime', $plugin_definition, $entity->get($field_name)->getFieldDefinition(), [], []);
                $form['#parents'] = [];
                $form['default_value_input'][$field_name] = $widget->form($entity->get($field_name), $form, $form_state);
              }
              elseif ($field->getType() == 'entity_reference_revisions') {
                // @todo allow other types of entity_reference_revisions
                // currently paragraphs only.
                $plugin_definition = $this->pluginManager->getDefinition('paragraphs');
                $widget = new ParagraphsWidget('paragraphs', $plugin_definition, $entity->get($field_name)->getFieldDefinition(), [], []);
                $form['#parents'] = [];
                $form['default_value_input'][$field_name] = $widget->form($entity->get($field_name), $form, $form_state);
                if ($form_state->getTriggeringElement()['#name'] != 'op') {
                  $paragraph_type = $form_state->getTriggeringElement()['#bundle_machine_name'];
                  $form_state->set('paragraph_type', $paragraph_type);
                }
              }
              else {
                // @todo Implement field form elements for other field types.
                $form[$field_name] = $entity->get($field_name)->defaultValuesForm($temp_form_element, $temp_form_state);
              }
            }
          }
        }
        $form['#title'] .= ' - ' . $this->t('Enter New Values in Appropriate Fields');
        break;

      case 3:
        $form['#title'] .= ' - ' . $this->t('Are you sure you want to alter @count_fields fields on @count_entities entities?',
            [
              '@count_fields' => count($this->userInput['fields']),
              '@count_entities' => count($this->userInput['entities']),
            ]
        );
        $submit_label = 'Update Fields';

        break;
    }

    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $submit_label,
      '#button_type' => 'primary',
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    // @todo .
  }

}
