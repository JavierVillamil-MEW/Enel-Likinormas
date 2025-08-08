// Import libraries
const $ = jQuery;
const AOS = require("aos");
const owlCarousel = require("owl.carousel");
import "jquery-validation";
import "select2";
const avatarProfile = require("../assets/images/avatar-profile.png");
const imgButtonGoTop = require("../assets/images/button-go-top.svg");
const imgPreviewAvatar = require("../assets/images/icon-images-preview-avatar.svg");
const iconLoginProfileMobile = require("../assets/images/icon-profile.svg");
const widthWindows = $(window).width();
const elementDoc = document.documentElement;
let textSearchDefault = "";
let booleanFilterForShowPagination = false;
let sendCommentary = false;

// Modify message jquery validation
$.extend($.validator.messages, {
  required: "Este campo es obligatorio.",
});

$.validator.addMethod(
  "emailValidate",
  function (value, element) {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(value)) {
      return true;
    } else {
      return false;
    }
  },
  "Ingrese un correo electrónico válido"
);

$.validator.addMethod(
  "letterwithbasicpunc",
  function (value, element) {
    if (
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]*$/.test(
        value
      )
    ) {
      return true;
    } else {
      return false;
    }
  },
  "Ingrese solo letras y espacios"
);

$.validator.addMethod(
  "captcha",
  function (value, element) {
    // Verificar si el campo de captcha ha sido completado
    return value != "";
  },
  "Por favor, completa el captcha."
);

// Variables for comments
let replyComment = false,
  filterForAlphabetic = false,
  editComment = false;

// Scroll for menu
function scrollPages() {
  let urlLogoInitial = $(".region-nav-branding #block-likinormas-branding");
  const urlLogoFixed = $(".region-nav-branding #block-logofijomenuprincipal");

  urlLogoFixed.on("click", function () {
    window.location.href = "/";
  });

  if ($("body.path-taxonomy.is-term-pdf").length) {
    $("header").addClass("scroll");
    urlLogoInitial.hide();
    urlLogoFixed.show();
  } else {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 0) {
        $("header").addClass("scroll");
        urlLogoInitial.hide();
        urlLogoFixed.show();
      } else {
        $("header").removeClass("scroll");
        urlLogoInitial.show();
        urlLogoFixed.hide();
      }
    });
  }
}

// Move form filter for search normas and specifications
function moveFormSearchHome() {
  if ($(".page-node-type-rules-home-content .form-search-all").length) {
    let formSearch = $(
      ".page-node-type-rules-home-content .form-search-all"
    ).parent();
    let blockSlideHomeBanner = $("#sliderHome").parent();
    formSearch.appendTo(blockSlideHomeBanner);

    formSearch.find('.form-item select[name="tipo_de_norma"]').select2({
      minimumResultsForSearch: Infinity,
    });

    formSearch.find(".form-item-title input").attr("placeholder", "Buscar");
  }
}

// Add class for swiper-slider Home
function addClassForSwiperSliderHome() {
  if ($(".page-node-type-rules-home-content .slider-home").length) {
    let slideHomeBanner = $("#sliderHome");
    slideHomeBanner
      .find(".field--name-media-banner")
      .addClass("owl-carousel owl-theme");

    let htmlButtons = `<div class="container content__buttons">
                        <div class="swiper-button-prev swiper-button-white" role="button"></div>
                        <div class="swiper-button-next swiper-button-white" role="button"></div>
                      </div>`;

    // Add buttons slider
    // slideHomeBanner.append(htmlButtons);

    // Init slider Home
    initSliderHome();
  }
}

function initSliderHome() {
  $(".slider-home .field--name-media-banner").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    lazyLoad: true,
    responsive: {
      768: {
        nav: true,
        dots: true,
      },
    },
  });
}

// heigh dinamy for cada in mobile
function heightCardMobileHome() {
  if (
    $(".page-node-type-rules-home-content .container-card").length &&
    widthWindows < 992
  ) {
    resizeCard();

    $(window).on("resize ", function () {
      resizeCard();
    });

    function resizeCard() {
      $(
        ".page-node-type-rules-home-content .container-card .block-card-images img"
      ).each(function () {
        let heightImages = $(this).height();
        let parentContainer = $(this).closest(".container-card");
        parentContainer
          .find(".block-card-info .block-card-body")
          .css("min-height", `${heightImages}px`);
      });
    }
  }
}

// Add attribute in home of the card
function addAosHome() {
  if ($(".page-node-type-rules-home-content .container-card")) {
    if ($(".container-card.pos-der").length) {
      $(".container-card.pos-der").each(function () {
        let infoCardRight = $(this).find(".block-card-info .block-card-body");
        let imagesCardRight = $(this).find(".block-card-images");

        // if(widthWindows < 992) {
        infoCardRight
          .find(
            ".title-secondary, .block-card-body-text, .field--name-section-button"
          )
          .attr("data-aos", "zoom-in-down");
        imagesCardRight.find("img").attr("data-aos", "fade-up");
        // }else {
        // infoCardRight.find('.title-secondary, .block-card-body-text, .field--name-section-button').attr('data-aos', 'fade-right');
        // imagesCardRight.find('img').attr('data-aos', 'zoom-in-up');
        // }
      });
    }

    if ($(".container-card.pos-izq").length) {
      $(".container-card.pos-izq").each(function () {
        let infoCardRight = $(this).find(".block-card-info .block-card-body");
        let imagesCardRight = $(this).find(".block-card-images");

        // if(widthWindows < 992) {
        infoCardRight
          .find(
            ".title-secondary, .block-card-body-text, .field--name-section-button"
          )
          .attr("data-aos", "zoom-in-down");
        imagesCardRight.find("img").attr("data-aos", "fade-up");
        // }else {
        // infoCardRight.find('.title-secondary, .block-card-body-text, .field--name-section-button').attr('data-aos', 'fade-left');
        // imagesCardRight.find('img').attr('data-aos', 'zoom-in-up');
        // }
      });
    }

    if ($(".container-card-100").length) {
      $(".container-card-100").each(function () {
        let infoCardFull = $(this).find(".block-card-info .block-card-body");
        infoCardFull
          .find(
            ".title-secondary, .block-card-body-text, .field--name-background-banner-button a"
          )
          .attr("data-aos", "zoom-out-up");
      });
    }

    if ($(".block-contact").length) {
      $(".block-contact").each(function () {
        let blockContactInfo = $(this).find(".block-contact-info");
        let blockContactForm = $(this).find(".block-contact-form");
        blockContactInfo
          .find(
            ".title-secondary, .block-contact-data-text, .field--name-contact-button a"
          )
          .attr("data-aos", "zoom-in");
        blockContactForm.find("form").attr("data-aos", "zoom-in-down");
      });
    }
  }
}

// Events form contact
function eventsFormContact() {
  if ($(".block-contact .block-contact-form form").length) {
    // select asunto
    $('.block-contact .block-contact-form form select[name="asunto"]').select2({
      minimumResultsForSearch: Infinity,
    });
    $(
      '.block-contact .block-contact-form form select[name="asunto"] option:first'
    ).val("");

    // Event change norma
    $('.block-contact .block-contact-form form input[name="norma"]').on(
      "keydown",
      function () {
        let widthInput = $(this).width();
        elementDoc.style.setProperty("--width-input-normal", `${widthInput}px`);
      }
    );

    $('.block-contact .block-contact-form form input[name="norma"]').attr(
      "placeholder",
      "Buscar"
    );

    // Validate form contact
    $(".block-contact .block-contact-form form").validate({
      rules: {
        nombre_completo: {
          required: true,
          letterwithbasicpunc: true,
          minlength: 5,
          maxlength: 30,
        },
        email: {
          required: true,
          emailValidate: true,
        },
        norma: {
          equalTo: {
            param: ".ui-helper-hidden-accessible div",
            depends: function (element) {
              if (
                $(
                  '.block-contact .block-contact-form form input[name="norma"]'
                ).val().length > 0
              ) {
                return !(
                  $(".ui-helper-hidden-accessible div").text() ==
                  $(
                    '.block-contact .block-contact-form form input[name="norma"]'
                  ).val()
                );
              }
            },
          },
        },
        asunto: {
          required: true,
        },
        mensaje: {
          required: true,
          minlength: 10,
          maxlength: 800,
        },
        captcha: {
          required: true,
          captcha: true,
        },
      },
      messages: {
        captcha: {
          required: "Por favor, completa el captcha.",
        },
      },
      errorPlacement: function (error, element) {
        if ($(element).is("select")) {
          error.insertAfter(element.parent().find(".select2"));
        } else {
          error.insertAfter(element);
        }
      },
      submitHandler: function (form) {
        if (grecaptcha.getResponse()) {
          $("body .r-captcha-error").remove();
          form.submit();
        } else {
          if (!$("body .r-captcha-error").length) {
            $(
              '<span class="r-captcha-error" style="color:red;font-size: 1.4rem;text-align: center;width: 100%;display: block;">Error en captcha, este campo es requerido.</span>'
            ).insertAfter(".captcha");
          }
        }
      },
    });
  }
}

