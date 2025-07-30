<?php

namespace Drupal\likinormas_base\EventSubscriber;

use Drupal\feeds\Event\ParseEvent;
use Drupal\feeds\EventSubscriber\AfterParseBase;
use Drupal\feeds\Exception\SkipItemException;
use Drupal\feeds\Feeds\Item\DynamicItem;
use Drupal\feeds\Feeds\Item\ItemInterface;

/**
 * Reacts on articles being processed.
 */
class FeedsSubscriber extends AfterParseBase {

  /**
   * {@inheritdoc}
   */
  protected function alterItem(ItemInterface $item, ParseEvent $event) {

/*    $processor_plugin = $event->getFeed()
      ->getType()
      ->getProcessor()
      ->getPluginId();
    $item_values = $item->toArray();

    $subcategory_value = $item->get('sub_categoria');

    if (empty($subcategory_value)) {
      $item->set('sub_categoria', NULL);
    }*/

  }
}
