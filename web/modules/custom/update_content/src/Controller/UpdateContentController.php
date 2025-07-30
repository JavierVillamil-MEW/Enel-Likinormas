<?php

namespace Drupal\update_content\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\node\Entity\NodeType;
use Drupal\taxonomy\Entity\Term;
use Drupal\Core\Database\Database;
use Drupal\taxonomy\TermStorageInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Returns responses for update content routes.
 */
class UpdateContentController extends ControllerBase
{

  /**
   * Builds the response.
   */
  public function build($content, $field, $validate)
  {

    $archivo = [
      ['archivo' => '1029.html'],
      ['archivo' => '1030_1030.html'],
      ['archivo' => '1031_1031.html'],
      ['archivo' => '1032.html'],
      ['archivo' => '1035.html'],
      ['archivo' => '1036.html'],
      ['archivo' => '1039.html'],
      ['archivo' => '1040.html'],
      ['archivo' => '1041.html'],
      ['archivo' => '1042_1042.html'],
      ['archivo' => '1044.html'],
      ['archivo' => '1045.html'],
      ['archivo' => '1046.html'],
      ['archivo' => '1047.html'],
      ['archivo' => '1049.html'],
      ['archivo' => '1050.html'],
      ['archivo' => '1052.html'],
      ['archivo' => '1054.html'],
      ['archivo' => '1056_1056.html'],
      ['archivo' => '1057_1057.html'],
      ['archivo' => '1059.html'],
      ['archivo' => '1060.html'],
      ['archivo' => '1232.html'],
      ['archivo' => '1324_1324.html'],
      ['archivo' => '1664.html'],
      ['archivo' => '1782_1782.html'],
      ['archivo' => '1783.html'],
      ['archivo' => '1794_1794.html'],
      ['archivo' => '1795.html'],
      ['archivo' => '1796.html'],
      ['archivo' => '1797.html'],
      ['archivo' => '1799.html'],
      ['archivo' => '1800_1800.html'],
      ['archivo' => '1801_1801.html'],
      ['archivo' => '1802.html'],
      ['archivo' => '1803_1803.html'],
      ['archivo' => '1804.html'],
      ['archivo' => '1805.html'],
      ['archivo' => '1807.html'],
      ['archivo' => '1808.html'],
      ['archivo' => '1816.html'],
      ['archivo' => '1817_1817.html'],
      ['archivo' => '1818.html'],
      ['archivo' => '1819_1819.html'],
      ['archivo' => '1820.html'],
      ['archivo' => '1821.html'],
      ['archivo' => '1827.html'],
      ['archivo' => '1828_1828.html'],
      ['archivo' => '1839_1839.html'],
      ['archivo' => '1840_1840.html'],
      ['archivo' => '1841_1841.html'],
      ['archivo' => '1888_1888.html'],
      ['archivo' => '1889_1889.html'],
      ['archivo' => '1890_1890.html'],
      ['archivo' => '1891_1891.html'],
      ['archivo' => '1900.html'],
      ['archivo' => '1932_1932.html'],
      ['archivo' => '1933_1933.html'],
      ['archivo' => '1939.html'],
      ['archivo' => '1940_1940.html'],
      ['archivo' => '467_467.html'],
      ['archivo' => '468_468.html'],
      ['archivo' => '472_472.html'],
      ['archivo' => '473.html'],
      ['archivo' => '474_474.html'],
      ['archivo' => '481.html'],
      ['archivo' => '482.html'],
      ['archivo' => '485.html'],
      ['archivo' => '570_570.html'],
      ['archivo' => '571_571.html'],
      ['archivo' => '598_598.html'],
      ['archivo' => '599.html'],
      ['archivo' => '600.html'],
      ['archivo' => '601.html'],
      ['archivo' => '609_609.html'],
      ['archivo' => '610_610.html'],
      ['archivo' => '611_611.html'],
      ['archivo' => '612.html'],
      ['archivo' => '613.html'],
      ['archivo' => '614_614.html'],
      ['archivo' => '615_615.html'],
      ['archivo' => '618.html'],
      ['archivo' => '619_619.html'],
      ['archivo' => '620_620.html'],
      ['archivo' => '622_622.html'],
      ['archivo' => '623_623.html'],
      ['archivo' => '624_624.html'],
      ['archivo' => '628_628.html'],
      ['archivo' => '632.html'],
      ['archivo' => '633_633.html'],
      ['archivo' => '634.html'],
      ['archivo' => '640_640.html'],
      ['archivo' => '641.html'],
      ['archivo' => '642_642.html'],
      ['archivo' => '643_643.html'],
      ['archivo' => '644_644.html'],
      ['archivo' => '672.html'],
      ['archivo' => '673_673.html'],
      ['archivo' => '683.html'],
      ['archivo' => '684_684.html'],
      ['archivo' => '685_685.html'],
      ['archivo' => '686_686.html'],
      ['archivo' => '687_687.html'],
      ['archivo' => '688.html'],
      ['archivo' => '691.html'],
      ['archivo' => '692_692.html'],
      ['archivo' => '693.html'],
      ['archivo' => '694_694.html'],
      ['archivo' => '695.html'],
      ['archivo' => '696_696.html'],
      ['archivo' => '697_697.html'],
      ['archivo' => '699.html'],
      ['archivo' => '700.html'],
      ['archivo' => '701.html'],
      ['archivo' => '702.html'],
      ['archivo' => '703_703.html'],
      ['archivo' => '706_706.html'],
      ['archivo' => '707.html'],
      ['archivo' => '708.html'],
      ['archivo' => '710_710.html'],
      ['archivo' => '711.html'],

    ];


    // Ejecutar la consulta para obtener los IDs de los nodos.
    $query = \Drupal::entityQuery('node')
      ->condition('type', $content)
      ->condition('status', 1)
      ->accessCheck(TRUE);
    $nids = $query->execute();

    if (!empty($nids)) {
      $i = 1;
      foreach ($nids as $nid) {
        $node = \Drupal::entityTypeManager()
          ->getStorage('node')
          ->load($nid);

        if ($node->hasField($field)) {
          $fieldContent = $node->get($field)->value;
          foreach ($archivo as $item) {
            $tmpItem = 'href="../../archivo/' . $item['archivo'];
            if (!empty($item['archivo']) && !empty($fieldContent)) {
              $search = mb_strpos($fieldContent, $tmpItem);
              if ($search !== FALSE) {
                dump("Se encontró " . $tmpItem);
                dump("En el nodo " . $nid);
                dump("---------------" . $i . "-------------");
                $i++;
                $newString = str_replace($tmpItem, "", $fieldContent);
                $node->set($field, $newString);
                $node->set($field, [
                  'value' => $newString,
                  'format' => 'full_html',
                ]);
                if ($validate === "1") {
                  $node->save();
                }
              }
            }
          }
        }
      }
    }

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('TERMINADO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'),
    ];

    return $build;
  }

