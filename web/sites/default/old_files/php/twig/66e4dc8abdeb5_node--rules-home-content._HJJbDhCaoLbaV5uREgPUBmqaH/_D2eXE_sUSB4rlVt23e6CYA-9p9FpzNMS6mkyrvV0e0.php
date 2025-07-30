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

/* themes/custom/likinormas/templates/node/node--rules-home-content.html.twig */
class __TwigTemplate_5afcfb4fc043236551d7fcdf4136a2e1 extends Template
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
        echo "<div class=\"content-home\">

  ";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "initial_sections", [], "any", false, false, true, 3), 3, $this->source), "html", null, true);
        echo "

  <div class=\"container-card-100 bg-overlay\">
    <div class=\"block-card-images w-100\">
      ";
        // line 7
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "background_banner_image", [], "any", false, false, true, 7), 7, $this->source), "html", null, true);
        echo "
    </div>
    <div class=\"block-card-info w-100\">
      <div class=\"block-card-body\">
        <div class=\"block-card-body-data\">
          <h2 class=\"title-secondary\">";
        // line 12
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_striptags($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "background_banner_title", [], "any", false, false, true, 12), 12, $this->source))), "html", null, true);
        echo "</h2>
          <p class=\"block-card-body-text\">";
        // line 13
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "background_banner_description", [], "any", false, false, true, 13), "value", [], "any", false, false, true, 13), 13, $this->source), "html", null, true);
        echo "</p>
        </div>
        ";
        // line 15
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "background_banner_button", [], "any", false, false, true, 15), 15, $this->source), "html", null, true);
        echo "
      </div>
    </div>
  </div>

  ";
        // line 20
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "user_network", [], "any", false, false, true, 20), 20, $this->source), "html", null, true);
        echo "
  ";
        // line 21
        if (($context["logged_in"] ?? null)) {
            // line 22
            echo "    <div class=\"block-contact\">
      <div class=\"block-contact-info\">
        <div class=\"block-contact-data\">
          <h2 class=\"title-secondary\">";
            // line 25
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_striptags($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "contact_title", [], "any", false, false, true, 25), 25, $this->source))), "html", null, true);
            echo "</h2>
          <p class=\"block-contact-data-text\">";
            // line 26
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_striptags($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "contact_description", [], "any", false, false, true, 26), 26, $this->source))), "html", null, true);
            echo "</p>
        </div>

        <div class=\"field field--name-contact-button button-secondary\">
          ";
            // line 30
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed((($__internal_compile_0 = twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "contact_button", [], "any", false, false, true, 30)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0[0] ?? null) : null), 30, $this->source), "html", null, true);
            echo "
        </div>
      </div>

      <div class=\"block-contact-form\">
        ";
            // line 35
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "contact_webform", [], "any", false, false, true, 35), 35, $this->source), "html", null, true);
            echo "
      </div>
    </div>
  ";
        }
        // line 39
        echo "
</div>

";
    }

    public function getTemplateName()
    {
        return "themes/custom/likinormas/templates/node/node--rules-home-content.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  112 => 39,  105 => 35,  97 => 30,  90 => 26,  86 => 25,  81 => 22,  79 => 21,  75 => 20,  67 => 15,  62 => 13,  58 => 12,  50 => 7,  43 => 3,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/likinormas/templates/node/node--rules-home-content.html.twig", "/home/likinormas.enelcol.com.co/public_html/web/themes/custom/likinormas/templates/node/node--rules-home-content.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 21);
        static $filters = array("escape" => 3, "striptags" => 12, "render" => 12);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
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