// Create button close for filter mobile
function createButtonCloseFilterMobile() {
  const htmlButton = `<div class="content-button"><button class="button-pink">Cerrar</button></div>`;
  $(".view-filters .form-filter-list").append(htmlButton);
}

// Event form filter list norma
function eventsFormFilterList() {
  if ($(".block-form-filter-list").length) {
    $("html").removeAttr("style");
    $("body").removeClass("show-filter-mobile");

    // select categories
    $(
      '.block-form-filter-list .form-filter-list select[name="rule_category_target_id"]'
    ).select2({
      minimumResultsForSearch: Infinity,
    });
    // select categories especificaciones
    $(
      '.block-form-filter-list .form-filter-list select[name="specification_category_target_id"]'
    ).select2({
      minimumResultsForSearch: Infinity,
    });

    // select subcategories
    // $('.block-form-filter-list .form-filter-list select[name="rule_subcategory_target_id"]').select2('destroy');
    $(
      '.block-form-filter-list .form-filter-list select[name="rule_subcategory_target_id"]'
    ).select2({
      minimumResultsForSearch: Infinity,
    });

    // select subcategories especificaciones
    $(
      '.block-form-filter-list .form-filter-list select[name="specification_subcategory_target_id"]'
    ).select2({
      minimumResultsForSearch: Infinity,
    });

    $(
      '.block-form-filter-list .form-filter-list select[name="tipo_de_norma"]'
    ).select2({
      minimumResultsForSearch: Infinity,
    });

    // Select order by
    $(
      '.block-form-filter-list .form-filter-list select[name="sort_by"]'
    ).select2({
      minimumResultsForSearch: Infinity,
    });

    // select alphabetic
    if (
      $('.block-form-filter-list .form-filter-list select[name="sort_by"]')
        .length
    ) {
      $(".form-item-sort-by label").appendTo(
        ".content-filter .alphabetic-filtert"
      );
      $(".form-item-sort-by .select2-container").appendTo(
        ".content-filter .alphabetic-filtert"
      );

      $('.block-form-filter-list .form-filter-list select[name="sort_by"]').on(
        "select2:open",
        function (e) {
          $(".select2-container--open").addClass(
            "select2-container--open-sort"
          );
        }
      );

      $('.block-form-filter-list .form-filter-list select[name="sort_by"]').on(
        "change",
        function () {
          autoSubmitFormFilter();
        }
      );
    }

    $(
      'select[name="rule_category_target_id"], select[name="rule_subcategory_target_id"], select[name="specification_category_target_id"], select[name="specification_subcategory_target_id"]'
    ).on("change", function () {
      booleanFilterForShowPagination = true;
    });

    $(
      "body.path-normas .block-form-filter-list .form-filter-list .form-actions input, body.path-especificaciones .block-form-filter-list .form-filter-list .form-actions input"
    ).on("click", function () {
      booleanFilterForShowPagination = true;
    });

    // Clear All filters
    $("body").on("click", ".clear-filter", function () {
      window.location.reload();
    });

    // Clear filter for tag
    $("body").on("click", ".header-filter-results .tag-button", function () {
      $(".views-element-container").addClass("showFilters");
      let typeFilter = $(this).attr("data-typeInput");
      let parentTag = $(this).closest(".tag");
      parentTag.remove();

      switch (typeFilter) {
        case "selectCategories":
          removeTagFilter("select", 'select[name="rule_category_target_id"]');
          break;
        case "selectCategoriesEspe":
          removeTagFilter(
            "select",
            'select[name="specification_category_target_id"]'
          );
          break;
        case "selectSubCategories":
          removeTagFilter(
            "select",
            'select[name="rule_subcategory_target_id"]'
          );
          break;
        case "selectSubCategoriesEspe":
          removeTagFilter(
            "select",
            'select[name="specification_subcategory_target_id"]'
          );
          break;
        case "inputSearch":
          removeTagFilter("input", 'input[name="combine"]');
          break;
        case "inputDate":
          removeTagFilter("input", 'input[name="effective_date_value"]');
          break;
        case "inputDateEspe":
          removeTagFilter("input", 'input[name="effective_date_value"]');
          break;
      }
    });

    $(
      ".path-normas .field-button-mobile .button-filter-mobile, .path-especificaciones .field-button-mobile .button-filter-mobile, .view__indice .button-filter-mobile"
    ).on("click", function () {
      $("html").css("overflow", "hidden");
      $("body").addClass("show-filter-mobile");
      $(".views-element-container .view-filters").show("slow");
      filterForAlphabetic = true;
    });

    if (widthWindows < 992) {
      if (!$(".form-filter-list .content-button").length) {
        createButtonCloseFilterMobile();
      }

      $(window).on("resize", function () {
        if (!$(".form-filter-list .content-button").length) {
          createButtonCloseFilterMobile();
        }
      });
    }

    $("body").on(
      "click",
      ".views-element-container .view-filters .form-filter-list .content-button button",
      function (e) {
        e.preventDefault();
        $("html").removeAttr("style");
        $("body").removeClass("show-filter-mobile");
        $(".views-element-container .view-filters").hide("slow");
        filterForAlphabetic = false;
      }
    );
  }
}

// Event submit form filter
function autoSubmitFormFilter() {
  let buttonSubmit = document.querySelector(
    ".block-form-filter-list .form-actions .form-submit"
  );

  buttonSubmit.click();
}

// event form search normas
function eventFormSearchNorma() {
  if ($(".path-buscador").length) {
    let contentFilter = $(".views-element-container");

    let blockFormFilter = $(".block-form-filter-list");
    let filterSearchName = $('input[name="combine"]').val();
    let filterTypeNorma = $('select[name="tipo_de_norma"]');
    let valSelectForDefaultCateEspe = filterTypeNorma
      .find("option:first")
      .val()
      .trim();
    let filterDate = $('input[name="effective_date_value"]');
    let blockShowFilter = $(".header-filter-results .filters-show");

    // Filter tupe of norma
    let valFilterTypeNorma = filterTypeNorma.val();
    if (
      valFilterTypeNorma !== valSelectForDefaultCateEspe &&
      valFilterTypeNorma !== ""
    ) {
      blockShowFilter.addClass("active");

      let textFilterCategories = filterTypeNorma
        .find('option[value="' + valFilterTypeNorma + '"]')
        .text()
        .trim();

      // Add filter to show result
      let htmlFilterItem = `<div class="tag">
                              <span class="tag-text">${textFilterCategories}</span>
                              <span class="tag-button" data-typeInput="selectTypeNorma" idSelect="${valFilterTypeNorma}">x</span>
                            </div>`;
      blockShowFilter.find(".clear-filter").before(htmlFilterItem);
    }

    // Filter search by Name
    if (filterSearchName !== "" && filterSearchName !== undefined) {
      blockShowFilter.addClass("active");

      // Add filter to show result
      let htmlFilterItem = `<div class="tag">
                              <span class="tag-text">${filterSearchName.trim()}</span>
                              <span class="tag-button" data-typeInput="inputSearchName">x</span>
                            </div>`;
      blockShowFilter.find(".clear-filter").before(htmlFilterItem);
    }

    // Filter search for date
    let valSearchForDate = filterDate.val();
    if (valSearchForDate !== "" && valSearchForDate !== undefined) {
      blockShowFilter.addClass("active");

      // Add filter to show result
      let htmlFilterItem = `<div class="tag">
                              <span class="tag-text">${valSearchForDate.trim()}</span>
                              <span class="tag-button" data-typeInput="inputDateNorma">x</span>
                            </div>`;
      blockShowFilter.find(".clear-filter").before(htmlFilterItem);
    }

    // Create button close for filter mobile
    function createButtonCloseMobile() {
      let colorForm = $(".path-buscador .block-form-filter-list")
        .attr("style")
        .split(": ")[1];
      const htmlButton = `<div class="content-button" style="background-color: ${colorForm}"><button class="button-pink">Cerrar</button></div>`;
      $(".path-buscador form").parent().append(htmlButton);
    }

    // select type norma search
    blockFormFilter
      .find('.form-filter-list select[name="tipo_de_norma"]')
      .select2({
        minimumResultsForSearch: Infinity,
      });

    if ($(contentFilter.find(".view-empty")).length) {
      $(".content-filter .alphabetic-filtert .select2-container").remove();
    } else {
      blockFormFilter.find('.form-filter-list select[name="sort_by"]').select2({
        minimumResultsForSearch: Infinity,
      });

      // select alphabetic
      if (
        blockFormFilter.find('.form-filter-list select[name="sort_by"]').length
      ) {
        $(".form-item-sort-by label").appendTo(
          ".content-filter .alphabetic-filtert"
        );
        $(".form-item-sort-by .select2-container").appendTo(
          ".content-filter .alphabetic-filtert"
        );

        blockFormFilter
          .find('.form-filter-list select[name="sort_by"]')
          .on("select2:open", function (e) {
            $(".select2-container--open").addClass(
              "select2-container--open-sort"
            );
          });

        blockFormFilter
          .find('.form-filter-list select[name="sort_by"]')
          .on("change", function () {
            autoSubmitFormFilter();
          });
      }
    }

    if (widthWindows < 992) {
      if (!$(".path-buscador .content-button").length) {
        createButtonCloseMobile();
      }

      $(window).on("resize", function () {
        if (!$(".path-buscador .content-button").length) {
          createButtonCloseMobile();
        }
      });
    }

    $(".path-buscador .button-filter-mobile").on("click", function () {
      $("html").css("overflow", "hidden");
      $("body").addClass("show-filter-mobile");
      $(".path-buscador .views-exposed-form").show("slow");
      filterForAlphabetic = true;
    });

    $("body.path-buscador .content-button button").on("click", function (e) {
      e.preventDefault();
      $("html").removeAttr("style");
      $("body").removeClass("show-filter-mobile");
      $(".path-buscador .views-exposed-form").hide("slow");
      filterForAlphabetic = false;
    });

    function showTextSearch() {
      let textSearch = $('form .form-filter-list input[name="combine"]').val();

      if (textSearch !== "") {
        $(".hero .hero__info-title").text(textSearch);
      } else {
        $(".hero .hero__info-title").text(textSearchDefault);
      }
    }
    showTextSearch();

    // Clear filter for tag
    $("body").on(
      "click",
      ".views-element-container .content-filter .tag-button",
      function () {
        let typeFilter = $(this).attr("data-typeInput");
        let parentTag = $(this).closest(".tag");
        parentTag.remove();

        if (
          $(".views-element-container .content-filter .filters-show .tag")
            .length == 0
        ) {
          location.reload();
        }

        switch (typeFilter) {
          case "selectTypeNorma":
            removeTagFilter("select", 'select[name="tipo_de_norma"]');
            break;
          case "inputSearchName":
            removeTagFilter("input", 'input[name="combine"]');
            break;
          case "inputDateNorma":
            removeTagFilter("input", 'input[name="effective_date_value"]');
            break;
        }
      }
    );

    $('select[name="tipo_de_norma"]').on("change", function () {
      booleanFilterForShowPagination = true;
    });

    $(
      "body.path-buscador .block-form-filter-list .form-filter-list .form-actions input"
    ).on("click", function () {
      booleanFilterForShowPagination = true;
    });

    $("body").on("click", ".clear-filter", function () {
      window.location.href = `${window.location.origin}${window.location.pathname}`;
    });
  }
}

