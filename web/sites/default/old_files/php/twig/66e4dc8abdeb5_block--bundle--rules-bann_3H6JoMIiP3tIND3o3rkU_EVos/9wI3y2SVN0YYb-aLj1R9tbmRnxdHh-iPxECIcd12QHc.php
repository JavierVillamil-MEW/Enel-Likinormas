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

/* themes/custom/likinormas/templates/block/block--bundle--rules-banner-with-background.html.twig */
class __TwigTemplate_248039bc7a9e1d830d24d91bbd139096 extends Template
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
        // line 1
        $context["color"] = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (($__internal_compile_0 = (($__internal_compile_1 = twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "background_color", [], "any", false, false, true, 1)) && is_array($__internal_compile_1) || $__internal_compile_1 instanceof ArrayAccess ? ($__internal_compile_1[0] ?? null) : null)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0["#options"] ?? null) : null), "entity", [], "any", false, false, true, 1), "hex_color", [], "any", false, false, true, 1), "value", [], "any", false, false, true, 1);
        // line 2
        echo "
<div class=\"hero\" style=\"background-color: ";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["color"] ?? null), 3, $this->source), "html", null, true);
        echo "\">
  <div class=\"hero__info\">";
        // line 5
        if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "banner_icon", [], "any", false, false, true, 5)) {
            // line 6
            echo "<div class=\"icon\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "banner_icon", [], "any", false, false, true, 6), 6, $this->source), "html", null, true);
            echo "</div>";
        }
        // line 8
        if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "filter_title", [], "any", false, false, true, 8)) {
            // line 9
            echo "<h1 class=\"hero__info-title title-primary\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_striptags($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "filter_title", [], "any", false, false, true, 9), 9, $this->source))), "html", null, true);
            echo "</h1>";
        }
        // line 11
        if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "filter_description", [], "any", false, false, true, 11)) {
            // line 12
            echo "<p class=\"hero__info-description paragraph-primary\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_striptags($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "filter_description", [], "any", false, false, true, 12), 12, $this->source))), "html", null, true);
            echo "</p>";
        }
        // line 14
        echo "  </div>

</div>
<div class=\"field-button-mobile\">
  <button class=\"button-filter-mobile button-pink\">Ver filtros</button>
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/likinormas/templates/block/block--bundle--rules-banner-with-background.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  69 => 14,  64 => 12,  62 => 11,  57 => 9,  55 => 8,  50 => 6,  48 => 5,  44 => 3,  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/likinormas/templates/block/block--bundle--rules-banner-with-background.html.twig", "/home/likinormas.enelcol.com.co/public_html/web/themes/custom/likinormas/templates/block/block--bundle--rules-banner-with-background.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 1, "if" => 5);
        static $filters = array("escape" => 3, "striptags" => 9, "render" => 9);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['escape', 'striptags', 'render'],
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
