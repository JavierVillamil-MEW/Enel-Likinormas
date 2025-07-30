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

/* themes/custom/likinormas/templates/node/node--rules-technical-rules--rules-pdf.html.twig */
class __TwigTemplate_9e791c3522a09598943fa686ba41b49a extends Template
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
        $context["base_url"] = twig_join_filter(twig_split_filter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getUrl("<front>")), "/",  -1), "/");
        // line 2
        echo "<!DOCTYPE html>
<html lang=\"es\">

<body>

<div class=\"pdf-technical-rule\">
  <div class=\"pdf-header\">
    <div class=\"pdf-header-child\">
      <div class=\"section-title\">
        <h1 class=\"title\"><strong>";
        // line 11
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "technical_rule_title", [], "any", false, false, true, 11), "value", [], "any", false, false, true, 11), 11, $this->source), "html", null, true);
        echo "</strong></h1>
        <h2 class=\"subtitle\">NORMA TÉCNICA</h2>
      </div>

      <div class=\"data-author\">

        <table class=\"table-revision\">
          <thead>
            <tr>
              <th>Revisión #:</th>
              <th>Entrada en vigencia:</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>";
        // line 27
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "technical_rule_number", [], "any", false, false, true, 27), "value", [], "any", false, false, true, 27), 27, $this->source), "html", null, true);
        echo "</td>
              <td>";
        // line 28
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "effective_date", [], "any", false, false, true, 28), 28, $this->source), "html", null, true);
        echo "</td>
            </tr>
          </tbody>
        </table>


      </div>

      <div class=\"info-liki\">
        <table class=\"table-info-liki\">
          <tbody>
            <tr>
              <td><img src=\"/sites/default/files/2023-07/logo_likinormas.jpg\"></td>
              <td><p style=\"font-size: 12px;\">Esta información ha sido extractada de la plataforma Likinormas de Enel colombia en donde se encuentran las normas y especificaciones técnicas. Consulte siempre la versión actualizada en ";
        // line 41
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 41, $this->source), "html", null, true);
        echo "</p></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class=\"info-super\" align=\"right\">
        <img src=\"/sites/default/files/2023-07/superintendencia.png\">
      </div>

    </div>

  </div>

  <div class=\"pdf-body\">
    <div class=\"content-pdf\">
      ";
        // line 57
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "technical_rule_content", [], "any", false, false, true, 57), 57, $this->source), "html", null, true);
        echo "
    </div>
  </div>

</div>

</body>

</html>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/likinormas/templates/node/node--rules-technical-rules--rules-pdf.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  110 => 57,  91 => 41,  75 => 28,  71 => 27,  52 => 11,  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/likinormas/templates/node/node--rules-technical-rules--rules-pdf.html.twig", "/home/likinormas.enelcol.com.co/public_html/web/themes/custom/likinormas/templates/node/node--rules-technical-rules--rules-pdf.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 1);
        static $filters = array("join" => 1, "split" => 1, "render" => 1, "escape" => 11);
        static $functions = array("url" => 1);

        try {
            $this->sandbox->checkSecurity(
                ['set'],
                ['join', 'split', 'render', 'escape'],
                ['url']
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
