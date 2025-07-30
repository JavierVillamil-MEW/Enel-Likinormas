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

/* __string_template__958ecaab8c289877685ad6527880ae1d */
class __TwigTemplate_a6afbb5b6e27d9e920eb7bd28dddd5a5 extends Template
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
        echo "<!DOCTYPE html>
<!-- saved from url=(0071)http://127.0.0.1:5500/20230216_mailing_boletin_corporativo_febrero.html -->
<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">

    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">
    <title>Boletín Corporativo | Enel Colombia</title>
    <script type=\"text/javascript\" charset=\"UTF-8\"></script>
    <style>
        * {
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 0px;
            border: none;
            line-height: normal;
            outline: none;
            list-style: none;
            font-family: Arial, Helvetica, sans-serif;
            -webkit-text-size-adjust: none;
        }

        body {
            margin: 0 !important;
            margin-bottom: 0 !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            background-color: #ffffff;
            -webkit-text-size-adjust: 100% !important;
            -ms-text-size-adjust: 100% !important;
            -webkit-font-smoothing: antialiased !important;
        }

        img {
            border: 0 !important;
            outline: none !important;
            min-height: auto !important;
            margin: 0 auto;
            display: block;
            text-align: center;
        }

        table {
            border-collapse: collapse;
            mso-table-lspace: 0px;
            mso-table-rspace: 0px;
            margin: 0px auto !important;
            border: 0px !important;
        }

        td {
            border-collapse: collapse;
            mso-line-height-rule: exactly;
        }

        .legal {
            font-family: 'arial';
            font-size: 7px;
            color: #333333;
            line-height: normal;
            text-align: center;
        }
        /*desktop css */

        @media screen and (max-width:550px) {
            .wrapper {
                width: 100% !important;
            }
            .wrappertwo {
                width: 300px !important;
            }
            .hidden {
                display: none !important;
            }
            .ajust {
                width: 93% !important;
                display: block;
                margin: 0 auto !important;
            }
            .ajustwo {
                width: 100% !important;
                display: block;
                margin: 0 auto !important;
            }
            .text_center {
                text-align: center;
            }
            .title {
                font-family: 'arial' !important;
                text-align: center !important;
                font-size: 8px !important;
                font-weight: normal !important;
            }
            .footer_res {
                width: 33.33% !important;
            }
            .footer_img {
                width: 80%;
            }
        }
    </style>
</head>

