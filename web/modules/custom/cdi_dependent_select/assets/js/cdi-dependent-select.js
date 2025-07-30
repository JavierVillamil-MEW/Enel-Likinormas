(function ($, Drupal, once) {

  Drupal.behaviors.cdiDependtSelect = {
    attach: function (context, settings) {
      once('cdiDependtSelect', '[name="rule_category_target_id"]', context).forEach(function (element) {
        getSubcategories('rule_category_target_id', 'rules_subcategories');
      });
      once('cdiDependtSelect', '[name="specification_category_target_id"]', context).forEach(function (element) {
        getSubcategories('specification_category_target_id', 'specifications_subcategories');
      });
    },
  };

  function getSubcategories(name, uri) {
    let validate = true;
    $("[name='" + name + "']").change(function (event) {
      event.preventDefault();
      let selectedCategory = $(this).find(":selected").val();
      let endpoint = Drupal.url('cdi-dependent-select/' + uri + '/' + selectedCategory + '/null');
      Drupal.ajax({ url: endpoint }).execute();
      validate = false;
    });
    if (validate) {
      let selectedSCategories ="";
      if(uri === "rules_subcategories"){
        selectedSCategories = $('[name=\'rule_subcategory_target_id\']').find(':selected').val();
      } else {
        selectedSCategories = $('[name=\'specification_subcategory_target_id\']').find(':selected').val();
      }
      let selectedCategory = $("[name='" + name + "']").find(":selected").val();
      let endpoint = Drupal.url('cdi-dependent-select/' + uri + '/' + selectedCategory + '/' + selectedSCategories);
      Drupal.ajax({ url: endpoint }).execute();
    }
  }
})(jQuery, Drupal, once);
