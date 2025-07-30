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

/* themes/custom/likinormas/templates/views/views-view-fields--rules-list-of-technical-specifications.html.twig */
class __TwigTemplate_bd47826b920f47b963ed555171f1cd9c extends Template
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
        echo "<div class=\"card\">
  <div class=\"card-body\">
    <div class=\"card-body-info\">
      ";
        // line 37
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "effective_date", [], "any", false, false, true, 37), "content", [], "any", false, false, true, 37)) {
            // line 38
            echo "        <p class=\"card-body-info-update\">
          ";
            // line 39
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "effective_date", [], "any", false, false, true, 39), "label", [], "any", false, false, true, 39), 39, $this->source), "html", null, true);
            echo ": ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "effective_date", [], "any", false, false, true, 39), "content", [], "any", false, false, true, 39), 39, $this->source), "html", null, true);
            echo "
        </p>
      ";
        }
        // line 42
        echo "
      ";
        // line 43
        if (twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "title", [], "any", false, false, true, 43)) {
            // line 44
            echo "        <h2 class=\"card-body-info-title\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "title", [], "any", false, false, true, 44), "content", [], "any", false, false, true, 44), 44, $this->source), "html", null, true);
            echo "</h2>
      ";
        }
        // line 46
        echo "
      <div class=\"card-body-info-categories\">
        ";
        // line 48
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "specification_category", [], "any", false, false, true, 48), "content", [], "any", false, false, true, 48)) {
            // line 49
            echo "          <p class=\"categories-item\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "specification_category", [], "any", false, false, true, 49), "content", [], "any", false, false, true, 49), 49, $this->source), "html", null, true);
            echo "</p>
        ";
        }
        // line 51
        echo "
        ";
        // line 52
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "specification_subcategory", [], "any", false, false, true, 52), "content", [], "any", false, false, true, 52)) {
            // line 53
            echo "          <p class=\"categories-item\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "specification_subcategory", [], "any", false, false, true, 53), "content", [], "any", false, false, true, 53), 53, $this->source), "html", null, true);
            echo "</p>
        ";
        }
        // line 55
        echo "      </div>

    </div>

    <div class=\"card-body-button\">
      ";
        // line 60
        if (twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "view_node", [], "any", false, false, true, 60)) {
            // line 61
            echo "        ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "view_node", [], "any", false, false, true, 61), "content", [], "any", false, false, true, 61), 61, $this->source), "html", null, true);
            echo "
      ";
        }
        // line 63
        echo "    </div>

  </div>
</div>


";
    }

    public function getTemplateName()
    {
        return "themes/custom/likinormas/templates/views/views-view-fields--rules-list-of-technical-specifications.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  106 => 63,  100 => 61,  98 => 60,  91 => 55,  85 => 53,  83 => 52,  80 => 51,  74 => 49,  72 => 48,  68 => 46,  62 => 44,  60 => 43,  57 => 42,  49 => 39,  46 => 38,  44 => 37,  39 => 34,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/likinormas/templates/views/views-view-fields--rules-list-of-technical-specifications.html.twig", "/home/likinormas.enelcol.com.co/public_html/web/themes/custom/likinormas/templates/views/views-view-fields--rules-list-of-technical-specifications.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 37);
        static $filters = array("escape" => 39);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
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