//
function removeTagFilter(typeInput, selectCampoFilter) {
  if (typeInput == "select") {
    let selectFilter = $("" + selectCampoFilter + "");
    let valSelectDefault = selectFilter.find("option:first").val().trim();
    selectFilter.val(valSelectDefault);
    autoSubmitFormFilter();
  }

  if (typeInput == "input") {
    $("" + selectCampoFilter + "").val("");
    autoSubmitFormFilter();
  }
}

// Show filter form list normas
function showFilterListNormas() {
  let blockShowFilter = $(".header-filter-results .filters-show");
  let filterSearch = $('input[name="combine"]');

  if ($("body.path-especificaciones").length) {
    let filterCategoriesEspecifications = $(
      'select[name="specification_category_target_id"]'
    );
    let valSelectForDefaultCateEspe = filterCategoriesEspecifications
      .find("option:first")
      .val()
      .trim();
    let filterSubcategoriesEspecifications = $(
      'select[name="specification_subcategory_target_id"]'
    );
    let valSelectForDefaultSub = filterSubcategoriesEspecifications
      .find("option:first")
      .val()
      .trim();
    let filterDate = $('input[name="effective_date_value"]');

    // Filter categories especifications
    let valFilterCategoriesEspecifications =
      filterCategoriesEspecifications.val();
    if (
      valFilterCategoriesEspecifications !== valSelectForDefaultCateEspe &&
      valFilterCategoriesEspecifications !== ""
    ) {
      blockShowFilter.addClass("active");

      let textFilterCategories = filterCategoriesEspecifications
        .find('option[value="' + valFilterCategoriesEspecifications + '"]')
        .text()
        .trim();

      // Add filter to show result
      let htmlFilterItem = `<div class="tag">
                              <span class="tag-text">${textFilterCategories}</span>
                              <span class="tag-button" data-typeInput="selectCategoriesEspe" idSelect="${valFilterCategoriesEspecifications}">x</span>
                            </div>`;
      blockShowFilter.find(".clear-filter").before(htmlFilterItem);
    }

    // Filter subcategories
    let valFilterSubCategoriesEspecifications =
      filterSubcategoriesEspecifications.val();
    if (
      valFilterSubCategoriesEspecifications !== valSelectForDefaultSub &&
      valFilterSubCategoriesEspecifications !== ""
    ) {
      blockShowFilter.addClass("active");

      let textFilterSubcategories = filterSubcategoriesEspecifications
        .find('option[value="' + valFilterSubCategoriesEspecifications + '"]')
        .text()
        .trim();

      // Add filter to show result
      let htmlFilterItem = `<div class="tag">
                              <span class="tag-text">${textFilterSubcategories}</span>
                              <span class="tag-button" data-typeInput="selectSubCategoriesEspe" idSelect="${valFilterSubCategoriesEspecifications}">x</span>
                            </div>`;
      blockShowFilter.find(".clear-filter").before(htmlFilterItem);
    }

    // Filter search
    let valSearch = filterSearch.val();
    if (valSearch !== "" && valSearch !== undefined) {
      blockShowFilter.addClass("active");

      // Add filter to show result
      let htmlFilterItem = `<div class="tag">
                              <span class="tag-text">${valSearch.trim()}</span>
                              <span class="tag-button" data-typeInput="inputSearch">x</span>
                            </div>`;
      blockShowFilter.find(".clear-filter").before(htmlFilterItem);
    }

    // Filter search for date especifications
    let valSearchForDate = filterDate.val();
    if (valSearchForDate !== "" && valSearchForDate !== undefined) {
      blockShowFilter.addClass("active");

      // Add filter to show result
      let htmlFilterItem = `<div class="tag">
                              <span class="tag-text">${valSearchForDate.trim()}</span>
                              <span class="tag-button" data-typeInput="inputDateEspe">x</span>
                            </div>`;
      blockShowFilter.find(".clear-filter").before(htmlFilterItem);
    }
  }

  if ($("body.path-normas").length) {
    let filterCategories = $('select[name="rule_category_target_id"]');
    let valSelectForDefaultCate = filterCategories
      .find("option:first")
      .val()
      .trim();
    let filterSubCategories = $('select[name="rule_subcategory_target_id"]');
    let valSelectForDefaultSub = filterSubCategories
      .find("option:first")
      .val()
      .trim();
    let filterDate = $('input[name="effective_date_value"]');

    // Filter categories
    let valFilterCategories = filterCategories.val();
    if (
      valFilterCategories !== valSelectForDefaultCate &&
      valFilterCategories !== ""
    ) {
      blockShowFilter.addClass("active");

      let textFilterCategories = filterCategories
        .find('option[value="' + valFilterCategories + '"]')
        .text()
        .trim();

      // Add filter to show result
      let htmlFilterItem = `<div class="tag">
                              <span class="tag-text">${textFilterCategories}</span>
                              <span class="tag-button" data-typeInput="selectCategories" idSelect="${valFilterCategories}">x</span>
                            </div>`;
      blockShowFilter.find(".clear-filter").before(htmlFilterItem);
    }

    // Filter subcategories
    let valFilterSubCategories = filterSubCategories.val();
    if (
      valFilterSubCategories !== valSelectForDefaultSub &&
      valFilterSubCategories !== ""
    ) {
      blockShowFilter.addClass("active");

      let textFilterCategories = filterSubCategories
        .find('option[value="' + valFilterSubCategories + '"]')
        .text()
        .trim();

      // Add filter to show result
      let htmlFilterItem = `<div class="tag">
                              <span class="tag-text">${textFilterCategories}</span>
                              <span class="tag-button" data-typeInput="selectSubCategories" idSelect="${valFilterSubCategories}">x</span>
                            </div>`;
      blockShowFilter.find(".clear-filter").before(htmlFilterItem);
    }

    // Filter search
    let valSearch = filterSearch.val();
    if (valSearch !== "" && valSearch !== undefined) {
      blockShowFilter.addClass("active");

      // Add filter to show result
      let htmlFilterItem = `<div class="tag">
                              <span class="tag-text">${valSearch.trim()}</span>
                              <span class="tag-button" data-typeInput="inputSearch">x</span>
                            </div>`;
      blockShowFilter.find(".clear-filter").before(htmlFilterItem);
    }

    // Filter search for date
    let valSearchForDate = filterDate.val();
    if (valSearchForDate !== "" && valSearchForDate !== undefined) {
      blockShowFilter.addClass("active");

      // Add filter to show result
      let htmlFilterItem = `<div class="tag">
                              <span class="tag-text">${valSearchForDate.trim()}</span>
                              <span class="tag-button" data-typeInput="inputDate">x</span>
                            </div>`;
      blockShowFilter.find(".clear-filter").before(htmlFilterItem);
    }
  }
}

