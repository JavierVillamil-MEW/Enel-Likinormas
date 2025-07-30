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

/* themes/custom/likinormas/templates/views/views-view-fields--rules-index-rules-and-specifications.html.twig */
class __TwigTemplate_72c10c45827904570a2aaef33d53f6f1 extends Template
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
        echo "
<tr>
  <td>
    ";
        // line 37
        if (twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "technical_rule_title", [], "any", false, false, true, 37)) {
            // line 38
            echo "      ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "technical_rule_title", [], "any", false, false, true, 38), "content", [], "any", false, false, true, 38), 38, $this->source), "html", null, true);
            echo "
    ";
        }
        // line 40
        echo "
    ";
        // line 41
        if (twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "specification_title", [], "any", false, false, true, 41)) {
            // line 42
            echo "      ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "specification_title", [], "any", false, false, true, 42), "content", [], "any", false, false, true, 42), 42, $this->source), "html", null, true);
            echo "
    ";
        }
        // line 44
        echo "  </td>
  <td>
    ";
        // line 46
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "effective_date", [], "any", false, false, true, 46), "content", [], "any", false, false, true, 46)) {
            // line 47
            echo "      ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "effective_date", [], "any", false, false, true, 47), "content", [], "any", false, false, true, 47), 47, $this->source), "html", null, true);
            echo "
    ";
        }
        // line 49
        echo "  </td>
  <td>
    ";
        // line 51
        if (twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "view_node", [], "any", false, false, true, 51)) {
            // line 52
            echo "      ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["fields"] ?? null), "view_node", [], "any", false, false, true, 52), "content", [], "any", false, false, true, 52), 52, $this->source), "html", null, true);
            echo "
    ";
        }
        // line 54
        echo "  </td>
</tr>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/likinormas/templates/views/views-view-fields--rules-index-rules-and-specifications.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  87 => 54,  81 => 52,  79 => 51,  75 => 49,  69 => 47,  67 => 46,  63 => 44,  57 => 42,  55 => 41,  52 => 40,  46 => 38,  44 => 37,  39 => 34,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/likinormas/templates/views/views-view-fields--rules-index-rules-and-specifications.html.twig", "/home/likinormas.enelcol.com.co/public_html/web/themes/custom/likinormas/templates/views/views-view-fields--rules-index-rules-and-specifications.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 37);
        static $filters = array("escape" => 38);
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