//  public function build2()
//  {
//
//
//    /*
//        // Ejecutar la consulta para obtener los IDs de los nodos.
//        $query = \Drupal::entityQuery('node')
//          ->condition('type', "rules_technical_rules")
//          ->condition('status', 1)
//          ->accessCheck(TRUE);
//        $nids = $query->execute();
//
//        if (!empty($nids)) {
//          $i = 1;
//          foreach ($nids as $nid) {
//            $node = \Drupal::entityTypeManager()
//              ->getStorage('node')
//              ->load($nid);
//            dump($nid);
//    //        $node->set('rule_subcategory', NULL); // Eliminar el campo de las subcategorías de las normas.
//    //        $node->set('rule_category', NULL); // Eliminar el campo de las categorías de las normas.
//            $node->save();
//
//
//            dump("----------------------------------");
//          }
//        }
//        */
//
//
//    /* $query2 = \Drupal::entityQuery('taxonomy_term')
//               ->condition('vid', "rules_category")
//               ->accessCheck(TRUE);
//             $tids = $query2->execute();*/
//
//    /*
//     $query2 = \Drupal::entityQuery('taxonomy_term')
//       ->condition('vid', "rules_subcategory")
//       ->accessCheck(TRUE);
//     $tids = $query2->execute();
//
//     dump($tids);
//
//     if (!empty($tids)) {
//       // Cargar los términos como entidades.
//       $terms = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadMultiple($tids);
//
//       // Eliminar los términos.
//       \Drupal::entityTypeManager()->getStorage('taxonomy_term')->delete($terms);
//
//     }*/
//
//
//
//  /*  $numeric_indexed_array = [
//
//      [
//        'name' => 'OTROS',
//        'children' => []
//      ],
//      [
//        'name' => 'ALUMBRADO PUBLICO',
//        'children' => [
//          [
//            'name' => 'CANALIZACIONES',
//            'children' => []
//          ],
//          [
//            'name' => 'GENERALIDADES AP',
//            'children' => []
//          ],
//          [
//            'name' => 'MATERIALES EQUIPOS',
//            'children' => []
//          ],
//          [
//            'name' => 'INSTALACION EQUIPOS',
//            'children' => []
//          ],
//          [
//            'name' => 'CENTROS TRANSFORMACION',
//            'children' => []
//          ],
//          [
//            'name' => 'CIRCUITOS SUBTERRANEOS',
//            'children' => []
//          ],
//          [
//            'name' => 'INSTALACION LUMINARIAS',
//            'children' => []
//          ],
//          [
//            'name' => 'INDICE ALUMBRADO PUBLICO',
//            'children' => []
//          ],
//          [
//            'name' => 'CIRCUITOS ALUMBRADO PUBLICO',
//            'children' => []
//          ]
//        ]
//      ],
//      [
//        'name' => 'CABLES SUBTERRANEOS',
//        'children' => [
//          [
//            'name' => 'CABLES',
//            'children' => []
//          ],
//          [
//            'name' => 'TRANSICIONES',
//            'children' => []
//          ],
//          [
//            'name' => 'GENERALIDADES CS',
//            'children' => []
//          ],
//          [
//            'name' => 'CAMARAS DUCTERIAS',
//            'children' => []
//          ],
//          [
//            'name' => 'INDICE CABLES SUBTERRANEOS',
//            'children' => []
//          ],
//          [
//            'name' => 'TERMINALES CABLES MEDIA TENSION',
//            'children' => []
//          ],
//          [
//            'name' => 'CODOS TERMINALES BARRAJES PREFORMADOS',
//            'children' => []
//          ]
//        ]
//      ],
//      [
//        'name' => 'ACOMETIDAS MEDIDORES',
//        'children' => [
//          [
//            'name' => 'GENERALIDADES AE',
//            'children' => []
//          ],
//          [
//            'name' => 'ACOMETIDAS ELECTRICAS',
//            'children' => []
//          ],
//          [
//            'name' => 'CAJAS ARMARIOS CELDAS',
//            'children' => []
//          ],
//          [
//            'name' => 'EQUIPO AUXILIAR MEDICION',
//            'children' => []
//          ],
//          [
//            'name' => 'INDICE ACOMETIDAS MEDIDORES',
//            'children' => []
//          ],
//          [
//            'name' => 'MEDIDORES ENERGIA ELECTRICA',
//            'children' => []
//          ],
//          [
//            'name' => 'LINEAS AEREAS URBANAS DISTRIBUCION',
//            'children' => []
//          ],
//          [
//            'name' => 'SISTEMAS EMERGENCIA INSTALADOS CLIENTE',
//            'children' => []
//          ]
//        ]
//      ],
//      [
//        'name' => 'LINEAS AEREAS RURALES DISTRIBUCION',
//        'children' => [
//          [
//            'name' => 'GENERALIDADES LAR',
//            'children' => []
//          ],
//          [
//            'name' => 'INDICE LINEAS AEREAS RURALES',
//            'children' => []
//          ],
//          [
//            'name' => 'LINEAS AEREAS RURALES 34 5KV',
//            'children' => []
//          ],
//          [
//            'name' => 'LINEAS AEREAS RURALES 13 2 11 4KV',
//            'children' => []
//          ],
//          [
//            'name' => 'LINEAS AEREAS RURALES BAJA TENSION',
//            'children' => []
//          ],
//          [
//            'name' => 'PUESTA TIERRA CABLES GUARDA TEMPLETES',
//            'children' => []
//          ],
//          [
//            'name' => 'LINEAS AEREAS RURALES BIFILARES 13 2 11 4',
//            'children' => []
//          ]
//        ]
//      ],
//      [
//        'name' => 'LINEAS AEREAS URBANAS DISTRIBUCION',
//        'children' => [
//          [
//            'name' => 'RED COMPACTA',
//            'children' => []
//          ],
//          [
//            'name' => 'GENERALIDADES',
//            'children' => []
//          ],
//          [
//            'name' => 'PUESTA TIERRA',
//            'children' => []
//          ],
//          [
//            'name' => 'TEMPLETES RETENIDAS',
//            'children' => []
//          ],
//          [
//            'name' => 'EQUIPOS REDES AEREAS',
//            'children' => []
//          ],
//          [
//            'name' => 'LINEAS AEREAS 34 5KV',
//            'children' => []
//          ],
//          [
//            'name' => 'RED CABLE CUADRUPLEX',
//            'children' => []
//          ],
//          [
//            'name' => 'LINEAS AEREAS 11 4 13 2 KV',
//            'children' => []
//          ],
//          [
//            'name' => 'LINEAS AEREAS BAJA TENSION',
//            'children' => []
//          ],
//          [
//            'name' => 'INDICE LINEAS AEREAS URBANAS',
//            'children' => []
//          ],
//          [
//            'name' => 'RED AISLADA AEREA MEDIA TENSION',
//            'children' => []
//          ],
//          [
//            'name' => 'GENERALIDADES LINEAS AEREAS URBANAS',
//            'children' => []
//          ]
//        ]
//      ],
//      [
//        'name' => 'CENTROS TRANSFORMACION REDES SUBTERRANEOS',
//        'children' => [
//          [
//            'name' => 'EQUIPOS',
//            'children' => []
//          ],
//          [
//            'name' => 'CONVENCIONES',
//            'children' => []
//          ],
//          [
//            'name' => 'GENERALIDADES CTS',
//            'children' => []
//          ],
//          [
//            'name' => 'CENTROS TRANSFORMACION PEDESTAL',
//            'children' => []
//          ],
//          [
//            'name' => 'CENTROS TRANSFORMACION CAPSULADOS',
//            'children' => []
//          ],
//          [
//            'name' => 'CENTROS TRANSFORMACION SUBTERRANEOS',
//            'children' => []
//          ],
//          [
//            'name' => 'CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV',
//            'children' => []
//          ],
//          [
//            'name' => 'INDICE CENTROS TRANSFORMACION REDES SUBTERRANEAS',
//            'children' => []
//          ],
//          [
//            'name' => 'CENTROS TRANSFORMACION LOCAL FRENTE VIVO INSTALACIONES EXISTENTES',
//            'children' => []
//          ]
//        ]
//      ],
//      [
//        'name' => 'CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES',
//        'children' => [
//          [
//            'name' => 'GENERALIDADES CTU CTR',
//            'children' => []
//          ],
//          [
//            'name' => 'CENTROS TRANSFORMACION AEREOS RURALES',
//            'children' => []
//          ],
//          [
//            'name' => 'CENTROS TRANSFORMACION RURALES 34 5 KV 0',
//            'children' => []
//          ],
//          [
//            'name' => 'CENTROS TRANSFORMACION RURALES 34 5 KV 2',
//            'children' => []
//          ],
//          [
//            'name' => 'CENTROS TRANSFORMACION RURALES 34 5 KV OBRA',
//            'children' => []
//          ],
//          [
//            'name' => 'CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS',
//            'children' => []
//          ],
//          [
//            'name' => 'INDICE CENTROS TRANSFORMACION REDES AEREAS URBANAS',
//            'children' => []
//          ],
//          [
//            'name' => 'CENTROS TRANSFORMACION INDUSTRIAL 34 5 KV INSTALACION',
//            'children' => []
//          ]
//        ]
//      ]
//    ];
//
//    foreach ($numeric_indexed_array as $item) {
//      dump($item['name']);*/
//      //Crear categorías
//     /* $term = Term::create([
//        'vid' => "rules_category",
//        'name' => $item['name'],
//      ]);
//
//      $term->save();*/
//
//      // buscar id de categoría por nombre
//
//     /* $queryid = \Drupal::entityQuery('taxonomy_term')
//        ->condition('vid', "rules_category")
//        ->condition('name', $item['name'])
//        ->accessCheck(TRUE);
//      $tid = $queryid->execute();
//      $id=0;
//      foreach ($tid as $id) {
//
//        dump($id);
//      }*/
//
////      dump("|||||||||||||||||||||");
////      foreach ($item['children'] as $items) {
//      /*  dump($items['name']);
//        //Crear subcategorías
//         $term = Term::create([
//           'vid' => "rules_subcategory",
//           'name' => $items['name'],
//           'related_category' => [
//             'target_id' => $id,
//           ],
//         ]);
//         $term->save();
//        dump("*************************");*/
////      }
////    }
//
//
//
//
//    $indexed_array = [
//      [
//        "nombre" => "AP815 Tuerca cónica cabeza  fusible para aseguramiento de la luminaria al soporte",
//        "categoria" => "ALUMBRADO PUBLICO"
//      ],
//      [
//        "nombre" => "Generalidades 6.2. Circuitos de alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CIRCUITOS ALUMBRADO PUBLICO"
//      ],
//      [
//        "nombre" => "AP173 Circuito subterráneo de alumbrado público de vías arterias y locales",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CIRCUITOS ALUMBRADO PUBLICO"
//      ],
//      [
//        "nombre" => "AP174 Diagrama de conexión en redes aéreas de AP",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CIRCUITOS ALUMBRADO PUBLICO"
//      ],
//      [
//        "nombre" => "AP181 Características del cable de cobre o alumino de baja tensión THW 75ºC",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CIRCUITOS ALUMBRADO PUBLICO"
//      ],
//      [
//        "nombre" => "AP172 Diagrama de un circuito subterráneo de alumbrado público de vías arterias V0-V1-V2-V3 tensión 380\/220 V y 480\/277 V",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CIRCUITOS ALUMBRADO PUBLICO"
//      ],
//      [
//        "nombre" => "AP170 Disposición de los circuitos exclusivos de alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CIRCUITOS ALUMBRADO PUBLICO"
//      ],
//      [
//        "nombre" => "AP190 Circuitos  exclusivos y marcación para circuitos de alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CIRCUITOS ALUMBRADO PUBLICO"
//      ],
//      [
//        "nombre" => "AP180 Caracteristicas del cable de aluminio para alumbrado público doble capa (aislamiento y cubierta)",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CIRCUITOS ALUMBRADO PUBLICO"
//      ],
//      [
//        "nombre" => "AP162 Secciones transversales de las vías peatonales V-9 y via tipo parque",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "GENERALIDADES AP"
//      ],
//      [
//        "nombre" => "Generalidades 6.9. Recomendaciones para el mantenimiento de alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "GENERALIDADES AP"
//      ],
//      [
//        "nombre" => "AP158 Secciones transversales de la vía V-4",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "GENERALIDADES AP"
//      ],
//      [
//        "nombre" => "AP155 Secciones transversales de la vía V-1",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "GENERALIDADES AP"
//      ],
//      [
//        "nombre" => "AP154 Secciones transversales de la vía V-0",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "GENERALIDADES AP"
//      ],
//      [
//        "nombre" => "Generalidades 6.1 Sistema de alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "GENERALIDADES AP"
//      ],
//      [
//        "nombre" => "AP157   Secciones transversales de la vía V-3",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "GENERALIDADES AP"
//      ],
//      [
//        "nombre" => "AP159 Sección transversal de vía V-5",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "GENERALIDADES AP"
//      ],
//      [
//        "nombre" => "AP156 Seccciones transversales de la vía V-2",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "GENERALIDADES AP"
//      ],
//      [
//        "nombre" => "AP160 Sección transversal de vía V-6",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "GENERALIDADES AP"
//      ],
//      [
//        "nombre" => "AP161 Secciones transversales de las vías V-7 y V- 8",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "GENERALIDADES AP"
//      ],
//      [
//        "nombre" => "AP330 Luminaria peatonal sencilla en poste metálico de 4”",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION LUMINARIAS"
//      ],
//      [
//        "nombre" => "AP336 Instalación poste metálico para vía vehicular, soporte sencillo",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION LUMINARIAS"
//      ],
//      [
//        "nombre" => "AP327 Recomendaciones de ubicación de luminarias según la cartilla de mobiliario urbano",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION LUMINARIAS"
//      ],
//      [
//        "nombre" => "AP334 Instalación poste histórico con brazo sencillo",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION LUMINARIAS"
//      ],
//      [
//        "nombre" => "AP331 Luminaria peatonal doble en poste metálico de 4”",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION LUMINARIAS"
//      ],
//      [
//        "nombre" => "AP337 Instalación poste metálico para vía vehicular, soporte doble",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION LUMINARIAS"
//      ],
//      [
//        "nombre" => "AP328 Instalación de luminarias peatonales de acuerdo con la cartilla del mobiliario urbano",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION LUMINARIAS"
//      ],
//      [
//        "nombre" => "AP335 Instalación poste histórico con brazo doble",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION LUMINARIAS"
//      ],
//      [
//        "nombre" => "AP332 Luminaria peatonal adosada a la fachada",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION LUMINARIAS"
//      ],
//      [
//        "nombre" => "AP329 Instalación de postes históricos de acuerdo con la cartilla del mobiliario urbano",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION LUMINARIAS"
//      ],
//      [
//        "nombre" => "AP325 Distancias de seguridad para luminarias con red de M.T.",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION LUMINARIAS"
//      ],
//      [
//        "nombre" => "AP333 Poste metálico para vía vehicular y peatonal (Doble propósito)",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION LUMINARIAS"
//      ],
//      [
//        "nombre" => "AP200 Distribución típica de ductos y cámaras",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CANALIZACIONES"
//      ],
//      [
//        "nombre" => "AP205 Llegada de ductos a cajas",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CANALIZACIONES"
//      ],
//      [
//        "nombre" => "AP281 Caja de inspección cilíndrica prefabricada para zonas verdes",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CANALIZACIONES"
//      ],
//      [
//        "nombre" => "Generalidades 6.3. Canalizaciones para redes eléctricas exclusivas de alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CANALIZACIONES"
//      ],
//      [
//        "nombre" => "AP221 Detalle de la zanja y relleno para el enterrado directo del cable",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CANALIZACIONES"
//      ],
//      [
//        "nombre" => "AP274 Caja de inspección para alumbrado público (Planta)",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CANALIZACIONES"
//      ],
//      [
//        "nombre" => "AP275 Placa para identificación en tapas",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CANALIZACIONES"
//      ],
//      [
//        "nombre" => "AP220 Detalles ductos, zanjas y rellenos. 1 ducto diámetro Ø3”",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CANALIZACIONES"
//      ],
//      [
//        "nombre" => "AP280 Caja de inspección para alumbrado ornamental comunal",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CANALIZACIONES"
//      ],
//      [
//        "nombre" => "AP207 Detalles ductos, zanjas y rellenos. 2 ductos diámetro Ø 3”",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CANALIZACIONES"
//      ],
//      [
//        "nombre" => "AP279  Detalle de anclaje del marco en caja de inspección",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CANALIZACIONES"
//      ],
//      [
//        "nombre" => "AP400 Acometidas subterráneas para circuitos de alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CIRCUITOS SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "Generalidades 6.6 Circuitos subterráneos de alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CIRCUITOS SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "AP402 Circuito subterráneo de alumbrado público con protección en B.T.",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CIRCUITOS SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "AP401 Acometida subterránea de los circuitos de alumbrado público de un transformador autoprotegido(CSP) instalado en poste",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CIRCUITOS SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "AP661 Centro de transformación capsulado. Medida en BT",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP523 Transformador de pedestal. Disposición de fusibles",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP535-2 Centro de transformación subterraneo. Transformador ocasionalmente sumergible. Corte",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AE607 Bomba contra incendios",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP656 Centro de transformación de pedestal, instalación exterior. Medición directa en BT",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP665 Centro de transformación de local. Medida directa en BT",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP526-1 Centro de transformación de pedestal para A.P. Seccionador de maniobras independiente del transformador",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP535-1 Centro de transformación subterraneo. Caja de inspección para transformador ocasionalmente sumergible. Vista de planta",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP520 Centro de transformación de pedestal para alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP525-1 Centro de transformación  de pedestal para A.P. - Obra civil transformador de pedestal",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP535 Centro de transformación subterraneo. Caja de inspección. Planta con tapas",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP651 Centro de distribución urbano. Transformador trifásico en poste medición directa en BT",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP534 Centro de transformación subterraneo generalidades",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP526 Conexión del centro de transformación para alumbrado público tipo pedestal",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP527 Señal preventiva a ubicar sobre puertas",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP525 Centro de transformación de pedestal para A.P.  -  Obra civil",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP652 Alternativa de medida de alumbrado público con repetidor",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP522 Centro de transformación de pedestal. Elementos preformados de conexión (Frente muerto)",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP600 Pintura para poste de alumbrado público. Nuevos y existentes",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP524 Centro de transformación de pedestal para A.P. Malla de puesta a tierra",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP521 Transformador de pedestal. Vista isométrica",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP655 Centros de transformación de pedestal. Medición directa en BT sobre carcasa",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP650 Medición de alumbrado publico para cargas > 5 kVA",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP657 Centro de transformación de pedestal, instalación interior. Medida directa en BT",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "CENTROS TRANSFORMACION"
//      ],
//      [
//        "nombre" => "AP315 Alternativas de alimentación para iluminación de una cancha de microfútbol nivel recreativo",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP307-1 Montaje de luminaria en vías locales (Conexión desde caja para acometidas)",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP301-1 Montaje de luminarias A.P. con soporte doble en poste de concreto - Vías arterias",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP312 Circuito exclusivo A.P. Construcción final de circuito con conductor trenzado",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP304 Montaje de luminarias en red aérea para la iluminación de canchas deportivas de nivel recreativo  (Existente)",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP307 Montaje de luminaria en vías locales de distribución con red trenzada.",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP316 Alternativas de alimentación para iluminación de una cancha  de baloncesto  nivel recreativo",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP311 Circuito exclusivo A.P. Construcción en línea con conductor trenzado",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP321 Montaje del contactor para control multiple de dos circuitos de alumbrado (Existente)",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP308 Montaje luminaria tipo aplique",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP313 Circuito exclusivo A.P. Construcción angular con conductor trenzado",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP309 Montaje luminaria tipo ornamental para conjuntos residenciales",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP300 Instalación de equipos para AP. Generalidades",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP322 Montaje de fotocontrol independiente para control múltiple de un circuito de alumbrado con carga menor de 1 000 W (Existente)Listado de materiales",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP320 Montaje del contactor para control multiple de A.P. (Existente)",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP301 Montaje de luminaria A.P. con soporte sencillo en poste de concreto – Vías arterias",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP310 Derivación para circuito exclusivo de A.P. desde la red áerea abierta de B.T. (Existente)",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP303 Prolongación desde una red principal de B.T. a una luminaria",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP302 Montaje de luminarias en red aérea exclusiva para A.P. en vías locales (Existente)",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INSTALACION EQUIPOS"
//      ],
//      [
//        "nombre" => "AP838 Tubo conduit PVC tipo pesado",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP852 Soporte metálico para base de fotocontrol",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP845 Conjunto eléctrico de sodio",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP805 Poste metálico de 16 metros con canasta",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "ET848 Driver para luminarias LED",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP831 Características de ductos corrugados de pvc",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP854 Porta fusible para contactor de alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP860 Contactor para control múltiple de alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP831-1 Accesorios para ductos de PVC=> Uniones, campanas, terminales y tapones",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP813 Poste metálico de 4” x 6 m para luminarias peatonales",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP817 Poste histórico con brazo doble",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP810 Soporte para luminaria horizontal. Vías secundarias (Existentes)",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP855 Porta fusible para luminaria instalación exterior",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP801 Postes para alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP810-1 Soporte extendido para luminaria horizontal",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP832-1 Accesorios para ductos de acero galvanizados",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP859 Fusibles limitadores de corriente para cables No 6, 4 y 2 AWG",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP842 Porta bombillas para luminarias",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP857 Fusible miniatura de 5 y 10 A para protección de luminarias  de sodio alta  presión",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP851 Base para fotocontrol independiente",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP853 Fusible de B.T. para protección de transformadores",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP819-1 Alambre monopolar de cobre para acometidas a luminarias de alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP800-1 Soportes usados en los postes de AP",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP847 Balastos para luminarias de alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP816 Poste histórico con brazo sencillo",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP839 Empalmes en resina para cables de baja tensión de A.P.",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP802 Poste metálico para alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP812 Tornillo soporte para brazo de luminaria",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP808-1 Soporte sencillo Ø2\" para poste metálico galvanizado",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP814 Soporte para luminaria  peatonal sencilla y doble",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP832 Tubo metálico galvanizado",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP839-1 Empalmes en cinta para cables de baja tensión de A.P.",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP807-1 Soporte doble Ø2\" con abrazadera para poste de concreto",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP856 Porta fusible sencillo  y doble para luminaria -Instalación interior",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP833 Banda plástica de indicación de ductos eléctricos instalados",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP880 Transformadores trifásicos para AP de 30, 45 y 75 KVA y monofásicos de 10, 15 y 25 KVA",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP810-4 Soporte extendido para fijación con abrazadera (2 800 mm)",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP818 Cable de cobre aislado THW No. 12 y 14 AWG – 600V",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP809 Soporte doble Ø 1 1\/2\" para poste metálico galvanizado",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP806 Soporte sencillo con abrazadera para poste de concreto",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP900 Convenciones para planos de levantamiento y diseño de redes de alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP810-5 Soporte para fijación en percha porta aislador de BT",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP800 Aceptación de materiales y equipos",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP820 Barraje preformado BT para fusibles limitadores  de corriente de cable de 6 salidas",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP808 Soporte sencillo Ø 1 1\/2\" para poste metálico galvanizado",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP810-3 Soporte sencillo para la fijación con abrazadera en poste de concreto",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP806-1 Soporte sencillo con abrazadera para poste de concreto 0,5m",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP819-2 Cable de cobre aislado No. 14 AWG con neutro concéntrico para acometidas a luminarias de AP",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP850 Fotocontrol",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP806-2 Soporte sencillo  Ø2\" con abrazadera para poste de concreto",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP811 Abrazadera para soporte de luminaria en vías secundarias",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP807 Soporte doble con abrazadera para poste de concreto",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP804 Poste de concreto de 27m para alumbrado publico con anillo movil",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP840 Bombillas de sodio y mercurio",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP858 Fusibles para contactor de control múltiple de alumbrado público (2x35 A  y  2x60 A  - 250 V, 3x65 A  y  3x100 A  - 600 V)",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP809-1 Soporte doble Ø2\" para poste metálico galvanizado",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP819 Cables monopolares de cobre para alambrado interno de luminarias de A.P.",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP338 Instalación de poste de fibra con luminaria LED ornamental",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "AP810-2 Soporte extendido para luminaria horizontal – Alternativa 2",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "MATERIALES EQUIPOS"
//      ],
//      [
//        "nombre" => "Índice. Alumbrado público",
//        "categoria" => "ALUMBRADO PUBLICO",
//        "sub_categoria" => "INDICE ALUMBRADO PUBLICO"
//      ],
//      [
//        "nombre" => "LA008-1 Servidumbres para líneas de transmisión",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION"
//      ],
//      [
//        "nombre" => "LA009 Cimentación de postes",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION"
//      ],
//      [
//        "nombre" => "LA008-2 Niveles de tensión para distribución",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION"
//      ],
//      [
//        "nombre" => "LA005 Distancias de construcción para circuitos 34,5 – 13,2 y 11,4 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION"
//      ],
//      [
//        "nombre" => "LA007 Distancias mínimas verticales y horizontales en redes de 34,5-13,2-11,4 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION"
//      ],
//      [
//        "nombre" => "LA008 Distancias mínimas en cruce de vías",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION"
//      ],
//      [
//        "nombre" => "LA341 circuito  secundario sencillo en conductor trenzado sobre muros retención lateral",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION"
//      ],
//      [
//        "nombre" => "LA006 Distancias de construcción para circuitos de 13,2 -11,4 kV y B.T.",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION"
//      ],
//      [
//        "nombre" => "LA671 Red Aislada - Estructuras Básicas 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED CABLE CUADRUPLEX"
//      ],
//      [
//        "nombre" => "LA477 Red compacta 11.4 kV tangencial  con retención inferior",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA461 Red compacta 11,4 kV circuito tangencial con ángulos hasta de 6°",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA467 Red compacta para ángulos de 61 ° a 90 °  con doble aislador 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA469 Red compacta 11,4 kv construcción tangencial de dos circuitos con brazo antibalanceo",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA480 Red compacta 34.5 kV. Final del circuito triangular",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA463 Red compacta para 34.5 kV circuito tangencial",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA465 Red compacta 11.4 kV Final del circuito triangular",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA478 Red compacta 11.4 kV. Retención doble triangular",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA450 Generalidades red compacta",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA462 Circuito con red compacta de MT y 34,5 kV instalación de separadores en vano",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA483 Red compacta 34.5 kV tangencial con retención inferior",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA466 Red compacta para ángulos de 61° a 90° con doble aislador 11,4  kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA468 Red compacta 11.4 kv estructura en ángulo para dos circuitos",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA481 Red compacta 34.5 kV. Retención doble triangular",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "LA472 Red compacta construcción tangencial de 2 ctos con brazo antibalanceo",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED COMPACTA"
//      ],
//      [
//        "nombre" => "Índice. Líneas aéreas urbanas",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "INDICE LINEAS AEREAS URBANAS"
//      ],
//      [
//        "nombre" => "LA219 Circuito primario sencillo entrada y salida subterránea para una subestación",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA203 Circuito primario sencillo construcción tangencial en ángulo",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA231 Circuito primario sencillo construcción en bandera con doble cruceta 2,5 m",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA213 Retención doble simétrica de circuito primario sencillo",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA220 Circuito primario sencillo cruce subterráneo de vías",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA206 Circuito primario sencillo cambio de ángulo a 90º con retención horizontal",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA246 Circuito primario sencillo. Construcción tangencial. Instalacion equipo de medida compacto \/ combinado",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA207 Circuito primario sencillo con doble derivación a 90º",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA202 Circuito primario sencillo construcción tangencial",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA250 Circuito primario doble construcción tangencial",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA257 Circuito primario doble con una salida de subestación",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA212 Final de circuito primario sencillo construcción tipo bandera (Cruceta 2,5m)",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA223 Montaje de seccionadores monopolares de 400 A - 15 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA240 Circuito primario sencillo – instalacion de medidor bicuerpo en cruceta",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA228 Circuito primario sencillo construcción tangencial con derivación subterránea",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA229 Circuito primario sencillo construcción tipo bandera triangular en extremo de cruceta",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA222 Retención doble circuito primario sencillo construcción tipo bandera",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA245 Circuito primario sencillo. Construcción en bandera. Instalacion  equipo de medida compacto \/ combinado",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA226 Ubicación de los indicadores de falla en la red aérea",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA208 Cruce de circuitos primarios sencillos diferentes",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA211 Final de circuito primario sencillo",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA210 Circuito primario sencillo con derivación a 90º retención superior existente",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA225 Instalación de indicadores de falla en líneas aéreas",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA233 Amarres primarios",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA204 Circuito primario sencillo construcción tipo bandera con cruceta de 2,5 m",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA205 Circuito primario sencillo construcción tipo bandera en ángulo",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA204-2 Montaje de antena radioeléctrica en red de media tensión desnuda",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA201 Estructuras básicas de 11,4 kV y 13,2 kV circuitos trifásicos",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA253 Circuito primario doble y derivación a 90°",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA262 Circuito primario sencillo estructura triangular con aisladores line post",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA252 Circuito primario doble construcciones tangencial y terminal",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA218 Circuito primario sencillo terminal con derivación de cable triplex",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA209 Circuito primario sencillo derivación a 90º con retención inferior",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA221 Circuito primario sencillo salida de subestación o subterranización del circuito principal",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA230 Circuito primario sencillo onstrucción tipo bandera en ángulo con cruceta de 2,5 m",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA227 Montaje de condensadores en la red de 11,4 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA251 Circuito primario doble construcción tangencial en ángulo",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA232 Circuito primario sencillo derivación trifásica con protección",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 11 4 13 2 KV"
//      ],
//      [
//        "nombre" => "LA408 Accesorios para puesta a tierra inmersa instalación poste de concreto",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA"
//      ],
//      [
//        "nombre" => "LA401 Accesorios para puesta a tierra instalación poste de concreto",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA"
//      ],
//      [
//        "nombre" => "LA400 Puestas a tierra",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA"
//      ],
//      [
//        "nombre" => "LA402 Accesorios para puesta a tierra instalación exterior al poste",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA"
//      ],
//      [
//        "nombre" => "LA011 Utilización de conectores en líneas aéreas de 11,4 – 13,2 y 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES"
//      ],
//      [
//        "nombre" => "LA010-1 Utilización de postes para Red Aislada",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES"
//      ],
//      [
//        "nombre" => "Generalidades 1.1 Normas de construcción redes aéreas urbanas de distribución",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES"
//      ],
//      [
//        "nombre" => "LA015 Distribución de cables de energía, televisión por cable, valor agregado telemáticos y comunicaciones",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES"
//      ],
//      [
//        "nombre" => "LA010-2 Utilización de postes para Red Compacta",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES LINEAS AEREAS URBANAS"
//      ],
//      [
//        "nombre" => "LA010-3-1 UTILIZACIÓN POSTES Y TEMPLETES PARA RED AÉREA RURAL DESNUDA DE MEDIA TENSIÓN",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES LINEAS AEREAS URBANAS"
//      ],
//      [
//        "nombre" => "LA010-2-1 Utilización postes y templetes pared aérea semiaislada de media tensión estructuras en bandera",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES LINEAS AEREAS URBANAS"
//      ],
//      [
//        "nombre" => "LA010-3 UTILIZACIÓN POSTES Y TEMPLETES PARA RED AÉREA DESNUDA URBANA DE MEDIA TENSIÓN",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES LINEAS AEREAS URBANAS"
//      ],
//      [
//        "nombre" => "LA413 Retenida terminal poste a poste con varilla de anclaje",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "TEMPLETES RETENIDAS"
//      ],
//      [
//        "nombre" => "LA419 Retenida terminal o en ángulo poste a varilla de anclaje (alternativas)",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "TEMPLETES RETENIDAS"
//      ],
//      [
//        "nombre" => "LA415 Retenida terminal bandera poste a poste con varilla de anclaje",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "TEMPLETES RETENIDAS"
//      ],
//      [
//        "nombre" => "LA410 Templetes y retenidas terminales",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "TEMPLETES RETENIDAS"
//      ],
//      [
//        "nombre" => "LA411 Retenida terminal o en ángulo poste a varilla de anclaje",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "TEMPLETES RETENIDAS"
//      ],
//      [
//        "nombre" => "LA121 Circuito urbano 34,5 kV salida de subestación o subterranización del circuito principal",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA158 Circuito urbano 34,5 kV en bandera con circuito primario en bandera",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA112 Circuito urbano 34,5 kV retención doble en bandera",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA120 Circuito urbano 34,5 kV cruce subterraneo de vías",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA117 Circuito urbano 34,5 kV con derivación corta cable triplex longitud menor de 100 m",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA109 Circuito urbano 34,5 kV derivación a 90º con retención horizontal",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA105 Circuito urbano 34,5 kV construcción bandera en ángulo",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA104 Circuito urbano 34,5 kV construcción en bandera",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA157 Circuito urbano 34,5 kV con circuito  primario 11,4 kV en cambio de ángulo a 90º",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA118 Circuito urbano 34,5 kV retención con derivación larga en cable triplex longitud mayor de 100 m",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA101 Estructuras básicas y circuitos dobles 34,5 kv y 11,4 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA106 Circuito urbano 34,5 kV cambio de ángulo a 90º con retención horizontal",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA113 Circuito urbano 34,5 kV retención doble",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA111 Final de circuito urbano 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA163 Retención doble circuito urbano 34,5 kV con circuito primario sencillo 11,4 kV en construcción tangencial",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA159 Circuito urbano 34,5 kV en bandera con circuito de 11,4 ó 13,2 kV en bandera para ángulos entre 6º y 20º",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA165 Circuito urbano 34,5 kV cambio de ángulo a 90º con retención horizontal y circuito tangencial sencillo de 11,4 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA119 Circuito urbano 34,5 kV entrada y salida subterránea para una subestación de instalación interior",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA172 Montaje de seccionadores verticales monopolares 600 A en circuitos de 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA171 Montaje de seccionadores horizontales monopolares 600 A en circuitos de 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS 34 5KV"
//      ],
//      [
//        "nombre" => "LA336 Montaje de seccionador portafusible 600 A para línea de B.T.",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA320 Circuito secundario sencillo en conductor trenzado construcción en línea",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA326-1 Salidas subterraneas de B.T. a red aérea en conductor trenzado con amarre preformado - Alternativa",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA342 Circuito secundario sencillo en conductor trenzado sobre muros retención frontal",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA344 Circuito secundario sencillo en conductor trenzado sobre muros retención doble",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "Generalidades 1.3.1. Circuitos secundarios aéreos de B.T",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA320-1 Circuito secundario sencillo en conductor trenzado construcción en línea con extensión",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA348 Circuito secundario sencillo en conductor trenzado sobre muros derivación subterránea",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA339 Estructuras básicas redes trenzadas sobre muros",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA327 Circuito secundario en retención doble con conductor trenzado de B.T.",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA321 Final de circuito secundario sencillo en conductor trenzado",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA343 Circuito secundario sencillo en conductor trenzado sobre muros con derivación",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA346 Circuito secundario sencillo, conductor trenzado sobre muros. Derivación a luminaria",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA347 Circuito secundario sencillo en conductor trenzado sobre muros construcción en línea con caja de barrajes",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA345 Circuito secundario sencillo en conductor trenzado sobre muros cambio de ángulo",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA325 Circuito secundario doble  en conductor trenzado-construcción angular a 90° con derivación",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA327-1 Circuito secundario en retención doble con conductor trenzado de B.T. con amarre preformado - Alternativa",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA350 Circuito primario sencillo en conductor trenzado sobre muros afloramiento con instalación de seccionador",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA324-2 Circuito secundario sencillo en conductor trenzado construcción  angular con amarre preformado - Alternativa",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA326 Salidas subterraneas de B.T. a red aérea en conductor trenzado",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA324  Circuito secundario sencillo en conductor trenzado construcción angular",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA335 Montaje de seccionador portafusible 160 A para líneas de B.T",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA330 Circuito secundario sencillo y alumbrado público, para cualquier configuración de circuito primario",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA322 Circuito secundario sencillo con derivación en conductor trenzado",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA319 Estructuras básicas. Circuitos secundarios en conductor trenzado de B.T.",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA321-1  Final de circuito secundario sencillo en conductor trenzado con amarre preformado - Alternativa.",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA329 Circuito secundario sencillo en conductor trenzado con A.P.",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA323 Circuito secundario doble en conductor trenzado construcción en línea",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA340 Circuito secundario sencillo en conductor trenzado sobre muros construcción en línea",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA305 Amarres secundarios de B.T.",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS BAJA TENSION"
//      ],
//      [
//        "nombre" => "LA515-B Red 11,4 kV o 13,2 kV Montaje de seccionalizador (SZ) bandera. Con SPT en doble fleje",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "EQUIPOS REDES AEREAS"
//      ],
//      [
//        "nombre" => "LA515-4 Red 11,4 kV o 13,2 kV Montaje de seccionalizador (SZ) central. Afloramiento con barraje y derivación",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "EQUIPOS REDES AEREAS"
//      ],
//      [
//        "nombre" => "LA655 Red aislada - Transición de red aislada a red desnuda 11,4 kV o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "EQUIPOS REDES AEREAS"
//      ],
//      [
//        "nombre" => "LA515-2 Red 11,4 kV o 13,2 kV Montaje de seccionalizador (SZ) central. Afloramiento al lado de la cargal",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "EQUIPOS REDES AEREAS"
//      ],
//      [
//        "nombre" => "LA515-1 Red 11,4 kV o 13,2 kV montaje de seccionalizador (SZ) central. Afloramiento al lado fuente",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "EQUIPOS REDES AEREAS"
//      ],
//      [
//        "nombre" => "LA515-3 Red 11,4 kV o 13,2 kV Montaje de seccionalizador (SZ) central. Afloramientos fuente y carga",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "EQUIPOS REDES AEREAS"
//      ],
//      [
//        "nombre" => "LA515-A Red 11,4 kV o 13,2 kV Montaje de seccionalizador (SZ) central. Con SPT en doble fleje",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "EQUIPOS REDES AEREAS"
//      ],
//      [
//        "nombre" => "LA501 Línea 34,5 kV montaje de reconectador",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "EQUIPOS REDES AEREAS"
//      ],
//      [
//        "nombre" => "LA503 Línea 13,2 –11,4 kV montaje de reconectador con transformador de potencial",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "EQUIPOS REDES AEREAS"
//      ],
//      [
//        "nombre" => "LA510 Linea 13,2 – 11,4 kV montaje de reconectador",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "EQUIPOS REDES AEREAS"
//      ],
//      [
//        "nombre" => "LA654 Red aislada - retención 11,4 kV o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "EQUIPOS REDES AEREAS"
//      ],
//      [
//        "nombre" => "LA660-1 Red Aislada - Derivación de red aislada a red compacta 11,4 kV o 13,2 kV, con seccionamiento",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA677    Red Aislada - Transición red aislada a red subterránea 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA676    Red Aislada - Transición de red aislada a red compacta 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA681    Red Aislada - Derivación a red subterránea 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA679    Red Aislada - Derivación a red desnuda 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA664-1 Red Aislada - Instalación de reconectador (RC) a 11,4 kV o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA678    Red Aislada - Transición entre red aislada 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA653 Red aislada - suspensión 11,4 kV o 13,2  kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA661 Red Aislada - Derivación de red aislada a red subterránea 11,4 kV o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA680-1 Red Aislada - Derivación a red compacta 34,5 kV, con seccionamiento",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA683    Red Aislada - Derivación a transformador 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA660 Red Aislada - Derivación de red aislada a red compacta 11,4 kV o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA680    Red Aislada - Derivación a red compacta 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA650 Red aislada - generalidades",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA662 Red Aislada - Derivación de red aislada a red aislada 11,4 kV o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA672 Red Aislada - Final de circuito 34,5kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA674 Red Aislada - Retención 34,5kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA657 Red Aislada - Transición de red aislada a red subterránea 11,4 kV o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA019 Circuito Con Red Desnuda De MT=> Instalación De Separadores En Vano",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA656 Red Aislada - Transición de cable aislado a red compacta 11,4 kV o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA673 Red Aislada - Suspensión 34,5kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA662-1  Red Aislada - Derivación de red aislada a red aislada 11,4 kV o 13,2 kV, con seccionamiento",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA664 Red Aislada – Instalación de Seccionalizador (SZ) a 11,4 kV o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA681-1 Red Aislada - Derivación a red subterránea 34,5 kV, con seccionamiento",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA675 Red Aislada - Transición de red aislada a red desnuda 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA663 Red Aislada - Derivación de red aislada a transformador 11,4 kV o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA651 Red Aislada - Estructuras Básicas 11,4 o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA665 Red Aislada – Doble circuito 11,4 kV o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA659 Red Aislada - Derivación de red aislada a red desnuda 11,4 kV o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA654-1 Montaje de antena radioeléctrica en red media tensión aislada",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA682    Red Aislada - Derivación a red aislada 34,5 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA679-1 Red Aislada - Derivación a red desnuda 34,5 kV, con seccionamiento",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA658 Red Aislada – Transición entre red aislada 11,4 kV o 13,2 kV",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA659-1 Red aislada - Derivación de red aislada a red desnuda 11,4 kV o 13,2 kV, con seccionamiento",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "LA682-1 Red Aislada - Derivación a red aislada 34,5 kV, con seccionamiento",
//        "categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION",
//        "sub_categoria" => "RED AISLADA AEREA MEDIA TENSION"
//      ],
//      [
//        "nombre" => "CTS593 Centro de transformación prefabricado superficie compacto para transformadores hasta 630kVA",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "CTS591 Centro de transformación prefabricado superficie estándar para transformadores hasta 1000kVA",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "CTS594 Centro de transformación prefabricado subterráneo estándar para transformadores de hasta 1000kVA",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "CTS603 Convenciones para planos de levantamiento y diseño de redes con centros de transformación",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CONVENCIONES"
//      ],
//      [
//        "nombre" => "CTS601 Convenciones para planos de levantamiento y diseño de redes de distribución de media y baja tensión",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CONVENCIONES"
//      ],
//      [
//        "nombre" => "CTS602 Convenciones para diagramas unifilares de redes de distribución",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CONVENCIONES"
//      ],
//      [
//        "nombre" => "CTS526-1 Seccionador de maniobra (Switchgear). Sin protección",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS524 Centro de transformación de pedestal. Elementos preformados",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS523-2 Centros de transformación de pedestal. Malla para puesta a tierra",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS520-1 Diagrama unifilar. Centros de  transformación de pedestal",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS530 Centro de transformación de pedestal con transformador en aceite y celda triplex",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS520 Centros de transformación de pedestal (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS525 Transformador de pedestal (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS528 Centro de transformación de pedestal. Instalación y acceso exterior",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS525-1 Transformador de pedestal. Vista isometrica (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS524-1 Centro de transformación de pedestal. Elementos preformados para equipos (Frente muerto)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS529 Centro de transformación de pedestal. Instalación y acceso interior (Bóveda)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS525-2 Transformador de pedestal. Disposición de fusibles",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS531 Centro de transformación de pedestal. Instalación exterior con cerramiento",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS523-1 Centro de transformación  de pedestal. Obra civil, transformador de pedestal",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS523 Centro de transformación de pedestal. Obra civil",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "CTS526-2 Seccionadores de maniobra (switchgear). Con protección",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION PEDESTAL"
//      ],
//      [
//        "nombre" => "Índice. Centros de transformación para redes subterráneas",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "INDICE CENTROS TRANSFORMACION REDES SUBTERRANEAS"
//      ],
//      [
//        "nombre" => "CTS598 CENTROS SATÉLITES TIPO EXTERIOR E INTERIOR",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "CTS535-2 Centro de transformación subterraneo. Caja de inspección, corte",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "CTS534-1 Centro de transformación subterráneo. Transformadores ocasionalmente sumergibles",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "CTS535 Centro de transformación subterraneo. Caja de inspección. Planta con tapas",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "CTS535-1 Caja de inspección para transformador parcialmente sumergible. Vista de planta",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "CTS534 Centro de transformación subterraneo. Generalidades (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "CTS596 Centro de transformación prefabricado al interior de edificaciones para transformadores hasta 400 kVA",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "CTS519-2 Centros de transformación capsulados. Transformador tipo seco y celda triplex (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS518 Instalación de transformador tipo seco en celda   (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS512 Alimentadores a centros de transformación con  bypass y seccionador de transferencia",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS512-2 Alimentadores a centros de transformación en locales separados (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS516-3 Centros de transformación capsulados. Transformador en aceite. Acceso desde el interior del edificio ventilación natural al exterior (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS515-1 Centro de transformación de M.T. Celdas en SF6, medida en M.T. y transformador en aceite. Acceso desde el exterior (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS513 Local para transformador en aceite (Boveda) (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS518-2 Celda para transformador tipo seco (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS519-1 Centros de transformación capsulados. Transformador tipo seco. Cuando la puerta no queda frente de la celda del transformador (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS521 Centros de transformación de pedestal. Dimensiones mínimas del local con equipos tipo pedestal",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS514 Centros de transformación capsulados. Transformador en aceite con celda de protección en local separado (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS519-8 Centro de transformación de M.T. Disposición con celdas en SF6, medida en M.T. y transformador seco (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS517 Bóvedas para centro de transformación",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS517-1 Bóvedas para centro de transformación. Pasamuros a prueba de fuego",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS516-2 Centros de transformación capsulados. Transformador en aceite. Acceso desde el interior del edificio, entrada lateral (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS519-5 Centros de transformación capsulados. Celda duplex y derivación a dos transformadores secos (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS511-7 Centro de transformación capsulado. Celda para transformador en aceite (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS519-4 Centros de transformación capsulados. Transformador tipo seco con celda de protección (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS511 Centros de transformación capsulados  (nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS513-1 Trampa y foso para el aceite en locales de centros de transformación (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS511-2 Dimensiones del local para los centros de transformación capsulados cuando el transformador en aceite no queda frente a la puerta de acceso (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS517-2 Bóvedas para centros de transformación. Compuertas de fuego",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS511-5 Centros de transformación capsulados. Celda de protección y transformador en aceite con acceso exterior al edificio (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS511-1 Centro de transformación capsulado. Transformador en aceite - Acceso frontal desde el exterior del edificio o en local separado (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS516-1 Centros de transformación capsulados. Transformador en aceite. Acceso desde el interior del edificio, entrada frontal (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS519-3 Centro de transformación subterráneo. Transformador tipo seco con celdas de medida y protección (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS517-4 Características de la puerta cortafuego para bóveda de transformador",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS519 Centro de transformación subterraneo. Transformador tipo seco. Acceso frontal (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS520-2 Centros de transformación de pedestal. Seccionador de maniobras independiente del transformador",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS517-3 Puerta cortafuegos para boveda de transformador",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS522 Conexión del centro de transformación tipo pedestal",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS515 Centro de transformación de M.T. Disposición con celdas en SF6 y transformador en aceite. Acceso desde el exterior (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS511-6 Centro de transformación capsulado con celda triplex y transformador en aceite - Acceso exterior al edificio o en local separado (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS513-3 Centros de transformación capsulados, local con celdas de maniobra y medida (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS519-7 Centro de transformación de M.T. Disposición con celdas en SF6 y transformador seco (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS511-3 Centros de transformación capsulados con celdas de maniobras, medida y protección – Transformador en aceite con acceso exterior al edificio o en local separado  (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS511-4 Centros de transformación capsulados. Celdas de medida y protección - Transformador en aceite con acceso exterior al edificio o en local separado (nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS519-9 Centro de transformación subterráneo. Disposición  con celda RMU en SF6 y transformador seco (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS519-6 Centros de transformación subterráneos. Seccionador duplex, protección y transformador seco. Doble puerta (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION CAPSULADOS"
//      ],
//      [
//        "nombre" => "CTS548-1 Puerta metálica plegable para local de centro de transformación",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION LOCAL FRENTE VIVO INSTALACIONES EXISTENTES"
//      ],
//      [
//        "nombre" => "CTS548 Puerta metálica para local de centro de transformación",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION LOCAL FRENTE VIVO INSTALACIONES EXISTENTES"
//      ],
//      [
//        "nombre" => "CTS540-2 Centro de transformación de local. Obra civil en zona verde",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION LOCAL FRENTE VIVO INSTALACIONES EXISTENTES"
//      ],
//      [
//        "nombre" => "CTS550 Centros de transformación industriales de 34,5 kV",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS565-1 Centro de transformación industrial 34,5 kV. Celdas con seccionadores en SF6 para entrada o salida. Vista lateral",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS555 Centro de transformación industrial 34,5 kV. Diagrama unifilar de protección y medida para transformadores de 1 000 a 2 000 kVA",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS568 Centro de transformación industrial 34,5kV disposición interior con celdas SF6 y transformador seco",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS565 Centro de transformación industrial 34,5 kV. Celdas con seccionadores en SF6 para entrada, salida y protección. Vista frontal",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS556 Centro de transformación de 34,5 kV. Malla de puesta a tierra",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS552-1 Centro de transformación industrial 34,5 kV. Instalación exterior del transformador y celdas en local",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS557 Centros de transformación industriales de 34,5 kV. Cálculo malla de puesta a tierra",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS565-2 Centros de transformación industrial 34,5 kV. Celdas con seccionador de protección en SF6. Vista lateral",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS551 Diagramas unifilares de centro de transformación industrial tipo interior de 34,5 kV",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS567 Centro de transformación industrial 34,5kV disposición interior con celdas SF6 de entrada",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS566 Centro de transformación industrial 34,5 kV. Disposición interior con celdas SF6",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS558 Centro de transformación industrial 34,5kV de  2,0 a 5,0 MVA con transformadores de potencia inferiores a 2,0 MVA",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS555-1 Diagrama unifilar del equipo de protección y medida de transformadores de potencia de 2,5 y 5 MVA – 34,5 kV",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "CTS554 Centro de transformación industrial 34,5 kV. Diagrama unifilar de equipos de protección y medida de transformadores de 225 a 800 kVA",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIALES 34 5 KV"
//      ],
//      [
//        "nombre" => "FIG 5.4 Configuración centros de transformación capsulado tipo industrial con circuito de suplencia (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "CTS501-2 Marcación subestaciones",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "CTS500-3 Alternativas de centros de transformación separados del edificio",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "FIG 5.3 Configuración centros de transformación capsulado tipo industrial (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "FIG 5.2 Configuración centros de transformación capsulado tipo residencial (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "CTS500-2 Alternativas de centros de transformación con acceso al transformador desde el interior del edificio",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "CTS500 Local para centros de transformación",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "CTS500-1 Alternativas de centros de transformación con acceso al transformador desde el exterior del edificio",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "CTS501 Opciones para acometida de M.T. a centro de transformación en sótano",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "FIG 5.6  Configuración centros de transformación de pedestal y subterráneo (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "FIG 5.1 Configuración centros de transformación de distribución de M.T. (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "FIG 5.7 Configuración centros de transformación industriales de 34,5 kV (Nivel 3)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "Generalidades. Normas de construcción centros de transformación redes subterráneas",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "CTS501-1 Opciones para acometidas de M.T. a centro de transformación en semisótano",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CTS"
//      ],
//      [
//        "nombre" => "CTS506-3 Celda compacta triplex. Vista lateral – Alternativa N°2 (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS506-1 Disposición de equipos en la celda compacta triplex alternativa n°1 (nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS508-2 Celdas de MT con seccionadores en SF6 para entrada, salida y protección. Vista frontal (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS510-3 Ubicación de indicadores de falla en la red subterránea",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS508 Celdas con seccionadores en SF6 para maniobras y protección 11,4 – 13,2 – 34,5 kV",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS506-2 Celda compacta triplex. Nivel 2. Alternativa N° 2",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS503 Celda duplex para M.T. Vista frontal  (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS507 Fusibles limitadores de corriente de rango total 17,5 kV",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS503-2 Disposición de equipos en la celda de M.T. Compacta duplex. Alternativa n°1 (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS507-1 Fusibles limitadores de corriente de rango total 34,5 kV",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS510 Indicador de falla",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS506 Celda compacta triplex. Alternativa N°1. Seccionadores verticales",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS503-3 Disposición de equipos en la celda de M.T. Protección del transformador (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS502-4 Señal preventiva a ubicar sobre puertas",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "CTS503-1 Celda de protección para M.T. Vista frontal (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES SUBTERRANEOS",
//        "sub_categoria" => "EQUIPOS"
//      ],
//      [
//        "nombre" => "NIVELES DE TENSIÓN DE CONEXIÓN DE CARGAS DE CLIENTES",
//        "categoria" => "OTROS"
//      ],
//      [
//        "nombre" => "CTR505 Red trifásica disposición triangular. Transformador bifásico con DPS en B.T.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS RURALES"
//      ],
//      [
//        "nombre" => "CTR507 Centro de distribución rural. Montaje de transformador bifilar con acometida en B.T.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS RURALES"
//      ],
//      [
//        "nombre" => "CTS514-1 Centros de transformación capsulados con celda de medida, protección y seccionador de maniobras interior (Nivel 2)",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS RURALES"
//      ],
//      [
//        "nombre" => "CTR510 Diagrama unifilar instalación transformador bifásico.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS RURALES"
//      ],
//      [
//        "nombre" => "CTR505-1 Centro de distribución rural. Montaje de transformador bifilar y final de circuito bifilar de M.T. con acometida en B.T.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS RURALES"
//      ],
//      [
//        "nombre" => "CTR500 Estructuras básicas rurales de transformadores aéreos bifásicos.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS RURALES"
//      ],
//      [
//        "nombre" => "CTR502 Centro de distribución rural. Montaje de transformador bifilar autoprotegido 11,4  ó 13,2  kV -120 \/ 240 V",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS RURALES"
//      ],
//      [
//        "nombre" => "CTR501 Red trifásica disposición triangular. Transformador bifásico.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS RURALES"
//      ],
//      [
//        "nombre" => "CTR606 Centro de tranformación rural 34,5 kV de 0,5 a 2,0 MVA. Alumbrado de patio y servicios auxiliares",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 0"
//      ],
//      [
//        "nombre" => "CTR605-1 Centro de transformación rural 34,5 kV de 0,5 a 2,0 MVA. Enlaces y conectores - Corte A-A'",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 0"
//      ],
//      [
//        "nombre" => "CTR602 \"Centro de transformación  rural  34,5 kV de 0,5 a 2,0 MVA con reconectadores-Diagrama  unifilar                             \"",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 0"
//      ],
//      [
//        "nombre" => "CTR603 Centro de transformación rural 34, 5 kV de 0,5 a  2,0 MVA. Disposición de equipos - Planta",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 0"
//      ],
//      [
//        "nombre" => "CTR609 Centro de transformación rural 34,5 kV de 0,5 a 2,0 MVA. Detalles e identificación de materiales para puesta a tierra",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 0"
//      ],
//      [
//        "nombre" => "CTR608-2 Centros de transformación rural 34,5 kV de 0,5 a 2,0 MVA. Cuadro de montaje y lista de materiales",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 0"
//      ],
//      [
//        "nombre" => "CTR607 Centro de transformación rural 34,5 kV de 0,5 a 2 MVA. Malla de puesta a tierra",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 0"
//      ],
//      [
//        "nombre" => "CTR605-2 Centro de transformación rural  34,5 kV de 0,5 a 2,0 MVA. Enlaces y conectores - Corte B-B' y C-C'",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 0"
//      ],
//      [
//        "nombre" => "CTR604 Centro transformación rural 34,5 kV  de 0,5 a 2,0 MVA. Disposición de equipos corte A-A’",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 0"
//      ],
//      [
//        "nombre" => "CTR608 Centro de transformación rural 34,5 kV de 0,5 A  2,0  MVA. Crucetas metálicas - planta",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 0"
//      ],
//      [
//        "nombre" => "CTR605 Centro de transformación rural  34,5 kV  de 0,5  a 2,0 MVA. Enlaces y conectores - Planta",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 0"
//      ],
//      [
//        "nombre" => "CTR601 Centro de transformación rural 34,5 kV de 0,5 a 2,0 MVA. Generalidades",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 0"
//      ],
//      [
//        "nombre" => "CTR608-1 Centro de transformación rural 34,5 kV de 0,5 a  2,0 MVA. Crucetas metálicas-Cortes",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 0"
//      ],
//      [
//        "nombre" => "CTU502-1 Montaje en poste de transformador trifásico. Final de circuito en bandera.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU500-2 Montaje en poste de transformador trifásico. Disposición horizontal con final de circuito.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU516 Diagrama unifilar instalación transformador trifásico.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU510 Montaje tipo H de transformador trifásico de 225 kVA. Final de circuito.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU521 Centro de distribución urbano. Montaje en poste de transformador trifásico completamente autoprotegido con circuito primario sencillo y red trenzada de B.T.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU531 Barrera de protección para media tensión",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU510-2 Centro de distribución urbano. Montaje en estructura tipo H de transformador trifásico de 225 kVA con final de circuito primario para servicio dedicado",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU502 Montaje en poste de transformador trifásico. Circuito en bandera.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU510-1 Montaje tipo H de transformador trifásico de 225 kVA. Circuito tangencial.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU517 Montaje de barrera de protección en M.T. Circuito en bandera.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU500 Montaje en poste de transformador trifásico. Final de circuito.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU500-1 Montaje en poste de transformador trifásico. Hacia la vía con final de circuito.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU520 Centro de distribución urbano. Montaje en poste de transformador trifásico para servicio dedicado con circuito primario sencillo",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU506 Montaje tipo H de transformador trifásico. Circuito en bandera.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU518 Montaje en poste de transformador trifásico. Con silla de soporte. Circuito en bandera.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU502-3 Montaje en poste transformador aislado en MT Circuito en bandera",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU530 Silla para soporte de transformadores de distribución",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU504 Montaje tipo H de transformador trifásico. Final de circuito.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU506-2 Montaje tipo H de transformador trifásico. Disposición horizontal de paso.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU001 Estructuras básicas urbanas de transformadores aéreos trifásicos.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU501 Montaje en poste de transformador trifásico. Circuito tangencial.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU501-1 Montaje en poste de transformador trifásico. Circuito tangencial. Disposición horizontal de paso.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU502-4 Montaje en poste de transformador trifásico. Circuito en bandera con bujes de baja tensión superiores.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU506-1 Montaje tipo H de transformador trifásico. Disposición horizontal con final de circuito.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU503 Montaje tipo H de transformador trifásico. Circuito tangencial.",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU514 Fusible de B.T. para protección de transformadores",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU516-1 Diagrama unifilar instalación de transformador de  distribución bifilar 11 400  – 120 \/ 240 V",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "CTU515 Fusibles tipo convencional y dual para 11,4-13,2 kV",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION AEREOS URBANOS TRIFASICOS"
//      ],
//      [
//        "nombre" => "Índice. Centros de transformación para redes aéreas urbanas y rurales",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "INDICE CENTROS TRANSFORMACION REDES AEREAS URBANAS"
//      ],
//      [
//        "nombre" => "CTR623-1 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA con reconectadores. Disposición de equipos.  Cortes C–C’, D–D’, E–E’",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR623 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA con reconectadores. Disposición de equipos.  Cortes A–A’, B–B’",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR610 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA. Generalidades",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR616 Centro de transformación  rural  34,5 kV de 2,5 a 10 MVA, con celdas. Enlaces y conectores. Cortes  A–A’, B–B’, C–C’",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR621 Centro de transformación rural 34, 5 kV de 2,5 a 10 MVA, con reconectadores - Diagrama unifilar",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR629 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA, con reconectadores. Cuadro de montaje y lista de materiales",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR628-1 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA, con reconectadores. Crucetas metálicas. Cortes",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR624 Centro de transformación rural  34,5 kV de 2,5 a 10 MVA con reconectadores. Enlaces y conectores. Planta",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR625 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA con reconectadores. Enlaces y conectores. Cortes A-A´, B-B´",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR626 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA con reconectadores. Servicios uxiliares y alumbrado de patio",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR620 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA con reconectadores. Generalidades",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR611 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA con celdas de distribución",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR617 Centros de transformación rural 34,5 kV de 2,5 a 10 MVA con celdas. Servicios auxiliares y alumbrado de patio",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR615 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA con celdas. Enlaces y conectores - Planta",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR619-2 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA, con celdas. Cuadrado de montaje y lista de materiales",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR618 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA con celdas. Malla para puesta a tierra",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR613 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA con celdas. Disposición de equipos - Planta",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR612 Centro de transformación rural 34, 5 kV de 2,5 a 10 MVA con celdas. Diagrama unifilar",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR625-1 Centro de transformación rural 34, 5 kV de 2,5 a 10 MVA con reconectadores. Enlaces y conectores. Cortes C-C´, D-D´, E-E´",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR627 Centro de transformación rural 34,5 kV de 2,5   a 10 MVA, con reconectadores. Malla puesta a tierra",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR614 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA con celdas. Disposición de equipos, cortes A–A’, B–B’, C–C’",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR622 Centros de transformación rural 34,5 kV de 2,5 a 10 MVA con reconectadores. Disposición de equipos - Planta",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR619-1 Centro de tranformación rural 34,5 kV de 2,5 a 10 MVA, con celdas. Crucetas metálicas – Cortes",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR628 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA, con reconectadores. Crucetas metálicas. Planta",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR619 Centro de transformación rural 34,5 kV de 2,5 a 10 MVA, con celdas. Crucetas metálicas - Planta",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV 2"
//      ],
//      [
//        "nombre" => "CTR600 Centros de distribución transformadores rurales de 34,5 kV tipo exterior. Generalidades",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "GENERALIDADES CTU CTR"
//      ],
//      [
//        "nombre" => "Generalidades. Centros de distribución para redes aéreas urbanas",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "GENERALIDADES CTU CTR"
//      ],
//      [
//        "nombre" => "CTU613 Centro de distribución industrial 34,5 kV tipo exterior – Derivación aérea con reconectador",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIAL 34 5 KV INSTALACION"
//      ],
//      [
//        "nombre" => "CTU615 Centro de distribución industrial 34,5 kV tipo exterior – Derivación subterránea con reconectador",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIAL 34 5 KV INSTALACION"
//      ],
//      [
//        "nombre" => "CTU600 Centros de distribución industrial de 34,5 kV, instalación exterior",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIAL 34 5 KV INSTALACION"
//      ],
//      [
//        "nombre" => "CTU614 Centro de distribución industrial 34,5 kV tipo exterior – Derivación aérea con seccionador fusible",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIAL 34 5 KV INSTALACION"
//      ],
//      [
//        "nombre" => "CTU612 Centros de distribución industrial 34,5 kV tipo exterior. Diagramas unifilares",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIAL 34 5 KV INSTALACION"
//      ],
//      [
//        "nombre" => "CTU601 Diagramas unifilares de centros de transformación industrial a 34,5 kV de instalación exterior",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIAL 34 5 KV INSTALACION"
//      ],
//      [
//        "nombre" => "CTU610 Obra civil de la trampa de aceite en subestaciones industriales de 34,5 kV tipo exterior",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIAL 34 5 KV INSTALACION"
//      ],
//      [
//        "nombre" => "CTU616 Centro de distribución industrial 34,5 kV tipo exterior – Derivación subterránea con seccionador fusible",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIAL 34 5 KV INSTALACION"
//      ],
//      [
//        "nombre" => "CTU621 Centro de distribución industrial 34,5 kV tipo exterior – Derivación subterránea, instalación de dos transformadores",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIAL 34 5 KV INSTALACION"
//      ],
//      [
//        "nombre" => "CTU620 Centro de distribución industrial 34,5 kV tipo exterior – Derivación aérea, instalación de dos transformadores",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION INDUSTRIAL 34 5 KV INSTALACION"
//      ],
//      [
//        "nombre" => "CTR630 Centro de transformación rural 34,5 Kv. Obra civil. Cimiento para descarga del transformador de potencia",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV OBRA"
//      ],
//      [
//        "nombre" => "CTR633 Centro de transformación rural 34,5 kV. Obra civil. Canaletas y cárcamo. Casa de control",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV OBRA"
//      ],
//      [
//        "nombre" => "CTR641 Centro de transformación rural 34,5 kV. Detalles de vigas y crucetas metálicas",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV OBRA"
//      ],
//      [
//        "nombre" => "CTR640 Centro de transformación rural 34,5 kV. Despiece de vigas",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV OBRA"
//      ],
//      [
//        "nombre" => "CTR631-1 Centro de transformación rural 34,5 Kv. Obra civil. Cimiento y trampa de aceite para transformador de potencia",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV OBRA"
//      ],
//      [
//        "nombre" => "CTR632-1 Centro de transformación rural 34,5 kV. Obra civil. Detalles para instalación polín de carrilera de transformador",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV OBRA"
//      ],
//      [
//        "nombre" => "CTR632 Centro de transformación rural 34,5 kV. Obra civil. Polín para carrilera de transformador",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV OBRA"
//      ],
//      [
//        "nombre" => "CTR635 Centro de transformación rural 34,5 kV. Obra civil. Cerramiento muro en ladrillo prensado",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV OBRA"
//      ],
//      [
//        "nombre" => "CTR634 Centro de transformación rural 34,5 kV. Obra civil. Canaletas y cimentaciones. Patio de conexiones",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV OBRA"
//      ],
//      [
//        "nombre" => "CTR636 Centro de transformación rural 34,5 kV. Obra civil. Cerramiento puertas de acceso metálicas",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV OBRA"
//      ],
//      [
//        "nombre" => "CTR631 Centro de transformación rural 34,5 Kv. Obra civil. Cimiento para  el transformador de potencia",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV OBRA"
//      ],
//      [
//        "nombre" => "CTR642 Centro de transformación rural 34,5 kV. Caracteristicas y lista de materiales por vigas",
//        "categoria" => "CENTROS TRANSFORMACION REDES AEREAS URBANOS RURALES",
//        "sub_categoria" => "CENTROS TRANSFORMACION RURALES 34 5 KV OBRA"
//      ],
//      [
//        "nombre" => "AE292-1 Provisional de Obra - Instalación de armario para equipo de medida y transformadores de corriente sobre muro estructural - Acometida y parcial aerea",
//        "categoria" => "ACOMETIDAS MEDIDORES"
//      ],
//      [
//        "nombre" => "LA001 Marcación de circuitos de M.T.",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION"
//      ],
//      [
//        "nombre" => "LA002 Marcación apoyos aéreos",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "LINEAS AEREAS URBANAS DISTRIBUCION"
//      ],
//      [
//        "nombre" => "AE518 Transformadores de corriente tipo interior  15 kV – 36 kV",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "EQUIPO AUXILIAR MEDICION"
//      ],
//      [
//        "nombre" => "Generalidades 7.5. Equipo auxiliar de medición",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "EQUIPO AUXILIAR MEDICION"
//      ],
//      [
//        "nombre" => "AE519 Transformadores de potencial tipo interior 15 kV – 36 kV",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "EQUIPO AUXILIAR MEDICION"
//      ],
//      [
//        "nombre" => "AE516 Bornera de conexión y prueba 13 puntos",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "EQUIPO AUXILIAR MEDICION"
//      ],
//      [
//        "nombre" => "AE517 Transformadores de corriente para B.T.",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "EQUIPO AUXILIAR MEDICION"
//      ],
//      [
//        "nombre" => "AE415 Medidor trifásico – conexión directa asimétrica 4 hilos –  277 \/ 480 V",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "Generalidades 7.4.4 Medición de usuarios a 115 kV",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "AE430-2 Instalación de equipo de medida en subestación 115 kV- Diagrama unifilar",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "Generalidades 7.4.7 Servicio de Calidad Extra",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "AE419 Medición semidirecta en BT sin bornera de pruebas",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "AE417 Medidor electrónico en baja tensión con transformador de corriente",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "Generalidades 7.4.5 Medición de fronteras a 115 kV ó 230 kV",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "AE424 Medidor de energía activa. Tarifa sencilla",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "Generalidades 7.4.3 Medidores utilizados por Enel Colombia",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "Generalidades 7.4 Medidores de energía eléctrica",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "AE418 Medición semidirecta sin bornera de pruebas",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "AE440-3 Suplencia al mismo nivel de tensión",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "AE421 Medidor electrónico en media tensión con TC y TP de 3 elementos",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "AE425 Medidor trifásico de energía. Tarifa sencilla y multitarifa",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "Generalidades 7.4.6 Teorema básico de la medición de energía",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "Generalidades 7.4.2 Formas para medir la energía según la carga contratada",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "AE414 Medidor trifásico – Conexión directa asimétrica 4 hilos - 120 \/ 208 voltios",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "AE440-2 Suplencia a diferente nivel de tensión",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "MEDIDORES ENERGIA ELECTRICA"
//      ],
//      [
//        "nombre" => "AE306-1 Caja vertical para tres medidores bifásicos o trifásicos. Especificaciones generales",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE324 Celdas de medida en 11,4, 13,2 y 34,5 kv",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE321-3 Instalación de equipo de medida en B.T. Alternativa 4=> en muro adyacente al poste",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE320 Armario para instalación de equipo de medida y transformadores de corriente en B.T. Cargas por usuario hasta 75 kW",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE301 Caja  para medidor monofásico (troquelada). Especificaciones generales",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE319 Armario para instalación de equipo de medida y transformadores de corriente en B.T. (Alternativas 3 y 4)",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE306 Cajas para tres y cuatro medidores monofasicos, bifasicos o trifasicos. Especificaciones generales",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "Generalidades 7.3 Cajas, armarios y celdas",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE413-1 Medidor bifásico-trifilar. Conexión asimétrica. 2X120 V \/ 208 V",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE303 Caja para medidor bifásico o trifásico. Especificaciones generales",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE343 Medida en 11,4- 13,2 -34,5 kV de acometida aérea",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE321-1 Instalación de equipo de medida en B.T. alternativa 2=> en muro con salida subterránea",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "CS276-4 Caja de inspección doble disposición sujeción cables telemáticos",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE311 Tablero general de acometidas",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE327 Celda de medida en 34,5 kV con medición en tres elementos",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE295-3 Montaje de caja para concentradores de medición inteligente -  caso local",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE344 Base y foso para celda de medida tipo intemperie de 11,4-13,2-34,5 kV",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE340 Medida de circuitos aéreos rurales",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE302 Caja para medidor monofásico con puerta plana.",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE328 Celda de medida en 11,4 y 13,2 kV tipo intemperie",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE304-2 Caja vertical para dos medidores monofásicos. Especificaciones generales",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE300-1 Diagrama unifilar donde se localizan cajas, armarios y celdas para medidores",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE304 Caja para dos medidores bifásicos o trifásicos. Especificaciones generales",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE325 Celda de medida en 11,4  y 13,2 kV",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE305-1 Caja para dos medidores trifásicos 50 (150 A). Especificaciones generales",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE311-1 Alternativa tablero general de acometidas (Llegada al totalizador en barras)",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE411 Medidor monofásico – Conexión asimétrica 2 hilos – 120 voltios",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE315-1 Cajas para instalación de transformadores de corriente y equipo de medida en B.T. Bandeja para soporte de medidor electrónico 350x500x40 mm.",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE412 Medidor monofásico – Conexión simétrica 2 hilos – 120 voltios",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE308 Armario de medidores. Especificaciones generales",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE295-2 Montaje de caja para concentradores de medición inteligente -  caso postes en h",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE317 Armario para instalación de equipo de medida y transformador de corriente en B.T. (Alternativa 1 y 2)",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE315 Cajas para instalación de transformadores de corriente y equipo de medida en B.T. Vista isométrica",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE340-1 Diagrama unifilar para acometidas y medida en M.T. y 34,5kV (Zona rural)",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE305 Caja para medidor trifásico 50 (150 A). Especificaciones generales",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE310 Caja para protección de acometida",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE314 Medición semidirecta",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE314-2 Alternativas para localización de equipos de medición semidirecta en edificaciones. Diagrama unifilar",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE328-1 Celda de medida en 11,4 y 13,2 kV. Obra civil",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE330 Señal preventiva a ubicar sobre puertas",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE295-1 Montaje de caja para concentradores de medición inteligente caso un poste",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE304-1 Caja para dos medidores monofásicos. Especificaciones generales",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE304-3 Caja vertical para dos medidores bifásicos o trifásicos. Especificaciones generales",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE307 Ubicación de armario de medidores en hall de acceso",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE329 Celda de medida en 34,5 kV tipo intemperie",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE295-4 Montaje de caja para concentradores de medición inteligente -  caso pedestal",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE321 Instalación de equipo de medida en B.T. Alternativa 1=> En muro con salida aérea",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE324-1 Diagramas unifilares donde se localiza la celda de medida en 11,4, 13,2 ó 34,5 kv",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE316 Instalación de equipo de medida y transformador de corriente en cajas separadas",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE321-2 Instalación de equipo de medida en B.T. alternativa 3=> en muro doble",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE312-1 Reja de seguridad para caja de medidores monofásicos y trifásicos",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE309 Capacidad amperimétrica de barrajes rectangulares en cobre para armarios y cajas para medidores",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE314-1 Medición semidirecta. Diagramas unifilares",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "CAJAS ARMARIOS CELDAS"
//      ],
//      [
//        "nombre" => "AE110 Marcación de cajas y armario de medidores de energía",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "GENERALIDADES AE"
//      ],
//      [
//        "nombre" => "Flujograma de limites de carga acometidas y subestaciones",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "GENERALIDADES AE"
//      ],
//      [
//        "nombre" => "Generalidades 7.1 . Acometidas eléctricas y medidores",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "GENERALIDADES AE"
//      ],
//      [
//        "nombre" => "AE100 Bloqueo mecánico de interruptor automático",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "GENERALIDADES AE"
//      ],
//      [
//        "nombre" => "AE205 Características de los cables para acometidas en AWG y mm²  600 V",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE203-1 Acometida - Esquema de conexión para caja de medidor monofásico y bifásico",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE200 Diagrama unifilar para acometidas y tableros",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE216 Acometida aérea de B.T. desde caja de acometidas",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE238 Subterranización de acometidas en B.T.",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE239-2 Acometida subterránea con circuito de B.T. desde bornes del transformador",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE242 Detalles ductos, zanjas y rellenos. 2 ductos diámetro ø 4”",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE240 Acometida aerea de B.T. alimentada de una red subterranea. Instalación sobrepuesta",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE237-1 Utilización de andenes para redes subterráneas y acometidas",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE221 Instalación medidor monofásico en poste",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE220-3 Acometida aérea bifásica de 1 a 20 kW",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE220-1 Acometida aérea trifásica",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE287-1 Caja de inspección metálica para cambio de nivel",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE203-4 Acometida – Esquema de conexión para caja de tres y cuatro medidores trifásicos",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE217 Acometida aérea de baja tensión con cable antifraude desde red abierta",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE288 Detalles para soporte de ductería en sotanos",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE290 Acometidas para Provisionales de Obra",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE243 Caja de inspección para alumbrado público y acometidas de baja tensión",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE203 Identificador de medidor y acometidas",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE219-1 Acometida aérea. Alternativa 2",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE239-1 Acometida subterránea de B.T. con derivación desde caja de inspección frente al inmueble",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE219-3 Acometida aérea. Alternativa 4",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE294 Instalación equipo de medida en MT compacto \/ combinado para provisional obra",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE201-2 Diagramas unifilares para acometidas de M.T. a transformadores dedicados de distribución",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE220-2 Acometida aérea trifásica de 31 a 35 kW",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE281 Elementos de puesta a tierra en baja tensión",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE241 Detalles ductos, zanjas y rellenos. 1 ducto diámetro ø3”",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE293 Instalación de medidor bicuerpo en poste (Circuito secundario sencillo - Conductor trenzado - Construcción angular)",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE291 Provisional de Obra - Instalación de caja de medidor sobre muro estructural",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE300 Cajas, armarios y celdas para instalación de medidores",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE223 Instalación de caja de medidor en poste de concreto",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE220 Acometida aérea monofásica de 1 a 8 kW",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE219-4 Acometida aérea. Alternativa 5",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE219-2 Acometida aérea. Alternativa 3",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE243-1 Tapa de caja de inspección para alumbrado público y acometidas en baja tensión",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE203-3 Acometida - Esquema de conexión para caja de dos medidores trifásico",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE204-2 Características de los cables subterraneos de BT – THWN-2\/THHN",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE229 Acometidas subterráneas de baja tensión",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE243-2 Caja de inspección para alumbrado público y acometidas en baja tensión (Vista isométrica)",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE280 Sistema de puesta a tierra",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE239 Acometidas subterráneas en B.T. desde un transformador en poste",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE224 Alimentación de amplificador o equipo de comunicaciones en BT - Alimentación monofásica",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE235 Número máximo de conductores monopolares de baja tensión por tubo",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE202 Acometida aérea de baja tensión",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE287 Caja de inspección metálica",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE292 Provisional de Obra - Instalación de armario para equipo de medida y transformadores de corriente sobre muro estructural - Acometida y parcial subterranea",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE201-1 Diagramas unifilares para acometidas de B.T.  desde transformadores dedicados de distribución",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE237 Canalizaciones, ductos y cajas acometidas subterráneas de baja tensión",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE222 Instalación medidor trifásico en poste",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE279 Conductor de neutro de acometidas subterráneas de baja tensión",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE285 Acometidas aéreas y subterráneas en 11,4, 13,2 y 34,5 kV",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE236-1 Soporte para barrajes preformado de B.T. Fijación e instalación",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE203-2 Acometida - Esquema de conexión para caja de dos medidores monofásicos",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE219 Acometida aérea. Alternativa 1",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE226 Macromedición BT con telemedida",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE225 Alimentación de amplificador o equipo de comunicaciones en BT - Alimentación trifásica",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE201 Diagramas unifilares para acometidas alimentadas de la red B.T.",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE218 Acometida aérea de baja tensión desde red trenzada",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "Generalidades 7.2 Acometidas eléctricas",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE236 Barraje preformado para B.T.",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "AE244 Alimentadores de barraje en transformadores de distribución",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "ACOMETIDAS ELECTRICAS"
//      ],
//      [
//        "nombre" => "Índice. Acometidas y medidores",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "INDICE ACOMETIDAS MEDIDORES"
//      ],
//      [
//        "nombre" => "Generalidades 7.6 Sistemas de emergencia instalados por el cliente",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "SISTEMAS EMERGENCIA INSTALADOS CLIENTE"
//      ],
//      [
//        "nombre" => "AE605 Transferencia de planta de emergencia en media tensión",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "SISTEMAS EMERGENCIA INSTALADOS CLIENTE"
//      ],
//      [
//        "nombre" => "AE602 Transferencia de planta de emergencia después del equipo de medida en B.T.",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "SISTEMAS EMERGENCIA INSTALADOS CLIENTE"
//      ],
//      [
//        "nombre" => "AE604 Transferencia de planta de emergencia después del armario de medidores",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "SISTEMAS EMERGENCIA INSTALADOS CLIENTE"
//      ],
//      [
//        "nombre" => "AE601 Esquema típico para selección del tipo de sistema alterno de energía eléctrica",
//        "categoria" => "ACOMETIDAS MEDIDORES",
//        "sub_categoria" => "SISTEMAS EMERGENCIA INSTALADOS CLIENTE"
//      ],
//      [
//        "nombre" => "LAR024 Recomendaciones para el uso de postería de fibra en redes de distribución",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION"
//      ],
//      [
//        "nombre" => "LAR243-1 Utilización de postes y templetes estructuras de retención horizontal en tres postes LAR243",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION"
//      ],
//      [
//        "nombre" => "Índice. Líneas aéreas rurales",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "INDICE LINEAS AEREAS RURALES"
//      ],
//      [
//        "nombre" => "LAR311 Acometida aérea instalación de caja de medidor en poste",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES BAJA TENSION"
//      ],
//      [
//        "nombre" => "LAR309 Acometida aérea",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES BAJA TENSION"
//      ],
//      [
//        "nombre" => "LAR310 Acometida aérea con caja de medidor sobre muro",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES BAJA TENSION"
//      ],
//      [
//        "nombre" => "LAR001 Convenciones para planos de levantamiento y diseño de redes de distribución de media y baja tensión",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES LAR"
//      ],
//      [
//        "nombre" => "LAR021 Distancias mínimas",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES LAR"
//      ],
//      [
//        "nombre" => "LAR022 Configuraciones básicas y distancias de construcción para líneas de 34,5 – 13,2 – 11,4 kV",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES LAR"
//      ],
//      [
//        "nombre" => "LAR010 Rotulación del fusible instalado en un seccionamiento tipo cortacircuito",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES LAR"
//      ],
//      [
//        "nombre" => "LA016 Curvas de utilización red  aérea aislada de media tensión",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES LAR"
//      ],
//      [
//        "nombre" => "Generalidades. Normas de construcción redes aéreas rurales de distribución",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES LAR"
//      ],
//      [
//        "nombre" => "LA018 Metodología para el tendido del cable de red aérea aislada de media tensión",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "GENERALIDADES LAR"
//      ],
//      [
//        "nombre" => "LAR275 Línea rural 13,2- 11,4 kV derivación trifásica en un poste",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR286 Línea rural 13,2 –11,4 kV montaje de reconectador con transformador de potencial",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR235 Línea rural 13,2 – 11,4 kV estructura triangular en H para ángulos",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR220 Linea rural 13,2 – 11,4 kV estructura de suspensión horizontal en H",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR280 Línea rural 13,2 – 11,4 kV derivación en un poste de circuito trifilar a bifilar",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR274 Línea rural 13,2 – 11,4 kV estructura de retención horizontal en tres postes con cruceta de seis metros",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR222 linea rural 13,2 – 11,4 kV estructura en H disposición horizontal",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR282 Línea rural 13,2 – 11,4 kV montaje de seccionadores monopolares 400 A",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR232 Línea rural 13,2 – 11,4 kV estructura en H disposición triangular",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR276 Línea rural 13,2 – 11,4 kV derivación trifásica poste a poste",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR278 Línea rural 13,2 – 11,4 kV derivación trifásica horizontal de H",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR227 Linea 13.2 – 11.4 kV estructura en H suspensión triangular",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR221 Línea rural 13,2 – 11,4 kV estructura terminal horizontal en H",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR017 FLECHAS Y CARGAS DE TENDIDO PARA CABLES",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR277 Línea rural 13, 2 – 11,4 kV  derivación trifásica en H",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR223 Linea rural 13,2 - 11,4 kV estructura de retención horizontal en H",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR243 Línea rural 13,2 – 11,4 kV estructura de retención horizontal en tres postes",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR233 Línea rural 13,2 – 11,4 kV estructura de retención triangular en H",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR213 Línea rural 13,2 – 11,4 kV estructura triangular de retención",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR281 Linea rural 34,5 - 11,4 kV montaje de pararrayos en poste adyacentes a equipos",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR225 Línea rural 13,2 –11,4 kV estructura en H para ángulos",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR211 Línea rural 13,2 – 11,4 kV estructura triangular terminal",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR283 Línea rural 13,2 – 11,4 kV montaje de reconectador en línea",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR284 Línea rural 13,2 – 11,4 kV montaje de reconectador en derivación",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR205 Línea rural 13,2 -11,4 kV estructura  triangular en ángulo",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR273 Línea rural 13,2 – 11,4 kV estructura en H de retención horizontal con crucetas de seis metros",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR202 Línea rural 13,2 – 11,4 kV estructura  triangular",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR288 Línea rural 13,2 – 11,4 kV - Montaje de seccionador bajo carga telecontrolado en tres postes",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR237 Línea rural 13,2 – 11,4 kV estructura de suspensión horizontal con cruceta de seis metros",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR285 Línea rural 13,2 – 11,4 kV montaje de reguladores en delta abierta",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR274-1 Utilización de postes y templetes estructura de retención horizontal en tres postes con cruceta de seis metros  LAR274",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR273-1 Utilización de postes y templetes estructura en H de retención horizontal con crucetas de seis metros LAR273",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR279 Línea rural 13, 2 –11,4 kV derivación trifásica triangular de H a H",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 13 2 11 4KV"
//      ],
//      [
//        "nombre" => "LAR295 Línea rural 13,2 – 11,4 – 7,6 – 6,6  kV estructura bifilar en ángulo",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES BIFILARES 13 2 11 4"
//      ],
//      [
//        "nombre" => "LAR292 Línea rural 13,2 - 11,4 -  7,6 – 6,6 kV estructura bifilar en alineamiento",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES BIFILARES 13 2 11 4"
//      ],
//      [
//        "nombre" => "LAR294 Línea rural 13,2 – 11,4 –7,6 – 6,6 kV retención doble en H para circuitos bifilares",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES BIFILARES 13 2 11 4"
//      ],
//      [
//        "nombre" => "LAR299 Línea rural 13,2 – 11,4 – 7,6 – 6,6 kV estructura bifilar en H para ángulos",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES BIFILARES 13 2 11 4"
//      ],
//      [
//        "nombre" => "LAR297 Línea rural 13,2 – 11,4 –7,6 – 6,6 kV derivación bifilar en H",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES BIFILARES 13 2 11 4"
//      ],
//      [
//        "nombre" => "LAR298 Línea rural 13,2 – 11, 4 – 7,6 – 6,6 kV estructura de alineamiento bifilar en H",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES BIFILARES 13 2 11 4"
//      ],
//      [
//        "nombre" => "LAR296 \"Línea rural 13,2 – 11,4 –7,6 – 6,6 kV estructura terminal bifilar en H \"",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES BIFILARES 13 2 11 4"
//      ],
//      [
//        "nombre" => "LAR293 Línea rural 13,2 – 11,4 – 7,6 – 6,6 kV retención doble para circuitos bifilares",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES BIFILARES 13 2 11 4"
//      ],
//      [
//        "nombre" => "LAR291 Línea rural 13,2 – 11,4 – 7,6 – 6,6 kV estructura bifilar terminal",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES BIFILARES 13 2 11 4"
//      ],
//      [
//        "nombre" => "LAR450 Protección contra sobretensiones causadas por descargas atmosféricas",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR402 Montaje de cable de guarda en estructura terminal",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR403 Montaje de cable de guarda en estructura terminal en H",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR413 Retenida poste a poste sin varilla de anclaje terminal o en ángulo",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR412 Retenida poste a varilla de anclaje terminal o en ángulo",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR401-2 Mejoramiento de la resistencia de puesta a tierra. Tratamiento del suelo con=> concreto, entonita o gel",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR419 Retenida terminal o en ángulo poste a varilla de anclaje (alternativas)",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR410 Templetes, retenidas y arriostramientos; daño",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR404 Montaje de cable de guarda en estructuras de alineamiento",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR415 Montaje de diagonales para arriostramiento",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR401-1 Mejoramiento de resistencia de puesta a tierra con contrapesos",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR409 Montaje de cable de guarda en estructuras de retención en H",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR401 Accesorios de puesta a tierra",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR400 Puesta a tierra",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR408 Montaje de cable de guarda en estructuras de ángulo en h",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR407 Montaje de cable de guarda en estructuras de alineamiento y suspensión en h",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR414 Retenida  pie de amigo",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR405 Montaje de cable de guarda en estructuras en ángulo",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR406 Montaje de cable de guarda en estructuras de retención",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR417 Mástil para protección de transformadores monofásicos",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR411 Disposición horizontal de templetes en estructuras de retención",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "PUESTA TIERRA CABLES GUARDA TEMPLETES"
//      ],
//      [
//        "nombre" => "LAR125 Línea rural 34,5 kV estructura en H disposición horizontal para ángulos",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR196 Instalaciones para amortiguadores tipo puente",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR133 Línea rural 34,5 kV estructura de retención triangular en H",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR127 Línea rural 34,5 kV estructura en H suspensión triangular",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR183 Línea rural 34,5 kV estructura de retención horizontal en tres postes con cruceta de seis metros",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR123 Línea rural 34,5 kV estructura en H de retención horizontal",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR173 Línea rural 34,5 kV estructura en H de retención horizontal con cruceta de seis metros",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR132 Línea rural 34,5 kV estructura en H disposición triangular",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR102 Línea rural 34,5 kV estructura triángular",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR195 Instalación de amortiguadores tipo stock bridge",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR111 Línea rural 34,5 kV estructura triángular terminal",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR135 Línea rural 34,5 kV estructura triangular en H para ángulos",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR105 Linea rural 34,5 kV estructura triangular en ángulo",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR113 Linea rural 34,5 kV estructura triangular retención doble",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR190 Línea rural 34,5 kV circuitos principal y suplencia con derivación subterránea a subestación",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR137 Línea rural 34,5 kV estructura de suspensión horizontal con cruceta de seis metros",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR197 Línea rural 34,5 kV. Montaje de reconectador en derivación",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR143 Línea rural 34,5 kV estructura de retención horizontal en tres postes",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR150 Circuito 34,5 kV en bandera con circuito en bandera 11.4\/13.2 kV",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR121 Línea rural 34,5 kV estructura en H terminal con disposición horizontal",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR122 Línea rural 34,5 kV estructura horizontal en H",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR198 Línea rural 34,5 kV. Montaje de reconectador con transformador de potencial",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "LAR120 Línea rural 34,5 kV estructura en H con suspensión horizontal",
//        "categoria" => "LINEAS AEREAS RURALES DISTRIBUCION",
//        "sub_categoria" => "LINEAS AEREAS RURALES 34 5KV"
//      ],
//      [
//        "nombre" => "CS315 Marcación de circuitos de  B.T.",
//        "categoria" => "CABLES SUBTERRANEOS"
//      ],
//      [
//        "nombre" => "CS270 Resumen de cajas de inspección",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS280-5 Tapa Circular Vehicular Tipo Antihurto en Concreto",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS280 Caja de inspección tipo vehicular",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS280-1 Caja de inspección tipo vehicular. Detalle de planta y hierros",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS293 Soporte para barrajes preformado de B.T.  Fijación e instalación",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS277-1 Caja de inspección triple para canalización de M.T. Corte A – A`",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS290-5 Escalera de gato recubierta para ingreso a cajas de inspección",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS274-3 Caja de inspección para alumbrado público y acometidas en baja tensión (vista isométrica)",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS208 Detalles ductos, zanjas y rellenos. 2 ductos diámetro Ø 4” PVC-TDP",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS218-1 Instalación de ductos de hierro galvanizados sobre estructura",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS206 Resumen de ductos y canalizaciones",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS276-3 Caja de inspección doble adicional para equipos telemáticos",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS203 Construcción de canalizaciones eléctricas",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS274-2 Tapa de caja de inspección para alumbrado público",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS278 Tapa de caja de inspección sencilla doble o triple",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS209 Detalles ductos, zanjas y rellenos. 4 ductos diámetro Ø 4” PVC-TDP",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS212 Detalles ductos, zanjas y rellenos. 6 ductos diámetro Ø 6” PVC-TDP",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS210 Detalles ductos, zanjas y rellenos. 6 ductos diámetro Ø 4” PVC-TDP",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS279 Detalle de anclaje de marco en cajas de inspección",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS207 Detalles ductos, zanjas y rellenos. 2 ductos diámetro Ø 3” PVC-TDP",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS278-1 Placa para identificación en tapas",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS218 Instalación de ductos de hierro galvanizado suspendidos en puentes",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS275-2 Caja de inspección sencilla para canalización en M.T. y B.T. Vista isometrica",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS280-3 Tapa y marco para caja de inspección tipo vehicular",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS222 Cruce paso nivel líneas férreas a construir. Detalles ductos, zanjas y rellenos, 6 ductos Ø4 ” y 6 ductos Ø 6”",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS280-7 Tapa Circular Vehicular Tipo Antihurto en Concreto y Marco",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS277 Caja de inspección triple para canalización de M.T.",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS214 Detalles ductos, zanjas y rellenos. 3 ductos diámetro Ø 4” y 3 ductos diámetro Ø 6” PVC-TDP",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS220 Detalles ductos, zanjas y rellenos. 1 ducto diámetro Ø3”",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS290 Caja para alojar seccionador de maniobras en media tensión",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS276-2 Caja de inspección doble para canalización de M.T. y B.T.  (vista isométrica)",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS290-3 Detalle de caja de inspección para alojar seccionador de maniobras",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS274 Caja de inspección para alumbrado público y acometidas en baja tensión",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS204 Selección del diámetro de ductos",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS213 Detalles ductos, zanjas y rellenos. 9 ductos diámetro Ø 6”  PVC-TDP",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS276-1 Caja de inspección doble para canalización de M.T. y B.T. Corte A – A` y marco",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS280-2 Anclaje del marco de la caja de inspección tipo vehicular",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS221-1 CRUCE DE VIAS. DETALLES DUCTOS, ZANJAS Y RELLENOS 6 DUCTOS DIÁMETRO 6” CON SARDINEL PREFABRICADO",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS280-4 Caja de inspección tipo vehicular (vista isométrica)",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS274-1 Caja de inspección para alumbrado público y acometidas de baja tensión. Corte A - A' y marco",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS273 Banda plástica de indicación de ductos eléctricos instalados",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS275-1 Caja de inspección sencilla para canalización de M.T. y B.T. Corte A – A` y marco",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS205 Llegada de ductos a cajas",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS221 Cruce de vías. Detalles ductos, zanjas y rellenos, 9 ductos diámetro Ø4”",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS275 Caja de inspección sencilla para canalización de M.T. y B.T.",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS217 Detalles ductos, zanjas y rellenos. 4 ductos diámetro Ø 6” PVC-TDP",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "Generalidades 3.2.1. Cámaras y ducterías",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS273-1 Especificaciones de la banda plástica",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS276 Caja de inspección doble para canalización de M.T. y B.T.",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS280-6 Tapa Circular Vehicular Tipo Antihurto En Concreto – Detalle Gancho",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS290-1 Detalle de montaje del seccionador de maniobras sumergible en una caja de inspección",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS282 Instalación de ducteria y cajas de inspección en tramos pendientes",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CAMARAS DUCTERIAS"
//      ],
//      [
//        "nombre" => "CS311 Capacidad de corriente para cables triplex de media tensión de 15 kV y 35 kV",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CABLES"
//      ],
//      [
//        "nombre" => "CS300 Marcación de circuitos de M.T.",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CABLES"
//      ],
//      [
//        "nombre" => "Generalidades 3.3.1. Conductores aislados para distribución subterránea",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CABLES"
//      ],
//      [
//        "nombre" => "CS335 Empalmes para cables de media tensión (15 kV y 35kV)",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "TERMINALES CABLES MEDIA TENSION"
//      ],
//      [
//        "nombre" => "CS329 Terminales preformados tipo interior. Distancias  eléctricas en aire",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "TERMINALES CABLES MEDIA TENSION"
//      ],
//      [
//        "nombre" => "CS334 Terminal preemsamblado encogible en frío para cables de 15 kV y 35 kV. Uso interior y exterior",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "TERMINALES CABLES MEDIA TENSION"
//      ],
//      [
//        "nombre" => "CS441 Afloramiento para alimentar transformador en estructura tipo H",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "TRANSICIONES"
//      ],
//      [
//        "nombre" => "Generalidades 3.4.1. Transiciones aéreo - subterráneas",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "TRANSICIONES"
//      ],
//      [
//        "nombre" => "CS400 Ducto para cambio de circuito aéreo  a subterráneo",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "TRANSICIONES"
//      ],
//      [
//        "nombre" => "CS452 Salidas subterráneas de B.T. a red trenzada aérea",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "TRANSICIONES"
//      ],
//      [
//        "nombre" => "CS453 Acometidas de B.T. desde caja de distribución de acometidas (acometida aérea y subterránea)",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "TRANSICIONES"
//      ],
//      [
//        "nombre" => "CS454 Alimentación de acometidas aereas en poste desde red de bt subterránea",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "TRANSICIONES"
//      ],
//      [
//        "nombre" => "CS451 Alimentación de circuitos secundarios subterráneos desde transformador trifásico  en estructura tipo H",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "TRANSICIONES"
//      ],
//      [
//        "nombre" => "CS450 Alimentación de circuitos secundarios subterráneos desde transformador en poste",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "TRANSICIONES"
//      ],
//      [
//        "nombre" => "CS160 Secciones transversales de las vías  peatonales V- 9  y vía tipo parque",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CS"
//      ],
//      [
//        "nombre" => "CS Generalidades 3.1 Generalidades cables subterráneos",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CS"
//      ],
//      [
//        "nombre" => "CS153-1 Secciones transversales de la vía V-1",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CS"
//      ],
//      [
//        "nombre" => "CS159 Secciones  transversales de las  vías  V-7  y V-8",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CS"
//      ],
//      [
//        "nombre" => "CS153 Secciones transversales de la vía V-0",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CS"
//      ],
//      [
//        "nombre" => "CS152 Utilización de andenes para redes subterráneas",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CS"
//      ],
//      [
//        "nombre" => "CS155 Secciones  transversales de la  vía V-3",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CS"
//      ],
//      [
//        "nombre" => "CS154 Secciones transversales de la vía V-2",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CS"
//      ],
//      [
//        "nombre" => "CS156 Secciones  transversales de la vía V-4",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CS"
//      ],
//      [
//        "nombre" => "CS170 Marcación apoyos subterráneos",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CS"
//      ],
//      [
//        "nombre" => "CS158 Sección transversal de la vía V-6",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CS"
//      ],
//      [
//        "nombre" => "CS157 Sección transversal de la vía V-5",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CS"
//      ],
//      [
//        "nombre" => "CS150 Distribución típica de ductos y cámara",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "GENERALIDADES CS"
//      ],
//      [
//        "nombre" => "Generalidades 3.3.4. Terminal tipo codo para redes de media tensión",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CODOS TERMINALES BARRAJES PREFORMADOS"
//      ],
//      [
//        "nombre" => "CS339 Empalmes en resina para cables de baja tensión",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CODOS TERMINALES BARRAJES PREFORMADOS"
//      ],
//      [
//        "nombre" => "CS340 Barraje preformado para B.T.",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "CODOS TERMINALES BARRAJES PREFORMADOS"
//      ],
//      [
//        "nombre" => "Índice. Cables subterráneos",
//        "categoria" => "CABLES SUBTERRANEOS",
//        "sub_categoria" => "INDICE CABLES SUBTERRANEOS"
//      ]
//    ];
//
//
//    foreach ($indexed_array as $items) {
//      dump($items["nombre"]);
//
//
//      // Ejecutar la consulta para obtener los IDs de los nodos.
//      $query = \Drupal::entityQuery('node')
//        ->condition('type', "rules_technical_rules")
//        ->condition('status', 1)
//        ->condition('title', $items["nombre"])
//        ->accessCheck(TRUE);
//      $nids = $query->execute();
//      dump(count($nids));
//
//      if (!empty($nids)) {
//
//
//        foreach ($nids as $nid) {
//          dump($nid);
//
//          $node = \Drupal::entityTypeManager()
//            ->getStorage('node')
//            ->load($nid);
//
//
//          if (isset($items["categoria"]) && !empty($items["categoria"])){
//            $queryidc = \Drupal::entityQuery('taxonomy_term')
//              ->condition('vid', "rules_category")
//              ->condition('name', $items["categoria"])
//              ->accessCheck(TRUE);
//            $tid = $queryidc->execute();
//
//            foreach ($tid as $id) {
////ID de la categoría de la norma
//              dump($id);
//              //$node->set('rule_category', $id);
//            //  $node->save();
//
//            }
//          }
//
//          if (isset($items["sub_categoria"]) && !empty($items["sub_categoria"])){
//            $queryids = \Drupal::entityQuery('taxonomy_term')
//              ->condition('vid', "rules_subcategory")
//              ->condition('name', $items["sub_categoria"])
//              ->accessCheck(TRUE);
//            $tidsub = $queryids->execute();
//
//            foreach ($tidsub as $idsub) {
////ID de la subcategoría de la norma
//              dump($idsub);
//             // $node->set('rule_subcategory', $idsub);
//             // $node->save();
//
//            }
//          }
//
//
//
//          dump("----------------------------------");
////          die();
//        }
//      }
//
//
//    }
//
//
//
//    $build['content'] = [
//      '#type' => 'item',
//      '#markup' => $this->t('Normas'),
//    ];
//
//    return $build;
//  }


}
