<?php

namespace Drupal\likinormas_base\Plugin\Block;


use Drupal\Core\Block\BlockBase;
use Drupal\user\Entity\User;


/**
 * Provides a block with a simple text.
 *
 * @Block(
 *   id = "profile_picture_block",
 *   admin_label = @Translation("Foto de perfil usuario"),
 *   category = "User Blocks"
 * )
 */
class ProfilePictureBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $form['#theme'] = 'profile-picture-block';
    $form['#cache']['max-age'] = 0;
    $user = User::load(\Drupal::currentUser()->id());
    if($user->get('user_picture')->entity !== null){
      $uri = $user->get('user_picture')->entity->getFileUri();
      $form['user_image'] = [
        '#theme' => 'image_style',
        '#style_name' => 'thumbnail',
        '#uri' => $uri,
      ];
    } else {
      $form['user_image'] = [
        '#markup' => '<img src="/themes/custom/likinormas/dist/assets/images/avatar-profile..png">',
      ];
    }
    return $form;
  }
}
