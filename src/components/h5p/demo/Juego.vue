<template>
  <div class="hello">
    Juego 1. {{who}}
    <div class="h5p-container"></div>

    <b-button variant="warning" class="text-light" @click="myfuncion()">
      <b>Ver</b>
    </b-button>
  </div>
</template>
 


<script>
module.exports = {
  data: function() {
    return {
      who: "world!"
    };
  },
  mounted() {
    // Se proporciona la librería necesaria para que encuentre la var H5P.jQuery

    let src = document.createElement("script");
    src.setAttribute("src", "/h5p/dist/js/h5p-standalone-main.min.js");
    document.head.appendChild(src);

    (function($) {
      $(function() {
        $(".h5p-container").h5p({
          id: 1, // OPTIONAL id change this if using multiple h5ps on the same page
          frameJs: "/h5p/dist/js/h5p-standalone-frame.min.js", // OPTIONAL if you move the location of h5p-standalone-frame.min.js
          frameCss: "/h5p/dist/styles/h5p.css", // OPTIONAL if you move the location of h5p.css
          h5pContent: "/h5p/workspace/example", // Location of the unpacked H5P content,
          displayOptions: {
            // OPTIONAL hide the frame or download, export etc. buttons they are visible by default
            frame: true,
            copyright: true,
            embed: false,
            download: false,
            icon: true,
            export: false
          }
        });
      });
    })(H5P.jQuery);

    $(document).ready(function() {
      $('[data-toggle="popover"]').popover();
    });
  },
  methods: {
    myfuncion() {
      var iframe = document.querySelector("#h5p-iframe-1");
      var iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;

      if (!iframeDocument) {
        throw "iframe couldn't be found in DOM.";
      }

      var iframeContent = iframeDocument.querySelector(
        ".h5p-joubelui-score-number"
      );

      console.log(iframeContent.textContent);
    }
  }
};
</script>
 
<style>
.hello {
  background-color: #ffe;
}
</style>
