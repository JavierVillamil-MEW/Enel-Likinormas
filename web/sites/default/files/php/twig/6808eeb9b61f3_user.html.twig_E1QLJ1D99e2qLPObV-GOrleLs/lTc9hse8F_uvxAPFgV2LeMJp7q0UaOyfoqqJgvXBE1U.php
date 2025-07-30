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

/* themes/custom/likinormas/templates/user/user.html.twig */
class __TwigTemplate_77e26c04476974e2ac931d14d61aa7b3 extends Template
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
        // line 19
        echo "<div class=\"bg-background-primary\"></div>
<div class=\"bg-background-secondary\"></div>

<div";
        // line 22
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "user-data-profile"], "method", false, false, true, 22), 22, $this->source), "html", null, true);
        echo ">
  <div class=\"profile-content\">
    ";
        // line 24
        if (($context["content"] ?? null)) {
            // line 25
            echo "      ";
            $context["user_picture"] = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "user_picture", [], "any", false, false, true, 25), "entity", [], "any", false, false, true, 25), "uri", [], "any", false, false, true, 25), "value", [], "any", false, false, true, 25);
            // line 26
            echo "      <div class=\"profile-info\">
        ";
            // line 27
            if (($context["user_picture"] ?? null)) {
                // line 28
                echo "          <img src=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::fileUrlFilter($this->sandbox->ensureToStringAllowed(($context["user_picture"] ?? null), 28, $this->source), false), "html", null, true);
                echo "\" alt=\"avatar\" class=\"rounded-circle img-fluid\">
        ";
            } else {
                // line 30
                echo "          <img src=\"/themes/custom/likinormas/dist/assets/images/avatar-profile..png\" alt=\"avatar\"
               class=\"rounded-circle img-fluid\">
        ";
            }
            // line 33
            echo "        <h3 class=\"profile-info-name\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_striptags($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "name", [], "any", false, false, true, 33), "value", [], "any", false, false, true, 33), 33, $this->source))), "html", null, true);
            echo "</h3>
        ";
            // line 34
            if (twig_striptags($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "profession_or_occupation", [], "any", false, false, true, 34)))) {
                // line 35
                echo "          <p class=\"profile-info-profession\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_trim_filter(twig_striptags($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "profession_or_occupation", [], "any", false, false, true, 35), 35, $this->source)))), "html", null, true);
                echo "</p>
        ";
            }
            // line 37
            echo "        ";
            if (twig_striptags($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "company", [], "any", false, false, true, 37)))) {
                // line 38
                echo "          <p class=\"profile-info-company\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_trim_filter(twig_striptags($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "company", [], "any", false, false, true, 38), 38, $this->source)))), "html", null, true);
                echo "</p>
        ";
            }
            // line 40
            echo "        ";
            if ((($context["current_user_id"] ?? null) != 0)) {
                // line 41
                echo "          <div class=\"container-button d-flex justify-content-center mb-2\">
            ";
                // line 42
                if ((($context["current_user_id"] ?? null) != twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "id", [], "any", false, false, true, 42))) {
                    // line 43
                    echo "              <!-- Button trigger modal -->
              <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">
                Contactar ahora
              </button>
            ";
                } else {
                    // line 48
                    echo "              <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#editUserModal\">
                Editar Perfil
              </button>
              ";
                    // line 52
                    echo "            ";
                }
                // line 53
                echo "          </div>
        ";
            }
            // line 55
            echo "
      </div>
      <div class=\"profile-activity\">
        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">
          <li class=\"nav-item\" role=\"presentation\">
            <button class=\"nav-link active\" id=\"home-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#home\" type=\"button\"
                    role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Actividad del usuario
            </button>
          </li>
        </ul>
        <div class=\"tab-content\" id=\"myTabContent\">
          <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">
            <div class=\"comments-user-block\">
              <div class=\"comments\">
                ";
            // line 69
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, views_embed_view("rules_user_comments", "block_1"), "html", null, true);
            echo "
              </div>
            </div>
          </div>
        </div>
      </div>
    ";
        }
        // line 76
        echo "  </div>
</div>

<!-- Modal -->
<div class=\"modal modal-contact-now fade\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\"
     aria-hidden=\"true\">
  <div class=\"modal-dialog\">
    <div class=\"modal-content\">
      <div class=\"modal-body\">
        ";
        // line 85
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("webform", "rules_webform_contact_users"), "html", null, true);
        echo "
      </div>
      <div class=\"modal-footer\">
        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>
      </div>
    </div>
  </div>
</div>

<div class=\"modal edit-user-modal fade\" id=\"editUserModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\"
     aria-hidden=\"true\">
  <div class=\"modal-dialog\">
    <div class=\"modal-content\">
      <div class=\"modal-body\">
        ";
        // line 99
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntityForm("user", $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "id", [], "any", false, false, true, 99), 99, $this->source)), "html", null, true);
        echo "
      </div>
    </div>
  </div>
</div>

<dialog tabindex=\"-1\" role=\"dialog\" class=\"dialog\">
  <div class=\"dialog-header\">
    <h4 class=\"dialog-header-title\">Estado del comentario</h4>
    <button type=\"button\" class=\"dialog-close\">X</button>
  </div>
  <div class=\"dialog-body\">
    <p class=\"dialog-body-description\"></p>
  </div>
</dialog>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/likinormas/templates/user/user.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  173 => 99,  156 => 85,  145 => 76,  135 => 69,  119 => 55,  115 => 53,  112 => 52,  107 => 48,  100 => 43,  98 => 42,  95 => 41,  92 => 40,  86 => 38,  83 => 37,  77 => 35,  75 => 34,  70 => 33,  65 => 30,  59 => 28,  57 => 27,  54 => 26,  51 => 25,  49 => 24,  44 => 22,  39 => 19,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/likinormas/templates/user/user.html.twig", "/home/likinormas.enelcol.com.co/public_html/web/themes/custom/likinormas/templates/user/user.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 24, "set" => 25);
        static $filters = array("escape" => 22, "file_url" => 28, "striptags" => 33, "render" => 33, "trim" => 35);
        static $functions = array("drupal_view" => 69, "drupal_entity" => 85, "drupal_entity_form" => 99);

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set'],
                ['escape', 'file_url', 'striptags', 'render', 'trim'],
                ['drupal_view', 'drupal_entity', 'drupal_entity_form']
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
