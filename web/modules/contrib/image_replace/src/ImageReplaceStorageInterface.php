<?php

namespace Drupal\image_replace;

/**
 * Defines the interface for image_replace storage implementations.
 */
interface ImageReplaceStorageInterface {

  /**
   * Determine replacement image uri for the given original filename.
   *
   * @param string $target_style
   *   The target image style name.
   * @param string $target_uri
   *   The uri of the image for which to find a replacement.
   *
   * @return string|null
   *   The replacement uri when a mapping for the given uri/style combination
   *   exists.
   */
  public function get(string $target_style, string $target_uri): ?string;

  /**
   * Add an image replacement mapping.
   *
   * @param string $target_style
   *   The target image style name.
   * @param string $target_uri
   *   The uri of the image for which to set a replacement.
   * @param string $replacement_uri
   *   The replacement uri to set for the given uri/style combination.
   */
  public function add(string $target_style, string $target_uri, string $replacement_uri): void;

  /**
   * Remove the given image replacement mapping if it exists.
   *
   * @param string $target_style
   *   The target image style name.
   * @param string $target_uri
   *   The uri of the image for which to remove the replacement.
   */
  public function remove(string $target_style, string $target_uri): void;

}
