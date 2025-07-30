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

/* themes/custom/likinormas/templates/views/views-view-fields--rules-list-of-technical-rules.html.twig */
class __TwigTemplate_0944dfe2e71676b62cb1471157f3eaad extends Template
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
        // line 38
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "effective_date", [], "any", false, false, true, 38), "content", [], "any", false, false, true, 38)) {
            // line 39
            echo "        <p class=\"card-body-info-update\">
          ";
            // line 40
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "effective_date", [], "any", false, false, true, 40), "label", [], "any", false, false, true, 40), 40, $this->source), "html", null, true);
            echo ": ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "effective_date", [], "any", false, false, true, 40), "content", [], "any", false, false, true, 40), 40, $this->source), "html", null, true);
            echo "
        </p>
      ";
        }
        // line 43
        echo "
      ";
        // line 44
        if (twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "title", [], "any", false, false, true, 44)) {
            // line 45
            echo "        <h2 class=\"card-body-info-title\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "title", [], "any", false, false, true, 45), "content", [], "any", false, false, true, 45), 45, $this->source), "html", null, true);
            echo "</h2>
      ";
        }
        // line 47
        echo "
      <div class=\"card-body-info-categories\">
        ";
        // line 49
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "rule_category", [], "any", false, false, true, 49), "content", [], "any", false, false, true, 49)) {
            // line 50
            echo "          <p class=\"categories-item\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "rule_category", [], "any", false, false, true, 50), "content", [], "any", false, false, true, 50), 50, $this->source), "html", null, true);
            echo "</p>
        ";
        }
        // line 52
        echo "
        ";
        // line 53
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "rule_subcategory", [], "any", false, false, true, 53), "content", [], "any", false, false, true, 53)) {
            // line 54
            echo "          <p class=\"categories-item\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "rule_subcategory", [], "any", false, false, true, 54), "content", [], "any", false, false, true, 54), 54, $this->source), "html", null, true);
            echo "</p>
        ";
        }
        // line 56
        echo "      </div>

    </div>

    <div class=\"card-body-button\">
      ";
        // line 61
        if (twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "view_node", [], "any", false, false, true, 61)) {
            // line 62
            echo "        ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "view_node", [], "any", false, false, true, 62), "content", [], "any", false, false, true, 62), 62, $this->source), "html", null, true);
            echo "
      ";
        }
        // line 64
        echo "    </div>

  </div>
</div>


";
    }

    public function getTemplateName()
    {
        return "themes/custom/likinormas/templates/views/views-view-fields--rules-list-of-technical-rules.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  107 => 64,  101 => 62,  99 => 61,  92 => 56,  86 => 54,  84 => 53,  81 => 52,  75 => 50,  73 => 49,  69 => 47,  63 => 45,  61 => 44,  58 => 43,  50 => 40,  47 => 39,  45 => 38,  39 => 34,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/likinormas/templates/views/views-view-fields--rules-list-of-technical-rules.html.twig", "/home/likinormas.enelcol.com.co/public_html/web/themes/custom/likinormas/templates/views/views-view-fields--rules-list-of-technical-rules.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 38);
        static $filters = array("escape" => 40);
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