<body bgcolor=\"#ffffff\" cz-shortcut-listen=\"true\">
    <table align=\"center\"  width=\"600\" class=\"wrapper\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"border: 1px solid !important; border-color: #EEEEEE !important; \">
        <tbody>
            <tr>
                <td width=\"180\" align=\"left\" bgcolor=\"#FC0F64\" style=\"padding-top:10px; padding-bottom:10px\">
                    <a target=\"_blank\">
                        <img style=\"margin: 0!important; padding-left: 5vw; width: 90px;\" class=\"footer_img\" src=\"https://assets.enelcol.com.co/2023/marzo/20230328_mailing_boletin_corporativo_marzo/imagen/enel-col.png\" alt=\"enel colombia\" width=\"125\">
                    </a>
                </td>
            </tr>
            <tr>
                <td align=\"center\">
                    <table class=\"wrappertwo\" width=\"534\" bgcolor=\"#ffffff\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\">
                        <tbody>
                            <tr>
                                <td align=\"center\" width=\"534\" class=\"ajustwo\" valign=\"middle\">
                                    <table width=\"534\" class=\"wrapper\" style=\"width: 100%;\">
                                        <tbody>
                                            <tr>
                                                <td align=\"center\" style=\"padding: 8vw 3vw 15vw 5vw;\">
                                                    <table class=\"wrapper\" width=\"100%\" border=\"0\">
                                                        <tbody>
                                                            <tr>
                                                                <td align=\"center\" width=\"252\" class=\"ajustwo\" valign=\"middle\">
                                                                    <table  border=\"0\" cellspacing=\"0\" cellpadding=\"0\">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align=\"left\" style=\"padding-top: 20px; font-family: arial;  color: #333333; line-height: normal;\">
                                                                                    <b  style=\"font-size: 46px; font-weight: inherit;\">Un usuario te quiere contactar</b>
                                                                                </td>
                                                                                <tr>
                                                                                    <td style=\"height: 1.8px;\" height=\"3\" bgcolor=\"#FC0F64\"></td>
                                                                                </tr>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align=\"left\" style=\"padding-top: 60px; font-family: arial; font-size: 17px; color: #393939; line-height: normal;\">
                                                                                  <p>La información del usuario es la siguiente:</p><br>
                                                                                  ";
        // line 139
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\webform\Twig\WebformTwigExtension']->webformToken("[webform_submission:values:webform_token_options_html:webform_token_options_email]", $this->sandbox->ensureToStringAllowed(($context["webform_submission"] ?? null), 139, $this->source), [], $this->sandbox->ensureToStringAllowed(($context["options"] ?? null), 139, $this->source)), "html", null, true);
        echo "
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
        <tr style=\"background-color: #0555FA;\">
            <td style=\"padding-top: 20px; padding-bottom: 20px; text-align: left\">
                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">
                    <tbody><tr>
                        <td align=\"left\" width=\"500\">
                            <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"500\" align=\"left\">

                                <tbody><tr style=\"text-align: left\">

                                    <td align=\"left\" style=\"text-align: left; \">
                                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"left\" >
                                            <tbody>
                                                <tr>
                                                    <td width=\"180\" align=\"left\"  style=\"padding-top:10px; padding-bottom:10px; width: 40px;\">
                                                        <a target=\"_blank\">
                                                            <img style=\"margin: 0!important; padding-left: 2vw; width: 65px; background-color: #0555FA;\" class=\"footer_img\" src=\"https://assets.enelcol.com.co/2023/marzo/20230328_mailing_boletin_corporativo_marzo/imagen/enel-col.png\" alt=\"enel colombia\" width=\"125\">
                                                        </a>
                                                    </td>
                                                </tr>
                                                </table>
                                                <table style=\"width: 70%;\">
                                                    <tr >
                                                        <td align=\"left\" width=\"20\" style=\" font-size: 13px; padding-bottom: 5px;\">
                                                            <span style=\"color:white;\">CONTÁCTANOS</span>
                                                        </td>
                                                        <tr>
                                                            <td style=\"height: 1.5px;\" height=\"3\" bgcolor=\"white\"></td>
                                                        </tr>
                                                        <table>
                                                            <tr>
                                                                <td align=\"left\"  style=\" font-size: 13px; padding-top: 15px; padding-right: 30px;\">
                                                                    <span style=\"color:white; padding-top: 30px;\">Línea Nacional de servicios</span>
                                                                </td>
                                                                <td align=\"left\"   style=\" font-size: 13px; padding-top: 15px;\">
                                                                    <span style=\"color:white; padding-top: 30px;\">Correo Electrónico</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align=\"left\"  style=\" font-size: 13px; padding-top: 5px;\">
                                                                    <span style=\"color:white; padding-top: 30px;\">+57 1 711 5115</span>
                                                                </td>
                                                                <td align=\"left\"  style=\" font-size: 13px; padding-top: 5px;\">
                                                                    <span style=\"color:white; padding-top: 30px;\">servicioalcliente@enel.com</span>
                                                                </td>

                                                            </tr>
                                                        </table>
                                                    </tr>
                                                </table>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>

                    </tr>
                </tbody></table>

            </td>
        </tr>
        <!-- footer end -->
            <tr>
                <td align=\"center\" style=\"background-color: #222222; padding-top: 10px; padding-bottom: 10px; font-family: arial; font-size: 12px;\">
                    <span style=\"color: #47B5DD; padding-top: 30px; font-size: 10px; padding-right: 9px;\">© ENELS.A 2023</span>
                    <span style=\"color: #47B5DD; padding-top: 30px; font-size: 10px; padding-right: 9px; text-decoration: underline;\">Todos los derechos reservados</span>
                    <span style=\"color: #47B5DD; padding-top: 30px; font-size: 10px; padding-right: 9px; text-decoration: underline\">Legal</span>
                    <span style=\"color: #47B5DD; padding-top: 30px; font-size: 10px; padding-right: 9px; text-decoration: underline\">Politica de Cookies</span>
                    <span style=\"color: #47B5DD; padding-top: 30px; font-size: 10px; padding-right: 9px; text-decoration: underline\">Política de privacidad de datos</span>
                </td>
            </tr>
        </tbody>
    </table>

<custom name=\"opencounter\" type=\"tracking\"></custom>
</body>
</html>";
    }

    public function getTemplateName()
    {
        return "__string_template__958ecaab8c289877685ad6527880ae1d";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  179 => 139,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "__string_template__958ecaab8c289877685ad6527880ae1d", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 139);
        static $functions = array("webform_token" => 139);

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                ['webform_token']
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