// Add color for hero and form-filter
function addBackgroundColorHeroAndFilter() {
  if ($("body.path-normas").length || $("body.path-especificaciones").length) {
    // Hero
    let bgColorHero = $(".hero").attr("style").split(": ")[1];
    elementDoc.style.setProperty(
      "--background-list-normas-especifications",
      bgColorHero
    );

    // Filter
    let bgFormFilter = $(".view-filters .block-form-filter-list")
      .attr("style")
      .split(": ")[1];
    elementDoc.style.setProperty("--background-form-filter-list", bgFormFilter);
  }
}

// Events Modal
function eventsModal() {
  if ($(".dialog").length) {
    $("body").on("click", ".dialog .dialog-close", function (e) {
      let modalDialog = document.querySelector(".dialog");
      modalDialog.close();
      $("body").removeClass("show-modal");
      $("html").removeAttr("style");

      if ($(".path-user .reset-email-form").length) {
        location.href = "/";
      }

      if ($(".comments .js-ajax-comments-messages").length) {
        $(".comments .js-ajax-comments-messages").remove();
      }
    });
  }
}

// Events of comments Admin
function eventCommentsAdmin() {
  if ($(".comment-item").length && drupalSettings.is_admin) {
    $(
      ".comment-item .comment-item-content .content-links a.js-ajax-comments-edit"
    ).on("click", function (e) {
      editComment = true;
      $(this).closest("article").attr("data-editing-to-comment", true);
    });

    function showLinksComments() {
      $(".comment-item .content-links").each(function () {
        $(this).show();
      });
    }

    if (editComment) {
      showLinksComments();

      let articleComment = $('.comment[data-editing-to-comment="true"]');
      let formEditing = articleComment.next();
      articleComment.find(".content-links").hide();
      formEditing.find(".form-actions input:first").attr("value", "Actualizar");

      articleComment.removeAttr("data-editing-to-comment");
      editComment = false;

      return;
    }

    showLinksComments();
  }
}

function disableButtonCommentSend() {}

// Events of comments
function eventComments() {
  if ($(".comment-item").length) {
    $("form.comment-form .form-actions input").on("click", function (e) {
      e.preventDefault();
      // $(this).prop('disabled', true);
      sendCommentary = true;
    });

    $(
      ".comment-item .comment-item-content .content-links a.js-ajax-comments-reply"
    ).on("click", function (e) {
      replyComment = true;
      $(this).closest("article").attr("data-replying-to-comment", true);
    });

    function showLinksComments() {
      $(".comment-item .content-links").each(function () {
        $(this).show();
      });
    }

    // Verify the states comments
    if (replyComment) {
      showLinksComments();

      let articleComment = $('.comment[data-replying-to-comment="true"]');
      let formReply = articleComment.next();
      formReply.appendTo($(articleComment).find(".comment-item-content"));
      $(articleComment).find(".content-links").hide();

      articleComment.removeAttr("data-replying-to-comment");
      replyComment = false;

      return;
    }

    showLinksComments();
  }
}

// Show Dialog
function showDialog(messageHeader, messageBody, classList) {
  // let modalDialog = document.querySelector('.'+ CSS.escape(classList) +' .dialog');
  let modalDialog = document.querySelector(`.${CSS.escape(classList)} .dialog`);
  modalDialog.querySelector(".dialog-header .dialog-header-title").innerHTML =
    messageHeader;
  modalDialog.querySelector(".dialog-body .dialog-body-description").innerHTML =
    messageBody;

  modalDialog.show();
  $("body").addClass("show-modal");
  $("html").css("overflow", "hidden");
}

function showModalAlertComments() {
  if (
    $("body.path-especificaciones").length ||
    $("body.path-normas").length ||
    $("body.path-buscador").length
  ) {
    if ($(".alert.alert-success").length) {
      let messageStateComment = $(".alert.alert-status.alert-success")
        .text()
        .trim()
        .split("\n")[1]
        .trim();
      showDialog("Estado del comentario", messageStateComment, "list-comments");

      $(".alert.alert-success").remove();
    }
  }
}

function removeLoader() {
  let hashLocation = location.hash;
  const hiddenLoader = () => {
    $("main").addClass("hidden-loader");
    $(".show-loader").remove();
    $(".dialog-off-canvas-main-canvas")
      .css({
        "overflow-y": "auto",
      })
      .addClass("h100");
  };

  if (hashLocation) {
    hiddenLoader();

    $("html, body").animate(
      {
        scrollTop: $(hashLocation).offset().top - 250,
      },
      1500
    );
  } else {
    hiddenLoader();
  }
}

// Move form users to section-info
function moveFormLoginRegisterReset() {
  function addClassNavigationAditional() {
    setTimeout(() => {
      $(
        "header .region-nav-additional .nav.navbar-nav > .nav-item > ul"
      ).addClass("pages-user-form");
    }, 800);
  }
  if ($(".path-user .block-user-form").length) {
    // Login for reset password
    if ($("form.user-pass-reset").length) {
      let formUser = $("form.user-pass-reset");
      formUser.appendTo(".block-user .section-info .block-user-form");
      addClassNavigationAditional();
      return;
    }

    // Reset new password
    if ($(".user-logged-in.path-user form > .reset-new-pass-form").length) {
      let formUserNewPass = $("form.user-form");
      let imgBackground = formUserNewPass.find(".field--name-background-image");
      let title = formUserNewPass.find(".field--name-title-section h1").text();
      let description = formUserNewPass
        .find(".field--name-description-section")
        .text();

      $(".section-info .block-user-data .block-user-data-title").text(title);
      $(".section-info .block-user-data .block-user-data-description").text(
        description
      );
      imgBackground.remove();
      formUserNewPass.find(".field--name-title-section").remove();
      formUserNewPass.find(".field--name-description-section").remove();

      formUserNewPass.appendTo(".block-user .section-info .block-user-form");
      addClassNavigationAditional();

      return;
    }

    // Form login, register, reset email
    if ($(".childre-form").closest("form").length) {
      let formUser = $(".childre-form").closest("form");
      formUser.appendTo(".block-user .section-info .block-user-form");
      addClassNavigationAditional();
      return;
    }

    // Form register with facebook
    if ($("form.user-form > .field--name-user-picture").length) {
      let formUser = $("form.user-form > .field--name-user-picture").closest(
        "form"
      );
      let dataFoto = formUser.find(".field--name-user-picture .form-item");

      formUser.addClass("user-register-form register-with-facebook");
      formUser
        .find('.form-wrapper[data-drupal-selector="edit-account"]')
        .append(`<div class="content-profession-company"></div>`);
      formUser
        .find(".field--name-profession-or-occupation")
        .appendTo(formUser.find(".content-profession-company"));
      formUser
        .find(".field--name-company")
        .appendTo(formUser.find(".content-profession-company"));
      dataFoto.find("label").remove();
      dataFoto.find(".form-managed-file .image-widget-data").remove();
      dataFoto.find("div.description").remove();

      formUser.appendTo(".block-user .section-info .block-user-form");
      addClassNavigationAditional();
      return;
    }
  }
}

// Add icon show pass to input type password
function addIconShowPass() {
  if ($('input[type="password"]').length) {
    $('input[type="password"]').each(function () {
      $(this)
        .parent()
        .append('<div class="icon-show-password hidden-password"></div>');
    });
  }
}

// Event show and hidden password
function eventShowAndHiddenPass() {
  if ($('input[type="password"]').length) {
    $('input[type="password"]').each(function () {
      let parentElement = $(this).parent();
      let elementInput = $(this);

      parentElement.find(".icon-show-password").on("click", function () {
        let parentElement = $(this).parent();
        let elementInput = parentElement.find("input");

        if (elementInput.attr("type") == "password") {
          $('input[type="password"]').each(function () {
            $(this).attr("type", "text");
            let parentElement = $(this).parent();
            parentElement
              .find(".icon-show-password")
              .removeClass("hidden-password")
              .addClass("show-password");
          });
        } else if (elementInput.attr("type") == "text") {
          $(".form-item.form-type-password input").each(function () {
            $(this).attr("type", "password");
            let parentElement = $(this).parent();
            parentElement
              .find(".icon-show-password")
              .removeClass("show-password")
              .addClass("hidden-password");
          });
        }
      });
    });
  }
}

// Show error of form login-register-reset
function showErrorForm() {
  if ($("form.user-login-form").length) {
    let errorForm = $(".form-item--error-message");
    errorForm.insertBefore($(".form-forgot-pass"));
  }
}

