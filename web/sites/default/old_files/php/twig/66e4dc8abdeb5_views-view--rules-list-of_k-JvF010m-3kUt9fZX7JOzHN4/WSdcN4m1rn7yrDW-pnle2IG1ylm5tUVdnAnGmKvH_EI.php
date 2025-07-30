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

/* themes/custom/likinormas/templates/views/views-view--rules-list-of-technical-rules.html.twig */
class __TwigTemplate_dd10fc3c31dd456a2f965ee3a0cbcf30 extends Template
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
($context["dom_id"] ?? null)) ? (("js-view-dom-id-" . $this->sandbox->ensureToStringAllowed(($context["dom_id"] ?? null), 39, $this->source))) : (""))];
        // line 42
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 42), 42, $this->source), "html", null, true);
        echo ">
  ";
        // line 43
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 43, $this->source), "html", null, true);
        echo "
  ";
        // line 44
        if (($context["title"] ?? null)) {
            // line 45
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 45, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 47
        echo "  ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 47, $this->source), "html", null, true);
        echo "

  ";
        // line 49
        if (($context["exposed"] ?? null)) {
            // line 50
            echo "    <div class=\"view-filters\">
      ";
            // line 51
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["exposed"] ?? null), 51, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 54
        echo "  ";
        if (($context["attachment_before"] ?? null)) {
            // line 55
            echo "    <div class=\"attachment attachment-before\">
      ";
            // line 56
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attachment_before"] ?? null), 56, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 59
        echo "
  ";
        // line 60
        if (($context["header"] ?? null)) {
            // line 61
            echo "    <div class=\"view-filters-header header-filter-results\">
      <h3 class=\"title-filter-result\">";
            // line 62
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 62, $this->source), "html", null, true);
            echo "</h3>
      <div class=\"content-filter\">
        <div class=\"filters-show\">
          <button class=\"clear-filter\">Limpiar filtros</button>
        </div>
        <div class=\"alphabetic-filtert\">
        </div>
      </div>
    </div>
  ";
        }
        // line 72
        echo "
  ";
        // line 73
        if (($context["rows"] ?? null)) {
            // line 74
            echo "    <div class=\"view-filters-list\">
      <div class=\"list-cards\">
        ";
            // line 76
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 76, $this->source), "html", null, true);
            echo "
      </div>
    </div>
  ";
        } elseif (        // line 79
($context["empty"] ?? null)) {
            // line 80
            echo "    <div class=\"view-empty header-filter-results\">
      <h3 class=\"title-filter-result\">";
            // line 81
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["empty"] ?? null), 81, $this->source), "html", null, true);
            echo "</h3>
      <div class=\"content-filter\">
        <div class=\"filters-show\">
          <button class=\"clear-filter\">Limpiar filtros</button>
        </div>
        <div class=\"alphabetic-filtert d-none\">
        </div>
      </div>
    </div>
  ";
        }
        // line 91
        echo "
  ";
        // line 92
        if (($context["pager"] ?? null)) {
            // line 93
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pager"] ?? null), 93, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 95
        echo "  ";
        if (($context["attachment_after"] ?? null)) {
            // line 96
            echo "    <div class=\"attachment attachment-after\">
      ";
            // line 97
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attachment_after"] ?? null), 97, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 100
        echo "  ";
        if (($context["more"] ?? null)) {
            // line 101
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["more"] ?? null), 101, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 103
        echo "  ";
        if (($context["footer"] ?? null)) {
            // line 104
            echo "    <div class=\"view-footer\">
      ";
            // line 105
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer"] ?? null), 105, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 108
        echo "  ";
        if (($context["feed_icons"] ?? null)) {
            // line 109
            echo "    <div class=\"feed-icons\">
      ";
            // line 110
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["feed_icons"] ?? null), 110, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 113
        echo "
  <div class=\"list-technical-comments list-comments\">
    ";
        // line 115
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block_content", "7"), "html", null, true);
        echo "
  </div>

</div>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/likinormas/templates/views/views-view--rules-list-of-technical-rules.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  205 => 115,  201 => 113,  195 => 110,  192 => 109,  189 => 108,  183 => 105,  180 => 104,  177 => 103,  171 => 101,  168 => 100,  162 => 97,  159 => 96,  156 => 95,  150 => 93,  148 => 92,  145 => 91,  132 => 81,  129 => 80,  127 => 79,  121 => 76,  117 => 74,  115 => 73,  112 => 72,  99 => 62,  96 => 61,  94 => 60,  91 => 59,  85 => 56,  82 => 55,  79 => 54,  73 => 51,  70 => 50,  68 => 49,  62 => 47,  56 => 45,  54 => 44,  50 => 43,  45 => 42,  43 => 39,  42 => 38,  41 => 37,  40 => 36,  39 => 34,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/likinormas/templates/views/views-view--rules-list-of-technical-rules.html.twig", "/home/likinormas.enelcol.com.co/public_html/web/themes/custom/likinormas/templates/views/views-view--rules-list-of-technical-rules.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 34, "if" => 44);
        static $filters = array("clean_class" => 36, "escape" => 42);
        static $functions = array("drupal_entity" => 115);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape'],
                ['drupal_entity']
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
