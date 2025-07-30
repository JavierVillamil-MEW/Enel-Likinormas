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

/* themes/custom/likinormas/templates/node/node--rules-technical-specifications.html.twig */
class __TwigTemplate_f9159b8919b2f118875ab5f9f41d4bf7 extends Template
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
        echo "<div  class=\"technical-specification\">
  <div class=\"card-container\" id=\"team\" style=\"background-color: #41B9E6\">
    <div class=\"container-fluid px-3 py-3\">
      <div class=\"row center mx-4 my-4 text-white\">
        <h1>";
        // line 5
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "specification_title", [], "any", false, false, true, 5), "value", [], "any", false, false, true, 5), 5, $this->source), "html", null, true);
        echo "</h1>
        <p>";
        // line 6
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "specification_description", [], "any", false, false, true, 6), "value", [], "any", false, false, true, 6), 6, $this->source), "html", null, true);
        echo "</p>
      </div>
    </div>
  </div>

  <div class=\"container info-details\">
    <div class=\"row column-rigth\" style=\"align-items: flex-start\">
      <div class=\"col-sm-12 col-md-8 col-lg-8 col-xl-8 technical-external-rule\" id=\"document-content\">
        <ul class=\"headings\" id=\"toc\">
        <li style=\"float:none;font-weight:bold;color:#000; text-align:center;\">
         <span>
          Contenido
         </span>
        </ul>
        ";
        // line 20
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "specification_content", [], "any", false, false, true, 20), 20, $this->source), "html", null, true);
        echo "
      </div>
      <div class=\"card col-sm-12 col-md-4 col-lg-4 col-xl-4\">
        <h5 class=\"card-header text-white\" style=\"background-color: #41B9E6; padding: 13px 20px; font-weight:bolder;\">DATOS ADICIONALES</h5>
        <div class=\"card-body\">
          <h5 class=\"card-title\">Revisión #</h5>
          <p class=\"card-text\">";
        // line 26
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "specification_number", [], "any", false, false, true, 26), "value", [], "any", false, false, true, 26), 26, $this->source), "html", null, true);
        echo "</p>
        </div>
        <div class=\"card-body\">
          <h5 class=\"card-title\">Fecha de entrada en vigencia</h5>
          <p class=\"card-text\">";
        // line 30
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "effective_date", [], "any", false, false, true, 30), 30, $this->source), "html", null, true);
        echo "</p>
        </div>

        <h5 class=\"card-header text-white\" style=\"background-color: #41B9E6; padding: 13px 20px; font-weight:bolder;\">HERRAMIENTAS</h5>
        <div class=\"card-body\">
          <a href=\"/node/";
        // line 35
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "nid", [], "any", false, false, true, 35), "value", [], "any", false, false, true, 35), 35, $this->source), "html", null, true);
        echo "/pdf\" target=\"_blank\">Descargar archivo</a>
          ";
        // line 36
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalBlock("social_sharing_buttons_block"), "html", null, true);
        echo "
        </div>

        <h5 class=\"card-header text-white\" style=\"background-color: #41B9E6\">RELACIONADAS</h5>
        <div class=\"card-body\">
          ";
        // line 41
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "related_content", [], "any", false, false, true, 41), 41, $this->source), "html", null, true);
        echo "
        </div>
      </div>
    </div>
  </div>
</div>



  <div class=\"comments\">
    ";
        // line 51
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "specifications_comments", [], "any", false, false, true, 51), 51, $this->source), "html", null, true);
        echo "
  </div>

</div>


";
    }

    public function getTemplateName()
    {
        return "themes/custom/likinormas/templates/node/node--rules-technical-specifications.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  115 => 51,  102 => 41,  94 => 36,  90 => 35,  82 => 30,  75 => 26,  66 => 20,  49 => 6,  45 => 5,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/likinormas/templates/node/node--rules-technical-specifications.html.twig", "/home/likinormas.enelcol.com.co/public_html/web/themes/custom/likinormas/templates/node/node--rules-technical-specifications.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 5);
        static $functions = array("drupal_block" => 36);

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                ['drupal_block']
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