// Validate form login-register-reset
function validateFormLoginRegisterReset() {
  if ($("form.user-login-form").length) {
    $("form.user-login-form").validate({
      rules: {
        name: {
          required: true,
          minlength: 5,
        },
        pass: {
          required: true,
        },
      },
      messages: {
        name: {
          minlength: "Por favor ingrese al menos 5 caracteres",
        },
      },
      highlight: function (element, errorClass, validClass) {
        $(element)
          .parent(".form-item")
          .addClass("error-input")
          .removeClass("valid-input");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element)
          .parent(".form-item")
          .addClass("valid-input")
          .removeClass("error-input");
      },
      onkeyup: function (element) {
        if (
          !this.checkable(element) &&
          (element.name in this.submitted || !this.optional(element))
        ) {
          this.element(element); // triggers validation on the field
        }
      },
      submitHandler: function (form) {
        if (grecaptcha.getResponse()) {
          $("body .r-captcha-error").remove();
          form.submit();
        } else {
          if (!$("body .r-captcha-error").length) {
            $(
              '<span class="r-captcha-error" style="color:red;font-size: 1.4rem;text-align: center;width: 100%;display: block;">Error en captcha, este campo es requerido.</span>'
            ).insertAfter(".captcha");
          }
        }
      },
    });

    return;
  }

  if ($("form.user-pass").length) {
    $("form.user-pass").validate({
      rules: {
        name: {
          required: true,
          emailValidate: true,
        },
      },
    });

    return;
  }

  if ($("form.user-register-form").length) {
    $("form.user-register-form").validate({
      rules: {
        name: {
          required: true,
          letterwithbasicpunc: true,
          minlength: 5,
        },
        mail: {
          required: true,
          emailValidate: true,
        },
        "profession_or_occupation[0][value]": {
          required: true,
          minlength: 3,
        },
        "pass[pass1]": {
          required: true,
          minlength: 6,
        },
        "pass[pass2]": {
          required: true,
          minlength: 6,
          equalTo: "#edit-pass-pass1",
        },
        "terms_and_conditions[value]": {
          required: true,
        },
      },
      messages: {
        name: {
          minlength: "Por favor ingrese al menos 5 caracteres",
        },
        "pass[pass1]": {
          minlength: "Por favor ingrese al menos 6 caracteres",
        },
        "pass[pass2]": {
          minlength: "Por favor ingrese al menos 6 caracteres",
          equalTo: "Las contraseñas deben coincidir",
        },
      },
      errorPlacement: function (error, element) {
        if (element.attr("name") === "terms_and_conditions[value]") {
          error.insertAfter(element.parent());
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element)
          .parent(".form-item")
          .addClass("error-input")
          .removeClass("valid-input");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element)
          .parent(".form-item")
          .addClass("valid-input")
          .removeClass("error-input");
      },
      onkeyup: function (element) {
        if (
          !this.checkable(element) &&
          (element.name in this.submitted || !this.optional(element))
        ) {
          this.element(element); // triggers validation on the field
        }
      },
      submitHandler: function (form) {
        if (grecaptcha.getResponse()) {
          $("body .r-captcha-error").remove();
          form.submit();
        } else {
          if (!$("body .r-captcha-error").length) {
            $(
              '<span class="r-captcha-error" style="color:red;font-size: 1.4rem;text-align: center;width: 100%;display: block;">Error en captcha, este campo es requerido.</span>'
            ).insertAfter(".captcha");
          }
        }
      },
    });

    return;
  }

  if ($("form .reset-new-pass-form").length) {
    $("form.user-form").validate({
      rules: {
        current_pass: {
          required: {
            depends: function (element) {
              return $("#edit-pass-pass1").val().length > 0;
            },
          },
          minlength: 6,
        },
        "pass[pass1]": {
          required: true,
          minlength: 6,
        },
        "pass[pass2]": {
          required: true,
          minlength: 6,
          equalTo: "#edit-pass-pass1",
        },
      },
      messages: {
        current_pass: {
          required: "Por favor ingresar la contraseña actual",
          minlength: "Por favor ingrese al menos 6 caracteres",
        },
        "pass[pass1]": {
          minlength: "Por favor ingrese al menos 6 caracteres",
        },
        "pass[pass2]": {
          minlength: "Por favor ingrese al menos 6 caracteres",
          equalTo: "Las contraseñas deben coincidir",
        },
      },
    });

    return;
  }
}

// Show modal for new pass
function showModalNewPass() {
  if ($(".user-logged-in.path-user .reset-new-pass-form").length) {
    if ($(".alert").length) {
      let messageModal = $(".alert").text().trim().split("\n")[1].trim();
      showDialog("Actualización", messageModal, "user-form");

      $(".alert").remove();
    }

    return;
  }

  if ($(".path-user .user-pass").length) {
    if ($(".alert.alert-success").length) {
      let messageModal = $(".alert").text().trim().split("\n")[1].trim();
      showDialog("Envío exitoso", messageModal, "path-user");
      $(".alert").remove();
      return;
    }

    if ($(".alert.alert-danger").length) {
      let messageModal = $(".alert").text().trim().split("\n")[1].trim();
      showDialog("Error en el envío", messageModal, "path-user");
      $(".alert").remove();
      return;
    }

    return;
  }
}

// Show scrollTop
function showButtonGoToTop() {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".go-top-button").fadeIn();
    } else {
      $(".go-top-button").fadeOut();
    }
  });
}

// Boton go to top
function goToUp() {
  $(".go-top-button").on("click", function () {
    jQuery("html, body").animate({ scrollTop: 0 }, 800);
  });
}

// Structure of form edit user profile
function moveFormEditUser() {
  if ($(".user-data-profile .profile-content").length) {
    if ($("body.user-profile form.user-form").length) {
      let formEdit = $(
        "body.user-profile .block-user .block-user-form form.user-form"
      );
      formEdit.appendTo($("#editUserModal .modal-body"));
      $(".block-user").remove();

      let formEditModal = $("#editUserModal .modal-body form.user-form"),
        baseHtml = `<div class="form-info-edit">
                        <div class="form-info-edit-images"><p>El tamaño de la imagen debe ser de 240 x 240</p></div>
                        <div class="form-info-edit-data"></div>
                    </div>`,
        containerImages = formEditModal.find(".field--name-user-picture"),
        currentPass = formEditModal.find(".form-type-password"),
        emailUser = formEditModal.find(".form-type-email"),
        nameUser = formEditModal.find(".form-item-name"),
        passwordStrength = formEditModal.find(".password-strength");

      passwordStrength.prependTo(
        formEditModal.find(".form-type-password-confirm")
      );

      let newPass = formEditModal.find(".form-type-password-confirm"),
        currentProfession = formEditModal.find(
          ".form-item-profession-or-occupation-0-value"
        ),
        currentCompany = formEditModal.find(".form-item-company-0-value"),
        notifications = formEditModal.find(".form-item-notifications-value"),
        termConditions = formEditModal.find(
          ".form-item-terms-and-conditions-value"
        ),
        buttonClose = `<button type="button" class="btn-close-modal-edit" id="btnCloseModalEdit" data-bs-dismiss="modal">Close</button>`;

      formEditModal.prepend(baseHtml);
      containerImages.appendTo(formEditModal.find(".form-info-edit-images"));
      nameUser.appendTo(formEditModal.find(".form-info-edit-data"));
      emailUser.appendTo(formEditModal.find(".form-info-edit-data"));
      currentProfession.appendTo(formEditModal.find(".form-info-edit-data"));
      currentCompany.appendTo(formEditModal.find(".form-info-edit-data"));
      currentPass.appendTo(formEditModal.find(".form-info-edit-data"));
      newPass.appendTo(formEditModal.find(".form-info-edit-data"));
      notifications.appendTo(formEditModal.find(".form-info-edit-data"));
      termConditions.appendTo(formEditModal.find(".form-info-edit-data"));
      formEditModal.find(".form-actions").prepend(buttonClose);

      if (
        formEditModal.find(".form-info-edit-images .image-preview").length == 0
      ) {
        let imagesAvatar = `<div class="image-preview">
          <img src="/themes/custom/likinormas/dist/assets/images/icon-images-preview-avatar..svg" alt="images preview" class="img-fluid images-default-avatar">
        </div>`;

        formEditModal
          .find(".form-info-edit-images .form-managed-file")
          .prepend(imagesAvatar);
      }

      validteFromEditUser();
      stateMessageEditUser();
    }
  }
}

// Show message state edit user
function stateMessageEditUser() {
  if ($("body.user-profile #editUserModal .modal-body form.user-form").length) {
    if ($("#editUserModal form .form-item--error-message").length) {
      let blockMessage = $("#editUserModal form .form-item--error-message");
      let messageStateComment = blockMessage.text().trim();
      showDialog("Error al guardar", messageStateComment, "user-profile");

      blockMessage.remove();

      return;
    }

    if ($("body.user-profile .alert.alert-success").length) {
      let blockMessage = $("body.user-profile .alert.alert-success");
      let messageStateComment = blockMessage
        .text()
        .trim()
        .split("\n")[1]
        .trim();
      showDialog("Actualización", messageStateComment, "user-profile");

      blockMessage.remove();

      return;
    }
  }
}

