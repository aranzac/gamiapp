
  <script type="text/javascript" src="../dist/js/h5p-standalone-main.js"></script>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
</script>


<template>
  <div class="hello">
    Hellooo {{who}}
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
  mounted: function() {
    (function($) {
      $(function() {
        $(".h5p-container").h5p({
          frameJs: "../dist/js/h5p-standalone-frame.min.js",
          frameCss: "../dist/styles/h5p.css",
          h5pContent: "../workspace/hervir",
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
