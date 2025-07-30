<?php

namespace Drupal\cdi_dependent_select\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\ReplaceCommand;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Returns responses for Cdi Dependent Select routes.
 */
class CdiDependentSelectController extends ControllerBase {

  /**
   * Drupal\Core\Entity\EntityTypeManagerInterface;
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface;
   */
  protected $entityTypeManager;

  /**
   * @inerhitDoc
   */
  public function __construct(EntityTypeManagerInterface $entityTypeManager) {
    $this->entityTypeManager = $entityTypeManager;
  }

  /**
   * @inerhitDoc
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager')
    );
  }

  /**
   * Builds the response.
   */
  public function buildSubcategoriesRules($id, $ids=null) {
    $response = new AjaxResponse();
    $selector = "[name='rule_subcategory_target_id']";

    $subcategories_query = $this->entityTypeManager
      ->getStorage('taxonomy_term')
      ->getQuery()
      ->condition('vid', 'rules_subcategory')
      ->condition('related_category', $id)
      ->sort('order')
      ->accessCheck(FALSE)
      ->execute();

    $subcategories = $this->entityTypeManager
      ->getStorage('taxonomy_term')
      ->loadMultiple($subcategories_query);

    $options = "<option value='All'>" . t('- Cualquiera -') . "</option>";
    if ($subcategories) {
      foreach ($subcategories as $key => $subcategory) {
        if($key == $ids){
          $options .= "<option value='" . $key . "' selected='selected'>" . $subcategory->get('name')->value . "</option>";
        }else{
          $options .= "<option value='" . $key . "'>" . $subcategory->get('name')->value . "</option>";
        }
      }
    }

    $select_list = "<select id='edit-rule-subcategory-target-id' name='rule_subcategory_target_id' class='form-select form-element form-element--type-select'
       data-drupal-selector='edit-rule-subcategory-target-id' > " . $options . " </select>";

    $response->addCommand(new ReplaceCommand($selector, $select_list));
    return $response;
  }

  /**
   * Builds the response.
   */
  public function buildSubcategoriesSpecifications($id, $ids=null) {
    $response = new AjaxResponse();
    $selector = "[name='specification_subcategory_target_id']";

    $subcategories_query = $this->entityTypeManager
      ->getStorage('taxonomy_term')
      ->getQuery()
      ->condition('vid', 'rules_specification_subcategory')
      ->condition('related_category', $id)
      ->sort('order')
      ->accessCheck(FALSE)
      ->execute();

    $subcategories = $this->entityTypeManager
      ->getStorage('taxonomy_term')
      ->loadMultiple($subcategories_query);

    $options = "<option value='All'>" . t('- Cualquiera -') . "</option>";
    if ($subcategories) {
      foreach ($subcategories as $key => $subcategory) {
        if($key == $ids){
          $options .= "<option value='" . $key . "' selected='selected'>" . $subcategory->get('name')->value . "</option>";
        }else{
          $options .= "<option value='" . $key . "'>" . $subcategory->get('name')->value . "</option>";
        }
      }
    }
    $select_list = "<select id='edit-specification-subcategory-target-id' name='specification_subcategory_target_id' class='form-select form-control'
       data-drupal-selector='edit-specification-subcategory-target-id' > " . $options . " </select>";

    $response->addCommand(new ReplaceCommand($selector, $select_list));

    return $response;
  }
}