// Add class for profile and validate form contact-now
function userProfileEvents() {
  if ($(".user-data-profile .profile-content").length) {
    $("body").addClass("user-profile");

    if ($("body.user-profile .modal-contact-now").length) {
      let modalContact = $(
        "body.user-profile .modal-contact-now .modal-content"
      );
      let btnClose = modalContact.find(".modal-footer button");
      btnClose.appendTo(modalContact.find(".modal-body .form-actions "));
      modalContact.find(".modal-footer").remove();

      // Validate form contact-now
      $("body.user-profile .modal-contact-now form").validate({
        rules: {
          your_name: {
            required: true,
            letterwithbasicpunc: true,
            minlength: 5,
            maxlength: 50,
          },
          your_email: {
            required: true,
            emailValidate: true,
          },
          user_message: {
            required: true,
            minlength: 10,
            maxlength: 800,
          },
        },
        // submitHandler: function(form) {
        //   if (grecaptcha.getResponse()) {
        //     $('body .r-captcha-error').remove();
        //     form.submit();
        //   } else {
        //     if(!$('body .r-captcha-error').length) {
        //       $('<span class="r-captcha-error" style="color:red;font-size: 1.4rem;text-align: center;width: 100%;display: block;">Error en captcha, este campo es requerido.</span>').insertAfter('.captcha');
        //     }
        //   }
        // }
      });
    }

    $("body").on("click", "#btnCloseModalEdit", function () {
      $('.ui-dialog.ui-corner-all[role="dialog"]').remove();
      $(".ui-widget-overlay.ui-front").remove();
    });
  }
}

// Validate form edit user
function validteFromEditUser() {
  if ($(".user-logged-in.path-user #editUserModal form.user-form").length) {
    $("#editUserModal .modal-body form.user-form").validate({
      rules: {
        name: {
          required: true,
          letterwithbasicpunc: true,
          minlength: 5,
          maxlength: 50,
        },
        mail: {
          required: true,
          emailValidate: true,
        },
        "profession_or_occupation[0][value]": {
          required: true,
          minlength: 3,
          maxlength: 100,
        },
        current_pass: {
          required: {
            depends: function (element) {
              return $('.password-field[name="pass[pass1]"]').val().length > 0;
            },
          },
          minlength: 12,
        },
        "pass[pass1]": {
          minlength: 12,
        },
        "pass[pass2]": {
          minlength: 12,
          equalTo: '.password-field[name="pass[pass1]"]',
        },
        "terms_and_conditions[value]": {
          required: true,
        },
      },
      messages: {
        name: {
          minlength: "Por favor ingrese al menos 5 caracteres",
          maxlength: "Solo se permiten 50 caracteres",
        },
        "profession_or_occupation[0][value]": {
          minlength: "Por favor ingrese al menos 5 caracteres",
          maxlength: "Solo se permiten 100 caracteres",
        },
        current_pass: {
          required: "Por favor ingresar la contraseña actual",
          minlength: "Por favor ingrese al menos 12 caracteres",
        },
        "pass[pass1]": {
          minlength: "Por favor ingrese al menos 12 caracteres",
        },
        "pass[pass2]": {
          minlength: "Por favor ingrese al menos 12 caracteres",
          equalTo: "Las contraseñas deben coincidir",
        },
      },
      errorPlacement: function (error, element) {
        if (element.attr("name") === "terms_and_conditions[value]") {
          error.insertAfter(element.parent());
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element)
          .parent(".form-item")
          .addClass("error-input")
          .removeClass("valid-input");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element)
          .parent(".form-item")
          .addClass("valid-input")
          .removeClass("error-input");
      },
      onkeyup: function (element) {
        if (
          !this.checkable(element) &&
          (element.name in this.submitted || !this.optional(element))
        ) {
          this.element(element); // triggers validation on the field
        }
      },
    });
  }
}

// Add avatar for fom-edit
function addAvatarImagesPreview() {
  if ($(".form-info-edit .form-info-edit-images .image-widget").length) {
    let contentImgPreview = $(
      ".form-info-edit .form-info-edit-images .image-widget"
    );

    if (contentImgPreview.find(".image-preview").length == 0) {
      const htmlPreviewAvatar = `<div class="image-preview">
                                  <img src="/themes/custom/likinormas/dist/assets/images/icon-images-preview-avatar..svg" alt="images preview" class="img-fluid images-default-avatar">
                                </div>`;

      contentImgPreview.prepend(htmlPreviewAvatar);
      let idFormUploadFile = contentImgPreview
        .find(".image-widget-data input.form-file")
        .attr("id");

      contentImgPreview
        .find(".image-preview")
        .append(
          `<label class="upload-images" for="${idFormUploadFile}"></label>`
        );

      $(".upload-images").trigger("click");
    }
  }
}

// Show menu
function eventMenuPrimary() {
  if (widthWindows > 1023) {
    $(
      ".user-logged-in header .region-nav-additional .navbar-nav > .nav-item > .nav-link"
    ).on("click", function (e) {
      e.preventDefault();
      $(".region-nav-additional .block-menu > .navbar-nav ul").slideToggle();
    });
  }
}

// Create menu mobile
function menuPrimaryMobile() {
  // Create menu for mobile
  if (widthWindows < 992) {
    menuMobileDesktop();

    let ham = new Hammer(document.querySelector("body .navbar-collapse"));
    ham.on("panright", function (event) {
      setTimeout(() => {
        $(".navbar-toggler").trigger("click");
      }, 500);
      setTimeout(() => {
        $("html").removeClass("overflow-hidden");
      }, 600);
    });
  } else {
    $("body").find(".block-logo-enel").remove();
  }

  function menuMobileDesktop() {
    const elementDoc = document.documentElement;
    const urlImagesFixed = $("header .field--name-fixed-logo-image img").attr(
      "src"
    );
    $("body").find(".block-logo-enel").remove();

    $(
      `<div class="block-logo-enel"><img src="${urlImagesFixed}" alt="fixed_logo" title="fixed_logo" loading="lazy" class="img-fluid"><button class="close-menu-mobile" id="closeMenuMobile"></button></div>`
    ).insertBefore("header .navbar-collapse .region-nav-main");

    if ($(".menu-item--expanded .menu-level-1").length) {
      $(".menu-item--expanded .menu-level-1").each(function () {
        let parentMenu = $(this).closest(".menu-item--expanded");
        $(this).appendTo(parentMenu);
      });

      $(".menu-item--expanded span, .menu-item--expanded a").on(
        "click",
        function () {
          $(this).toggleClass("show-subitem");
          $(this)
            .closest(".menu-item--expanded")
            .find(".menu-level-1")
            .slideToggle();
        }
      );
    }

    if ($("body.user-logged-in").length) {
      let blockProfilePicture = $(
        ".region-nav-additional .block-profile-picture-block"
      );
      let nameUser = $(
        ".region-nav-additional .menu--account > .navbar-nav > .nav-item > .nav-link"
      )
        .text()
        .trim();

      blockProfilePicture.append(`<p class="name-user-logged">${nameUser}</p>`);
      blockProfilePicture.append(
        `<button class="show-submenu" id="showMenuLogout"></button></div>`
      );
      $(".menu-mobile .region-nav-additional").addClass("opacity-0");

      $("body").on("click", "#showMenuLogout", function () {
        $(".region-nav-additional .nav.navbar-nav ul").toggleClass("show");
      });
    } else {
      let htmlIconLogin = `<li class="menu-item"><a href="/user/login" class="nav-link" data-drupal-link-system-path="user/login">Iniciar sesión</a><div class="menu_link_content menu-link-contentmain"> <div class="field field--name-icono field--type-image"> <img src="/themes/custom/likinormas/dist/assets/images/icon-profile..svg" alt="iniciar sesión" title="iniciar sesión" loading="lazy" class="img-fluid"></div></div></li>`;

      $(".navbar-collapse .region-nav-main .menu.menu-level-0").append(
        htmlIconLogin
      );
      $(".navbar-collapse .region-nav-additional").remove();
    }

    // Events show menu
    $(".navbar-toggler").on("click", function () {
      $(".menu-mobile").toggleClass("show");
      $(".menu-mobile .region-nav-additional").toggleClass("opacity-0");
      $("html").toggleClass("overflow-hidden");
    });

    // Event click menu
    $(".navbar .menu.menu-level-0 .menu-item a").on("click", function () {
      let dataLink = $(this).attr("href");
      if (dataLink.includes("/#")) {
        setTimeout(() => {
          $(".navbar-toggler").trigger("click");
        }, 500);
        setTimeout(() => {
          let scrollTop = jQuery(window).scrollTop();
          let headerH = jQuery("header").innerHeight();
          headerH += 50;
          window.scrollTo(0, scrollTop - headerH);
        }, 1100);
      }
    });

    $("body").on("click", "#closeMenuMobile", function () {
      setTimeout(() => {
        $(".navbar-toggler").trigger("click");
      }, 500);
    });

    elementDoc.style.setProperty("--height-windows", `${window.innerHeight}px`);
  }
}

