<?php

function likinormas_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id = NULL)
{
  if (isset($form_id)) {
    return;
  }

  $form['registration'] = array(
    '#type' => 'details',
    '#title' => t('Funcionalidad de facebook en los formularios de registro y login.'),
    '#open' => FALSE,
  );


  $form['registration']['boolean_setting'] = [
    '#type' => 'checkbox',
    '#title' => t('Activar/Desactivar'),
    '#default_value' => theme_get_setting('boolean_setting'),
    '#description' => t('La opcion afecta al formulario de registro y login.'),
  ];
}
