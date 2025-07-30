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

/* themes/custom/likinormas/templates/comment/comment.html.twig */
class __TwigTemplate_584a6c2443cd4f71a28e03d3ee70e541 extends Template
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
        // line 138
        if (($context["threaded"] ?? null)) {
            // line 139
            echo "  ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("bootstrap5/indented"), "html", null, true);
            echo "
";
        }
        // line 142
        $context["classes"] = [0 => "comment", 1 => "js-comment", 2 => (((        // line 145
($context["status"] ?? null) != "published")) ? (($context["status"] ?? null)) : ("")), 3 => ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 146
($context["comment"] ?? null), "owner", [], "any", false, false, true, 146), "anonymous", [], "any", false, false, true, 146)) ? ("by-anonymous") : ("")), 4 => (((        // line 147
($context["author_id"] ?? null) && (($context["author_id"] ?? null) == twig_get_attribute($this->env, $this->source, ($context["commented_entity"] ?? null), "getOwnerId", [], "method", false, false, true, 147)))) ? ((("by-" . $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["commented_entity"] ?? null), "getEntityTypeId", [], "method", false, false, true, 147), 147, $this->source)) . "-author")) : (""))];
        // line 150
        echo "<article";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 150), 150, $this->source), "html", null, true);
        echo ">
  ";
        // line 156
        echo "  <mark class=\"hidden\" data-comment-timestamp=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["new_indicator_timestamp"] ?? null), 156, $this->source), "html", null, true);
        echo "\"></mark>

  ";
        // line 158
        if (($context["submitted"] ?? null)) {
            // line 159
            echo "    <footer class=\"comment__meta\">
      ";
            // line 160
            if (($context["parent"] ?? null)) {
                // line 161
                echo "        <p class=\"parent visually-hidden\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["parent"] ?? null), 161, $this->source), "html", null, true);
                echo "</p>
      ";
            }
            // line 163
            echo "    </footer>
  ";
        }
        // line 165
        echo "
  <div";
        // line 166
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content_attributes"] ?? null), "addClass", [0 => "content"], "method", false, false, true, 166), 166, $this->source), "html", null, true);
        echo ">
    ";
        // line 167
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 167, $this->source), "html", null, true);
        echo "
    <div class=\"comment-item\">
      ";
        // line 169
        $context["profile_picture"] = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (($__internal_compile_0 = ($context["user_picture"] ?? null)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0["#user"] ?? null) : null), "user_picture", [], "any", false, false, true, 169), "entity", [], "any", false, false, true, 169), "uri", [], "any", false, false, true, 169), "value", [], "any", false, false, true, 169);
        // line 170
        echo "      <div class=\"profile\">
        <a href=\"/user/";
        // line 171
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, (($__internal_compile_1 = ($context["user_picture"] ?? null)) && is_array($__internal_compile_1) || $__internal_compile_1 instanceof ArrayAccess ? ($__internal_compile_1["#user"] ?? null) : null), "id", [], "any", false, false, true, 171), 171, $this->source), "html", null, true);
        echo "\">
          ";
        // line 172
        if (($context["profile_picture"] ?? null)) {
            // line 173
            echo "            <img src=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::fileUrlFilter($this->sandbox->ensureToStringAllowed(($context["profile_picture"] ?? null), 173, $this->source), false), "html", null, true);
            echo "\">
          ";
        } else {
            // line 175
            echo "            <img src=\"/themes/custom/likinormas/dist/assets/images/avatar-profile..png\">
          ";
        }
        // line 177
        echo "        </a>
      </div>

      <h3 class=\"comment-item-title\">";
        // line 180
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["author"] ?? null), 180, $this->source), "html", null, true);
        echo "
        ";
        // line 181
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["commented_entity"] ?? null), "title", [], "any", false, false, true, 181), "value", [], "any", false, false, true, 181)) {
            // line 182
            echo "          > <a href=\"/node/";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["commented_entity"] ?? null), "nid", [], "any", false, false, true, 182), "value", [], "any", false, false, true, 182), 182, $this->source), "html", null, true);
            echo "\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["commented_entity"] ?? null), "title", [], "any", false, false, true, 182), "value", [], "any", false, false, true, 182), 182, $this->source), "html", null, true);
            echo "</a>
        ";
        }
        // line 184
        echo "      </h3>

      <div class=\"comment-item-content\">
        <div class=\"content-info\">
          <p class=\"content-info-text\">";
        // line 188
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_striptags($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "comment_content", [], "any", false, false, true, 188), 188, $this->source))), "html", null, true);
        echo "</p>
          <p class=\"content-info-date\">";
        // line 189
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_striptags($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "comment_date", [], "any", false, false, true, 189), 189, $this->source))), "html", null, true);
        echo "</p>
        </div>

      ";
        // line 192
        if ( !($context["user_url"] ?? null)) {
            // line 193
            echo "        ";
            if ((twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "isAnonymous", [], "any", false, false, true, 193) == false)) {
                // line 194
                echo "          <div class=\"content-links\">
            ";
                // line 195
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "links", [], "any", false, false, true, 195), 195, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 198
            echo "      ";
        }
        // line 199
        echo "
      </div>

    </div>

    ";
        // line 204
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 204, $this->source), "html", null, true);
        echo "
  </div>
</article>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/likinormas/templates/comment/comment.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  172 => 204,  165 => 199,  162 => 198,  156 => 195,  153 => 194,  150 => 193,  148 => 192,  142 => 189,  138 => 188,  132 => 184,  124 => 182,  122 => 181,  118 => 180,  113 => 177,  109 => 175,  103 => 173,  101 => 172,  97 => 171,  94 => 170,  92 => 169,  87 => 167,  83 => 166,  80 => 165,  76 => 163,  70 => 161,  68 => 160,  65 => 159,  63 => 158,  57 => 156,  52 => 150,  50 => 147,  49 => 146,  48 => 145,  47 => 142,  41 => 139,  39 => 138,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/likinormas/templates/comment/comment.html.twig", "/home/likinormas.enelcol.com.co/public_html/web/themes/custom/likinormas/templates/comment/comment.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 138, "set" => 142);
        static $filters = array("escape" => 139, "file_url" => 173, "striptags" => 188, "render" => 188);
        static $functions = array("attach_library" => 139);

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set'],
                ['escape', 'file_url', 'striptags', 'render'],
                ['attach_library']
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