// Height of windows for screen minor 992
function heightWindows() {
  const elementDoc = document.documentElement;

  // Resize windows height
  $(window).on("resize", function () {
    elementDoc.style.setProperty("--height-windows", `${window.innerHeight}px`);
  });
}

// Añadir clase a un table y estilo
function addClassToTable() {
  if (
    $(".page-node-type-rules-technical-specifications").length ||
    $(".page-node-type-rules-technical-rules").length
  ) {
    $(this).css("margin-bottom", "11vh");

    // Eliminar estilo de las tablas en contenido
    $("div > table").each(function () {
      let widtTable = $(this).parent().width();
      $(this).css("width", `${widtTable}px`);
      $(this).parent().removeAttr("style");
      $(this).wrap('<div class="table-responsive"></div>');
    });
  }
}

// Cambio de Ubicación de tabla 'contenido'
function moveToTableContainerDetails() {
  if (
    $(".page-node-type-rules-technical-specifications").length ||
    $(".page-node-type-rules-technical-rules").length
  ) {
    function moveAndCreateTableContainer(parentDeailt, cardDetails) {
      let titleContenido =
        '<h5 class="card-header text-white" style="background-color: #41B9E6; padding: 13px 20px; font-weight:bolder;">CONTENIDO</h5>';

      $(".info-details .headings").prependTo($("" + cardDetails + ""));
      $("" + parentDeailt + " .card").prepend(titleContenido);
      // $('.info-details .text-formatted p:first').remove();
      $(".headings li:first").remove();
    }

    if ($(".headings").length) {
      if ($(".page-node-type-rules-technical-specifications").length) {
        moveAndCreateTableContainer(
          ".technical-specification",
          ".technical-specification .card"
        );
        return;
      }

      if ($(".page-node-type-rules-technical-rules").length) {
        moveAndCreateTableContainer(
          ".technical-rules",
          ".technical-rules .card"
        );
        return;
      }
    }
  }
}

// Events pages interna indice
function eventsPagesIndice() {
  if ($(".view__indice").length) {
    $(".hero__indice h1").addClass("title-primary");

    if ($(".view__indice .pager").length == 0) {
      $(".view__indice").append(`<div class="no-pager"></div>`);
    }
  }
}

function openShowcaseImgModal() {
  let ctaImg = $(".technical-external-rule img");
  let showcaseModal = $("#showcase-modal");
  let closeModal = showcaseModal.find(".close");
  let srcTargetImg;
  let titleTargetImg;

  ctaImg.on("click", function (e) {
    srcTargetImg = e.target.getAttribute("src");
    titleTargetImg = e.target.getAttribute("title");
    showcaseModal.modal("show");
  });

  closeModal.on("click", function () {
    showcaseModal.modal("hide");
  });

  showcaseModal.on("show.bs.modal", function (e) {
    let showcaseImg = showcaseModal.find(".showcase-img");
    showcaseModal.modal("handleUpdate");
    showcaseImg.attr("src", srcTargetImg);
    showcaseImg.attr("title", titleTargetImg);
  });
}

// Function ancla details norma
function targeLinkContent() {
  if (
    $(".page-node-type-rules-technical-specifications").length ||
    $(".page-node-type-rules-technical-rules").length
  ) {
    window.addEventListener("hashchange", function () {
      setTimeout(() => {
        let scrollTop = jQuery(window).scrollTop();
        let headerH = jQuery("header .navbar").innerHeight();
        headerH += 100;
        window.scrollTo(0, scrollTop - headerH);
      }, 800);
    });
  }
}

// Function for create pagination of results
function paginationResults() {
  if (
    $("body.path-buscador").length ||
    $("body.path-normas").length ||
    $("body.path-especificaciones").length
  ) {
    let itemsSearchResult;
    let totalItems = 0;
    let itemPerPagination = 10;
    let maxItemsPagination = 3;

    if ($("body.path-buscador").length) {
      itemsSearchResult = jQuery(
        ".views-element-container .view-content .views-row"
      );

      totalItems = itemsSearchResult.length;

      totalItems > itemPerPagination &&
        $(
          '<nav class="pager" role="navigation" aria-labelledby="pagination-heading" aria-label="Paginación"><ul class="pagination js-pager__items"></ul></nav>'
        ).insertAfter(".views-element-container .view-content");
    }

    if (
      $("body.path-normas").length ||
      $("body.path-especificaciones").length
    ) {
      itemsSearchResult = jQuery(
        ".views-element-container .view-filters-list .views-row"
      );

      totalItems = itemsSearchResult.length;

      totalItems > itemPerPagination &&
        $(
          '<nav class="pager" role="navigation" aria-labelledby="pagination-heading" aria-label="Paginación"><ul class="pagination js-pager__items"></ul></nav>'
        ).insertAfter(".views-element-container .view-filters-list");
    }

    if (totalItems > itemPerPagination) {
      itemsSearchResult.slice(itemPerPagination).hide();
      let totalPages = Math.ceil(totalItems / itemPerPagination);

      for (let i = 1; i <= totalPages; i++) {
        // $('.pager .pagination').append(`<button class="btn-pagination-results" data-page="${i}">${i}</button>`);
        if (i == 1) {
          $(".pager .pagination").append(`
            <li class="page-item pager__item--previous" style="display:none;">
              <button class="page-link page-link-prev" title="Ir a la página siguiente">Anterior</button>
            </li>
            <li class="page-item is-active active">
              <button class="page-link" title="Ir a la página ${i}" data-page="${i}">${i}</button>
            </li>
          `);
        } else {
          // Si la i > 8 ocultar los demas botones
          if (i > maxItemsPagination) {
            $(".pager .pagination").append(`
              <li class="page-item" style="display:none;">
                <button class="page-link" title="Ir a la página ${i}" data-page="${i}">${i}</button>
              </li>
            `);
          } else {
            $(".pager .pagination").append(`
                <li class="page-item">
                  <button class="page-link" title="Ir a la página ${i}" data-page="${i}">${i}</button>
                </li>
              `);
          }
        }
      }

      if (totalPages > maxItemsPagination) {
        $(".pager .pagination").append(`
          <li class="page-item pager__item--next">
            <button class="page-link page-link-next" title="Ir a la página siguiente">Siguiente</button>
          </li>
        `);
      }

      $(".pager .pagination .page-link").on("click", function () {
        $("html, body").animate(
          {
            scrollTop: $("form").offset().top - 100,
          },
          300
        );

        let page = $(this).attr("data-page");
        if (page) {
          showPagination(page);
          $(this)
            .closest(".pager")
            .find(".page-item.is-active")
            .removeClass("is-active active");
          $(this).closest(".page-item").addClass("is-active active");

          // Hide button prev when page == 1
          if (page == 1) {
            $(".pager .pagination .page-item.pager__item--next").show();
            $(".pager .pagination .page-item.pager__item--previous").hide();
          }

          // Show button prev when page > 1
          if (page > 1) {
            $(".pager .pagination .page-item.pager__item--previous").show();
          }

          // Hide button next when page == totalPages
          if (page == totalPages) {
            $(".pager .pagination .page-item.pager__item--next").hide();
            $(".pager .pagination .page-item.pager__item--previous").show();
          }
        } else {
          let pageActive = $(".pager .pagination .page-item.is-active");

          if ($(this).hasClass("page-link-next")) {
            let page = pageActive.find(".page-link").attr("data-page");
            let pageNext = parseInt(page) + 1;
            $(".pager .pagination .page-item.pager__item--previous").show();

            if (pageNext > maxItemsPagination) {
              $(".pager .pagination .page-item").hide();
              $(".pager .pagination .page-item.pager__item--next").show();
              $(".pager .pagination .page-item.pager__item--previous").show();
              $(".pager .pagination .page-item.is-active").show();
              // Show the 6 pages prev
              $(".pager .pagination .page-item.is-active")
                .prevAll()
                .slice(0, maxItemsPagination - 2)
                .show();
            }

            if (pageNext <= totalPages) {
              showPagination(pageNext);
              pageActive.removeClass("is-active active");
              pageActive.next().addClass("is-active active").show();

              pageNext == totalPages &&
                $(".pager .pagination .page-item.pager__item--next").hide();
            }
          }

          if ($(this).hasClass("page-link-prev")) {
            let page = pageActive.find(".page-link").attr("data-page");
            let pagePrev = parseInt(page) - 1;

            // Show the 7 pages prev
            if (pagePrev >= 1) {
              // Show the 6 pages next
              if (pagePrev > maxItemsPagination - 2) {
                $(".pager .pagination .page-item").hide();
                $(".pager .pagination .page-item.pager__item--next").show();
                $(".pager .pagination .page-item.pager__item--previous").show();
                $(".pager .pagination .page-item.is-active").show();

                $(".pager .pagination .page-item.is-active")
                  .prevAll()
                  .slice(0, maxItemsPagination - 1)
                  .show();
              } else {
                $(".pager .pagination .page-item").hide();
                for (let i = 0; i <= maxItemsPagination - 1; i++) {
                  $(".pager .pagination .page-item")
                    .not(".pager__item--next, .pager__item--previous")
                    .eq(i)
                    .show();
                }
                $(".pager .pagination .page-item.pager__item--next").show();
                $(".pager .pagination .page-item.pager__item--previous").show();
              }

              showPagination(pagePrev);
              pageActive.removeClass("is-active active");
              pageActive.prev().addClass("is-active active").show();

              // Hide button prev when pagePrev == 1
              pagePrev == 1 &&
                $(".pager .pagination .page-item.pager__item--previous").hide();
            }
          }
        }
      });

      function showPagination(pageCurrent) {
        let startItem = (pageCurrent - 1) * itemPerPagination;
        let endItem = pageCurrent * itemPerPagination;

        itemsSearchResult.hide().slice(startItem, endItem).show();
      }
    }
  }
}

