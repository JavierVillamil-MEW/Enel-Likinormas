<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/custom/likinormas/templates/views/views-view--rules-index-rules-and-specifications.html.twig */
class __TwigTemplate_df66f5164f3ec081b9fb504545d1b9bd extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 34
        $context["classes"] = [0 => "view", 1 => ("view-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 36
($context["id"] ?? null), 36, $this->source))), 2 => ("view-id-" . $this->sandbox->ensureToStringAllowed(        // line 37
($context["id"] ?? null), 37, $this->source)), 3 => ("view-display-id-" . $this->sandbox->ensureToStringAllowed(        // line 38
($context["display_id"] ?? null), 38, $this->source)), 4 => ((        // line 39
($context["dom_id"] ?? null)) ? (("js-view-dom-id-" . $this->sandbox->ensureToStringAllowed(($context["dom_id"] ?? null), 39, $this->source))) : ("")), 5 => "view__indice"];
        // line 43
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 43), 43, $this->source), "html", null, true);
        echo ">
  ";
        // line 44
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 44, $this->source), "html", null, true);
        echo "
  ";
        // line 45
        if (($context["title"] ?? null)) {
            // line 46
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 46, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 48
        echo "  ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 48, $this->source), "html", null, true);
        echo "
  ";
        // line 49
        if (($context["header"] ?? null)) {
            // line 50
            echo "    <div class=\"view-header hero__indice\">
      ";
            // line 51
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 51, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 54
        echo "  <div class=\"field-button-mobile\">
    <button class=\"button-filter-mobile button-pink\">Ver filtros</button>
  </div>
  ";
        // line 57
        if (($context["exposed"] ?? null)) {
            // line 58
            echo "    <div class=\"view-filters\">
      <div class=\"block-form-filter-list\" style=\"background-color: #41B9E6\">
        <div class=\"form-filter-list\">
          <h2>Filtrar por:</h2>
          ";
            // line 62
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["exposed"] ?? null), 62, $this->source), "html", null, true);
            echo "
        </div>
      </div>
    </div>
  ";
        }
        // line 67
        echo "  ";
        if (($context["attachment_before"] ?? null)) {
            // line 68
            echo "    <div class=\"attachment attachment-before\">
      ";
            // line 69
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attachment_before"] ?? null), 69, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 72
        echo "
  ";
        // line 73
        if (($context["rows"] ?? null)) {
            // line 74
            echo "    <div class=\"view-content\">
      <div class=\"table-responsive\">
        <table class=\"table\">
          <thead>
          <tr>
            <th scope=\"col\">Título</th>
            <th scope=\"col\">Fecha de modificación</th>
            <th scope=\"col\">Operaciones</th>
          </tr>
          </thead>
          <tbody>
            ";
            // line 85
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 85, $this->source), "html", null, true);
            echo "
          </tbody>
        </table>
      </div>
    </div>
  ";
        } else {
            // line 91
            echo "    <div class=\"view-empty\">
      <h3 class=\"title-filter-result\">No se encontraron resultados para esta búsqueda</h3>
    </div>
  ";
        }
        // line 95
        echo "
  ";
        // line 96
        if (($context["pager"] ?? null)) {
            // line 97
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pager"] ?? null), 97, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 99
        echo "
  ";
        // line 100
        if (($context["attachment_after"] ?? null)) {
            // line 101
            echo "    <div class=\"attachment attachment-after\">
      ";
            // line 102
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attachment_after"] ?? null), 102, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 105
        echo "  ";
        if (($context["more"] ?? null)) {
            // line 106
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["more"] ?? null), 106, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 108
        echo "  ";
        if (($context["footer"] ?? null)) {
            // line 109
            echo "    <div class=\"view-footer\">
      ";
            // line 110
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer"] ?? null), 110, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 113
        echo "  ";
        if (($context["feed_icons"] ?? null)) {
            // line 114
            echo "    <div class=\"feed-icons\">
      ";
            // line 115
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["feed_icons"] ?? null), 115, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 118
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/likinormas/templates/views/views-view--rules-index-rules-and-specifications.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  202 => 118,  196 => 115,  193 => 114,  190 => 113,  184 => 110,  181 => 109,  178 => 108,  172 => 106,  169 => 105,  163 => 102,  160 => 101,  158 => 100,  155 => 99,  149 => 97,  147 => 96,  144 => 95,  138 => 91,  129 => 85,  116 => 74,  114 => 73,  111 => 72,  105 => 69,  102 => 68,  99 => 67,  91 => 62,  85 => 58,  83 => 57,  78 => 54,  72 => 51,  69 => 50,  67 => 49,  62 => 48,  56 => 46,  54 => 45,  50 => 44,  45 => 43,  43 => 39,  42 => 38,  41 => 37,  40 => 36,  39 => 34,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/likinormas/templates/views/views-view--rules-index-rules-and-specifications.html.twig", "/home/likinormas.enelcol.com.co/public_html/web/themes/custom/likinormas/templates/views/views-view--rules-index-rules-and-specifications.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 34, "if" => 45);
        static $filters = array("clean_class" => 36, "escape" => 43);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
