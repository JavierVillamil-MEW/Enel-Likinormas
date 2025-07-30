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

/* modules/contrib/better_social_sharing_buttons/templates/better-social-sharing-buttons.html.twig */
class __TwigTemplate_9cf8691760f8e99c779679435c94b199 extends Template
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
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("better_social_sharing_buttons/styling"), "html", null, true);
        echo "

";
        // line 4
        echo "<div style=\"display: none\"><link rel=\"preload\" href=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 4, $this->source), "html", null, true);
        echo "\" as=\"image\" type=\"image/svg+xml\" crossorigin=\"anonymous\" /></div>

<div class=\"social-sharing-buttons\">
    ";
        // line 8
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "services", [], "any", false, false, true, 8), "facebook", [], "any", false, false, true, 8)) {
            // line 9
            echo "        <a href=\"https://www.facebook.com/sharer/sharer.php?u=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "page_url", [], "any", false, false, true, 9), 9, $this->source), "html", null, true);
            echo "&amp;title=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "title", [], "any", false, false, true, 9), 9, $this->source), "html", null, true);
            echo "\" target=\"_blank\" title=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Facebook\" aria-label=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Facebook\" class=\"social-sharing-buttons__button share-facebook\" rel=\"noopener\">
            <svg width=\"";
            // line 10
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 10), 10, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 10), 10, $this->source), "html", null, true);
            echo "\" style=\"border-radius:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "radius", [], "any", false, false, true, 10), 10, $this->source), "html", null, true);
            echo ";\">
                <use href=\"";
            // line 11
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 11, $this->source), "html", null, true);
            echo "#facebook\" />
            </svg>
        </a>
    ";
        }
        // line 15
        echo "
    ";
        // line 17
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "services", [], "any", false, false, true, 17), "x", [], "any", false, false, true, 17)) {
            // line 18
            echo "        <a href=\"https://twitter.com/intent/tweet?text=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "title", [], "any", false, false, true, 18), 18, $this->source), "html", null, true);
            echo "+";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "page_url", [], "any", false, false, true, 18), 18, $this->source), "html", null, true);
            echo "\" target=\"_blank\" title=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " X\" aria-label=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " X\" class=\"social-sharing-buttons__button share-x\" rel=\"noopener\">
            <svg width=\"";
            // line 19
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 19), 19, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 19), 19, $this->source), "html", null, true);
            echo "\" style=\"border-radius:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "radius", [], "any", false, false, true, 19), 19, $this->source), "html", null, true);
            echo ";\">
                <use href=\"";
            // line 20
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 20, $this->source), "html", null, true);
            echo "#x\" />
            </svg>
        </a>
    ";
        }
        // line 24
        echo "
    ";
        // line 26
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "services", [], "any", false, false, true, 26), "whatsapp", [], "any", false, false, true, 26)) {
            // line 27
            echo "        <a href=\"https://wa.me/?text=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "page_url", [], "any", false, false, true, 27), 27, $this->source), "html", null, true);
            echo "\" target=\"_blank\" title=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " WhatsApp\" aria-label=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " WhatsApp\" class=\"social-sharing-buttons__button share-whatsapp\" rel=\"noopener\">
            <svg width=\"";
            // line 28
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 28), 28, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 28), 28, $this->source), "html", null, true);
            echo "\" style=\"border-radius:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "radius", [], "any", false, false, true, 28), 28, $this->source), "html", null, true);
            echo ";\">
                <use href=\"";
            // line 29
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 29, $this->source), "html", null, true);
            echo "#whatsapp\" />
            </svg>
        </a>
    ";
        }
        // line 33
        echo "
    ";
        // line 35
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "services", [], "any", false, false, true, 35), "facebook_messenger", [], "any", false, false, true, 35)) {
            // line 36
            echo "        <a href=\"https://www.facebook.com/dialog/send?app_id=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "facebook_app_id", [], "any", false, false, true, 36), 36, $this->source), "html", null, true);
            echo "&amp;link=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "page_url", [], "any", false, false, true, 36), 36, $this->source), "html", null, true);
            echo "&amp;redirect_uri=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getUrl("<current>"));
            echo "\" target=\"_blank\" title=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Facebook Messenger\" aria-label=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Facebook Messenger\" class=\"social-sharing-buttons__button share-facebook-messenger\" rel=\"noopener\">
            <svg width=\"";
            // line 37
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 37), 37, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 37), 37, $this->source), "html", null, true);
            echo "\" style=\"border-radius:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "radius", [], "any", false, false, true, 37), 37, $this->source), "html", null, true);
            echo ";\">
                <use href=\"";
            // line 38
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 38, $this->source), "html", null, true);
            echo "#messenger\" />
            </svg>
        </a>
    ";
        }
        // line 42
        echo "
    ";
        // line 44
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "services", [], "any", false, false, true, 44), "pinterest", [], "any", false, false, true, 44)) {
            // line 45
            echo "        <a href=\"https://pinterest.com/pin/create/link/?url=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "page_url", [], "any", false, false, true, 45), 45, $this->source), "html", null, true);
            echo "&amp;description=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "title", [], "any", false, false, true, 45), 45, $this->source), "html", null, true);
            echo "\" target=\"_blank\" title=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Pinterest\" aria-label=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Pinterest\" class=\"social-sharing-buttons__button share-pinterest\" rel=\"noopener\">
            <svg width=\"";
            // line 46
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 46), 46, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 46), 46, $this->source), "html", null, true);
            echo "\" style=\"border-radius:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "radius", [], "any", false, false, true, 46), 46, $this->source), "html", null, true);
            echo ";\">
                <use href=\"";
            // line 47
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 47, $this->source), "html", null, true);
            echo "#pinterest\" />
            </svg>
        </a>
    ";
        }
        // line 51
        echo "
    ";
        // line 53
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "services", [], "any", false, false, true, 53), "linkedin", [], "any", false, false, true, 53)) {
            // line 54
            echo "        <a href=\"https://www.linkedin.com/sharing/share-offsite/?url=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "page_url", [], "any", false, false, true, 54), 54, $this->source), "html", null, true);
            echo "\" target=\"_blank\" title=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Linkedin\" aria-label=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Linkedin\" class=\"social-sharing-buttons__button share-linkedin\" rel=\"noopener\">
            <svg width=\"";
            // line 55
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 55), 55, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 55), 55, $this->source), "html", null, true);
            echo "\" style=\"border-radius:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "radius", [], "any", false, false, true, 55), 55, $this->source), "html", null, true);
            echo ";\">
                <use href=\"";
            // line 56
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 56, $this->source), "html", null, true);
            echo "#linkedin\" />
            </svg>
        </a>
    ";
        }
        // line 60
        echo "
    ";
        // line 62
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "services", [], "any", false, false, true, 62), "xing", [], "any", false, false, true, 62)) {
            // line 63
            echo "        <a href=\"https://www.xing.com/spi/shares/new?url=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "page_url", [], "any", false, false, true, 63), 63, $this->source), "html", null, true);
            echo "\" target=\"_blank\" title=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Xing\" aria-label=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Xing\" class=\"social-sharing-buttons__button share-xing\" rel=\"noopener\">
            <svg width=\"";
            // line 64
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 64), 64, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 64), 64, $this->source), "html", null, true);
            echo "\" style=\"border-radius:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "radius", [], "any", false, false, true, 64), 64, $this->source), "html", null, true);
            echo ";\">
                <use href=\"";
            // line 65
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 65, $this->source), "html", null, true);
            echo "#xing\" />
            </svg>
        </a>
    ";
        }
        // line 69
        echo "
    ";
        // line 71
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "services", [], "any", false, false, true, 71), "tumblr", [], "any", false, false, true, 71)) {
            // line 72
            echo "        <a href=\"https://www.tumblr.com/share?v=3&amp;u=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "page_url", [], "any", false, false, true, 72), 72, $this->source), "html", null, true);
            echo "&amp;t=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "title", [], "any", false, false, true, 72), 72, $this->source), "html", null, true);
            echo "\" target=\"_blank\" title=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Tumblr\" aria-label=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Tumblr\" class=\"social-sharing-buttons__button share-tumblr\" rel=\"noopener\">
            <svg width=\"";
            // line 73
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 73), 73, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 73), 73, $this->source), "html", null, true);
            echo "\" style=\"border-radius:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "radius", [], "any", false, false, true, 73), 73, $this->source), "html", null, true);
            echo ";\">
                <use href=\"";
            // line 74
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 74, $this->source), "html", null, true);
            echo "#tumblr\" />
            </svg>
        </a>
    ";
        }
        // line 78
        echo "
    ";
        // line 80
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "services", [], "any", false, false, true, 80), "reddit", [], "any", false, false, true, 80)) {
            // line 81
            echo "        <a href=\"https://www.reddit.com/submit?url=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "page_url", [], "any", false, false, true, 81), 81, $this->source), "html", null, true);
            echo "&amp;title=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "title", [], "any", false, false, true, 81), 81, $this->source), "html", null, true);
            echo "\" target=\"_blank\" title=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Reddit\" aria-label=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Reddit\" class=\"social-sharing-buttons__button share-reddit\" rel=\"noopener\">
            <svg width=\"";
            // line 82
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 82), 82, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 82), 82, $this->source), "html", null, true);
            echo "\" style=\"border-radius:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "radius", [], "any", false, false, true, 82), 82, $this->source), "html", null, true);
            echo ";\">
                <use href=\"";
            // line 83
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 83, $this->source), "html", null, true);
            echo "#reddit\" />
            </svg>
        </a>
    ";
        }
        // line 87
        echo "
    ";
        // line 89
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "services", [], "any", false, false, true, 89), "evernote", [], "any", false, false, true, 89)) {
            // line 90
            echo "        <a href=\"https://www.evernote.com/clip.action?url=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "page_url", [], "any", false, false, true, 90), 90, $this->source), "html", null, true);
            echo "&amp;title=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "title", [], "any", false, false, true, 90), 90, $this->source), "html", null, true);
            echo "\" target=\"_blank\" title=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Evernote\" aria-label=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Evernote\" class=\"social-sharing-buttons__button share-evernote\" rel=\"noopener\">
            <svg width=\"";
            // line 91
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 91), 91, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 91), 91, $this->source), "html", null, true);
            echo "\" style=\"border-radius:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "radius", [], "any", false, false, true, 91), 91, $this->source), "html", null, true);
            echo ";\">
                <use href=\"";
            // line 92
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 92, $this->source), "html", null, true);
            echo "#evernote\" />
            </svg>
        </a>
    ";
        }
        // line 96
        echo "
    ";
        // line 98
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "services", [], "any", false, false, true, 98), "email", [], "any", false, false, true, 98)) {
            // line 99
            echo "        <a href=\"mailto:?subject=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "title", [], "any", false, false, true, 99), 99, $this->source), "html", null, true);
            echo "&amp;body=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "page_url", [], "any", false, false, true, 99), 99, $this->source), "html", null, true);
            echo "\" title=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Email\" aria-label=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Share to"));
            echo " Email\" class=\"social-sharing-buttons__button share-email\" target=\"_blank\" rel=\"noopener\">
            <svg width=\"";
            // line 100
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 100), 100, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 100), 100, $this->source), "html", null, true);
            echo "\" style=\"border-radius:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "radius", [], "any", false, false, true, 100), 100, $this->source), "html", null, true);
            echo ";\">
                <use href=\"";
            // line 101
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 101, $this->source), "html", null, true);
            echo "#email\" />
            </svg>
        </a>
    ";
        }
        // line 105
        echo "
    ";
        // line 107
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "services", [], "any", false, false, true, 107), "copy", [], "any", false, false, true, 107)) {
            // line 108
            echo "        ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("better_social_sharing_buttons/copy-current-url"), "html", null, true);
            echo "
        <a class=\"btnCopy social-sharing-buttons__button share-copy\">
            <svg width=\"";
            // line 110
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 110), 110, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 110), 110, $this->source), "html", null, true);
            echo "\" style=\"border-radius:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "radius", [], "any", false, false, true, 110), 110, $this->source), "html", null, true);
            echo ";\">
                <use href=\"";
            // line 111
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 111, $this->source), "html", null, true);
            echo "#copy\" />
            </svg>
            <div class=\"social-sharing-buttons__popup\">";
            // line 113
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Copied to clipboard"));
            echo "</div>
        </a>
    ";
        }
        // line 116
        echo "
  ";
        // line 118
        echo "  ";
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "services", [], "any", false, false, true, 118), "print", [], "any", false, false, true, 118)) {
            // line 119
            echo "    ";
            if (twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "print_css", [], "any", false, false, true, 119)) {
                // line 120
                echo "      ";
                $context["href"] = "#";
                // line 121
                echo "      ";
                $context["rel"] = twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "print_css", [], "any", false, false, true, 121);
                // line 122
                echo "      ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("better_social_sharing_buttons/print-css"), "html", null, true);
                echo "
    ";
            } else {
                // line 124
                echo "      ";
                $context["href"] = "javascript:window.print()";
                // line 125
                echo "    ";
            }
            // line 126
            echo "    <a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["href"] ?? null), 126, $this->source), "html", null, true);
            echo "\" rel=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rel"] ?? null), 126, $this->source), "html", null, true);
            echo "\" class=\"bssb-printlink\" class=\"share-print\">
      <svg width=\"";
            // line 127
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 127), 127, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "width", [], "any", false, false, true, 127), 127, $this->source), "html", null, true);
            echo "\" style=\"border-radius:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "radius", [], "any", false, false, true, 127), 127, $this->source), "html", null, true);
            echo ";\">
        <use href=\"";
            // line 128
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_buttons_sprite"] ?? null), 128, $this->source), "html", null, true);
            echo "#print\" />
      </svg>
    </a>
  ";
        }
        // line 132
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/better_social_sharing_buttons/templates/better-social-sharing-buttons.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  476 => 132,  469 => 128,  461 => 127,  454 => 126,  451 => 125,  448 => 124,  442 => 122,  439 => 121,  436 => 120,  433 => 119,  430 => 118,  427 => 116,  421 => 113,  416 => 111,  408 => 110,  402 => 108,  399 => 107,  396 => 105,  389 => 101,  381 => 100,  370 => 99,  367 => 98,  364 => 96,  357 => 92,  349 => 91,  338 => 90,  335 => 89,  332 => 87,  325 => 83,  317 => 82,  306 => 81,  303 => 80,  300 => 78,  293 => 74,  285 => 73,  274 => 72,  271 => 71,  268 => 69,  261 => 65,  253 => 64,  244 => 63,  241 => 62,  238 => 60,  231 => 56,  223 => 55,  214 => 54,  211 => 53,  208 => 51,  201 => 47,  193 => 46,  182 => 45,  179 => 44,  176 => 42,  169 => 38,  161 => 37,  148 => 36,  145 => 35,  142 => 33,  135 => 29,  127 => 28,  118 => 27,  115 => 26,  112 => 24,  105 => 20,  97 => 19,  86 => 18,  83 => 17,  80 => 15,  73 => 11,  65 => 10,  54 => 9,  51 => 8,  44 => 4,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/better_social_sharing_buttons/templates/better-social-sharing-buttons.html.twig", "/home/likinormas.enelcol.com.co/public_html/web/modules/contrib/better_social_sharing_buttons/templates/better-social-sharing-buttons.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 8, "set" => 120);
        static $filters = array("escape" => 1, "t" => 9);
        static $functions = array("attach_library" => 1, "url" => 36);

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set'],
                ['escape', 't'],
                ['attach_library', 'url']
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