// Height of windows for screen minor 1024
function heightToolbarAdmin() {
  if ($("#toolbar-administration").length) {
    let menuToolbarAdmin = $("#toolbar-administration").innerHeight();
    let elementDoc = document.documentElement;

    elementDoc.style.setProperty(
      "--heigh-toolbar-administration",
      `${menuToolbarAdmin}px`
    );
  }
}

// Load windows
$(function () {
  // Text default pages search
  if ($(".path-buscador").length) {
    textSearchDefault = $(".hero .hero__info-title").text();
  }

  if (location.hash) {
    removeLoader();
  }

  // if ($(".user-profile.user-logged-in.path-user .modal-contact-now").length) {
  //   $(".user-profile.user-logged-in.path-user .modal-contact-now")
  //     .nextAll(".dialog")
  //     .first()
  //     .hide();
  // }
  document
    .querySelectorAll(
      ".user-profile.user-logged-in.path-user .modal-contact-now"
    )
    .forEach((element) => {
      let nextElement = element.nextElementSibling;
      while (nextElement) {
        if (nextElement.matches(".dialog")) {
          nextElement.style.display = "none";
          document.querySelector("body").classList.add("no-show-second-modal");
          break;
        }
        nextElement = nextElement.nextElementSibling;
      }
    });

  heightToolbarAdmin();
  scrollPages();
  moveFormSearchHome();
  addClassForSwiperSliderHome();
  heightCardMobileHome();
  addAosHome();
  eventsFormFilterList();
  eventFormSearchNorma();
  addBackgroundColorHeroAndFilter();
  addIconShowPass();
  showErrorForm();
  userProfileEvents();
  showButtonGoToTop();
  goToUp();

  jQuery(".view-filters .views-exposed-form .form-actions input").on(
    "click",
    function (e) {
      $(".views-element-container").addClass("showFilters");
    }
  );

  jQuery(
    "body.path-buscador .block-form-filter-list .form-filter-list .form-actions input"
  ).on("click", function (e) {
    $(".views-element-container").addClass("showFilters");
  });

  $(document).ajaxError(function (event, jqXHR, settings, throwError) {
    if (
      $(".user-logged-in .list-specifications-comments form").length ||
      $(".user-logged-in .list-technical-comments form").length
    ) {
      if (jqXHR.readyState == 4 && jqXHR.status == 500) {
        location.reload();
      }
    }
  });

  $(document).ajaxStart(function () {
    if ($(".comment-item").length) {
      $("form.comment-form .form-actions input").each(function () {
        $(this).prop("disabled", true);
      });
    }
  });

  $(document).ajaxComplete(function () {
    // Remove paginationResults;
    if (
      ($("body.path-buscador").length ||
        $("body.path-normas").length ||
        $("body.path-especificaciones").length) &&
      booleanFilterForShowPagination
    ) {
      $(".views-element-container .pager").remove();
    }

    if (
      $(
        '.block-form-filter-list .form-filter-list select[name="rule_subcategory_target_id"]'
      )
        .next()
        .hasClass("select2")
    ) {
      $(
        '.block-form-filter-list .form-filter-list select[name="rule_subcategory_target_id"]'
      )
        .next()
        .remove();
    }

    if (
      $(
        '.block-form-filter-list .form-filter-list select[name="specification_subcategory_target_id"]'
      )
        .next()
        .hasClass("select2")
    ) {
      $(
        '.block-form-filter-list .form-filter-list select[name="specification_subcategory_target_id"]'
      )
        .next()
        .remove();
    }

    jQuery(".view-filters .views-exposed-form .form-actions input").on(
      "click",
      function (e) {
        $(".views-element-container").addClass("showFilters");
      }
    );
    jQuery(
      "body.path-buscador .block-form-filter-list .form-filter-list .form-actions input"
    ).on("click", function (e) {
      $(".views-element-container").addClass("showFilters");
    });

    if ($(".user-logged-in .comments")) {
      if ($(".js-ajax-comments-messages")) {
        if ($(".comments .js-ajax-comments-messages.alert-error").length) {
          showDialog(
            "Error",
            "El campo de texto no puede dejarse en blanco. Por favor, asegurate de no dejarlo en blanco.",
            "comments"
          );

          $(".comments .js-ajax-comments-messages.alert-error").remove();
        } else if ($(".comments .js-ajax-comments-messages").length) {
          let messageStateComment = $(".js-ajax-comments-messages")
            .text()
            .trim()
            .split("\n")[1]
            .trim();
          showDialog("Estado del comentario", messageStateComment, "comments");

          $(".js-ajax-comments-messages").remove();
        }
      }

      eventComments();
      eventCommentsAdmin();

      // return;
    }

    if (
      $("body.path-normas").length ||
      $("body.path-especificaciones").length ||
      $("body .hero__indice").length
    ) {
      eventsFormFilterList();
      eventFormSearchNorma();
      // showFilterListNormas();

      if (widthWindows < 992) {
        if (filterForAlphabetic) {
          $("html").css("overflow", "hidden");
          $("body").addClass("show-filter-mobile");
          $(".views-element-container .view-filters").show("slow");
        }
      }
    } else if (
      $(".user-logged-in .list-specifications-comments form").length ||
      $(".user-logged-in .list-technical-comments form").length
    ) {
      eventsFormFilterList();
      eventFormSearchNorma();
      // showFilterListNormas();
      eventCommentsAdmin();

      if (widthWindows < 992) {
        if (filterForAlphabetic) {
          $("html").css("overflow", "hidden");
          $("body").addClass("show-filter-mobile");
          $(".views-element-container .view-filters").show("slow");
        }
      }

      if ($(".js-ajax-comments-messages.alert-error").length) {
        showDialog(
          "Error",
          "El campo de texto no puede dejarse en blanco. Por favor, asegurate de no dejarlo en blanco.",
          "list-comments"
        );

        $(".js-ajax-comments-messages.alert-error").remove();
      }

      // return;
    }

    // Form search global
    if ($(".path-buscador").length) {
      eventsFormFilterList();
      eventFormSearchNorma();

      if (widthWindows < 992) {
        $("html").removeAttr("style");
        $("body").removeClass("show-filter-mobile");
        $(".path-buscador .views-exposed-form").hide("slow");
        filterForAlphabetic = false;
      }
    }

    // Call function add avatar preview form edit-user
    if ($(".form-info-edit .form-info-edit-images .image-widget").length) {
      addAvatarImagesPreview();
    }

    // Create pagination of results
    if (booleanFilterForShowPagination) {
      paginationResults();
    }

    // Hacer un click en el button de la pagina actual
    if (
      ($("body.path-buscador").length ||
        $("body.path-normas").length ||
        $("body.path-especificaciones").length) &&
      booleanFilterForShowPagination
    ) {
      $(".pager .pagination .page-item.is-active .page-link").trigger("click");
      booleanFilterForShowPagination = false;
    }
  });

  $(document).on("ajaxStop", function () {
    jQuery(".header-filter-results .filters-show .tag").remove();
    jQuery(".header-filter-results .filters-show").removeClass("active");

    if ($(".views-element-container").hasClass("showFilters")) {
      showFilterListNormas();
      eventFormSearchNorma();

      setTimeout(() => {
        $(".views-element-container").removeClass("showFilters");
      }, 2000);
    }

    eventComments();
  });
});

$(window).on("load", function (e) {
  setTimeout(() => {
    menuPrimaryMobile();
    heightWindows();
    eventsFormContact();
    showModalAlertComments();
    eventShowAndHiddenPass();
    showModalNewPass();
    eventsModal();
    moveFormLoginRegisterReset();
    validateFormLoginRegisterReset();
    eventCommentsAdmin();
    eventComments();
    moveFormEditUser();
    eventMenuPrimary();
    addClassToTable();
    moveToTableContainerDetails();
    eventsPagesIndice();
    paginationResults();
    removeLoader();
  }, 800);
  openShowcaseImgModal();
  targeLinkContent();

  console.log("Init AOS")
  AOS.init({
    delay: 100,
  });
});
