(function ($, Drupal, once) {
  Drupal.behaviors.cdiGenerateCkeditor5 = {
    attach: function (context, settings) {
      once('cdiGenerateCkeditor5', '#document-content', context).forEach(function (element) {
        $(":header").removeAttr('id')

        var toc = "";
        var level = 0;
        var ids = []

        document.getElementById("document-content").innerHTML.replace(/<h([\d]).*?>([\s\S]*?)<\/h([\d])>/g,
        function (str, openLevel, titleText, closeLevel) {

            if (openLevel != closeLevel) {
              return str;
            }

            if (openLevel > level) {
              toc += (new Array(openLevel - level + 1)).join("<ul>");
            }
            else if (openLevel < level) {
              toc += (new Array(level - openLevel + 1)).join("</ul>");
            }

            level = parseInt(openLevel);
            titleText = titleText.replace(/<[^>]*>/g, '').trim();
            var anchor = titleText.replace(/\s+/g, '').toLowerCase();
            ids.push(anchor);

          var txt = document.createElement("textarea");
          txt.innerHTML = anchor;
          var tmpId = txt.value.replace(/\u00A0/g, "");

            toc += "<li class=\"indexitem\"><a class=\"head_h2\" href=\"#" + tmpId + "\">" + titleText
              + "</a></li>";

            return "<h" + openLevel + "><a id=\"" + tmpId + "\">"
              + titleText + "</a></h" + closeLevel + ">";
          }
        );

        document.getElementById("document-content").querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(
          function (header) {
            titleText = header.innerHTML.replace(/<[^>]*>/g, '').trim();
            inner = titleText.replace(/\s+/g, "").toLowerCase();
            ids.forEach(function(id){
              if(inner == id){

                var txt = document.createElement("textarea");
                txt.innerHTML = id;
                var tmpId = txt.value.replace(/\u00A0/g, "");
                header.setAttribute('id', tmpId);
              }
            })
          }
        )

        if (level) {
          toc += (new Array(level + 1)).join("</ul>");
        }

        document.getElementById("toc").innerHTML += toc;
      });
    }
  };
})(jQuery, Drupal, once);
