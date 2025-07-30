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

/* themes/custom/likinormas/templates/comment/field--comment.html.twig */
class __TwigTemplate_bc14e66344635a5688f7cd30ea2ffc74 extends Template
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
        // line 29
        echo "<section";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 29, $this->source), "html", null, true);
        echo ">
  ";
        // line 30
        if ((($context["comments"] ?? null) &&  !($context["label_hidden"] ?? null))) {
            // line 31
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 31, $this->source), "html", null, true);
            echo "
    <h2";
            // line 32
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_attributes"] ?? null), 32, $this->source), "html", null, true);
            echo ">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 32, $this->source), "html", null, true);
            echo "</h2>
    ";
            // line 33
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 33, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 35
        echo "
  <div class=\"comments-header\">
    <h3 class=\"comments-header-title\">";
        // line 37
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Actividad de los usuarios"));
        echo "</h3>
    ";
        // line 38
        if (twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "isAnonymous", [], "any", false, false, true, 38)) {
            // line 39
            echo "      <p class=\"comments-header-description user-not-login\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Para hacer comentarios debe <a href=\"/user/login\">iniciar
      sesión</a> o registrarse <a href=\"/user/register\">aquí</a>"));
            // line 40
            echo "</p>
    ";
        } else {
            // line 42
            echo "      <p class=\"comments-header-description user-login\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Aquí podrá publicar y revisar todos los comentarios
        hechos desde la creación de su cuenta en likinormas"));
            // line 43
            echo "</p>
    ";
        }
        // line 45
        echo "  </div>

  ";
        // line 47
        if (($context["comment_form"] ?? null)) {
            // line 48
            echo "    <div class=\"comment-item comment-item-primary\">
      <div class=\"profile\">
        ";
            // line 50
            if (($context["current_picture"] ?? null)) {
                // line 51
                echo "          <a href=\"/user/";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "id", [], "any", false, false, true, 51), 51, $this->source), "html", null, true);
                echo "\"><img src=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::fileUrlFilter($this->sandbox->ensureToStringAllowed(($context["current_picture"] ?? null), 51, $this->source), false), "html", null, true);
                echo "\"></a>
        ";
            } else {
                // line 53
                echo "          <a href=\"/user/";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "id", [], "any", false, false, true, 53), 53, $this->source), "html", null, true);
                echo "\"><img src=\"/themes/custom/likinormas/dist/assets/images/avatar-profile..png\"></a>
        ";
            }
            // line 55
            echo "      </div>

      ";
            // line 57
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["comment_form"] ?? null), 57, $this->source), "html", null, true);
            echo "

    </div>
  ";
        }
        // line 61
        echo "
  ";
        // line 62
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["comments"] ?? null), 62, $this->source), "html", null, true);
        echo "

  <dialog tabindex=\"-1\" role=\"dialog\" class=\"dialog\">
    <div class=\"dialog-header\">
      <h4 class=\"dialog-header-title\">Estado del comentario</h4>
      <button type=\"button\" class=\"dialog-close\">X</button>
    </div>
    <div class=\"dialog-body\">
      <p class=\"dialog-body-description\"></p>
    </div>
  </dialog>

</section>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/likinormas/templates/comment/field--comment.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  128 => 62,  125 => 61,  118 => 57,  114 => 55,  108 => 53,  100 => 51,  98 => 50,  94 => 48,  92 => 47,  88 => 45,  84 => 43,  80 => 42,  76 => 40,  72 => 39,  70 => 38,  66 => 37,  62 => 35,  57 => 33,  51 => 32,  46 => 31,  44 => 30,  39 => 29,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/likinormas/templates/comment/field--comment.html.twig", "/home/likinormas.enelcol.com.co/public_html/web/themes/custom/likinormas/templates/comment/field--comment.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 30);
        static $filters = array("escape" => 29, "t" => 37, "file_url" => 51);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape', 't', 'file_url'],
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
