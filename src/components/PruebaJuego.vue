<template>
  <div>
    <h1>Juego 1. Nivel 2</h1>
    <div class="text-right">
      <!-- <button type="button" class="btn  btn-md btn-warning text-light " data-toggle="popover" title="Popover title"
      data-content="And here's some amazing content. It's very engaging. Right?">Pensamiento computacional?</button>-->
      <button
        type="button"
        class="btn btn-md btn-warning text-light"
        data-toggle="popover"
        data-placement="left"
        title="Popover Header"
        data-content="Algoritmos"
      >
        Pensamiento
        computacional?
      </button>
    </div>
    <div class="h5p-container"></div>
  </div>
</template>


<script>
// var __oldJQuery = jQuery;
// jQuery = H5P.jQuery;

// (function($) {
//   $(function() {
//     $(".h5p-container").h5p({
//       frameJs: "../dist/js/h5p-standalone-frame.min.js",
//       frameCss: "../dist/styles/h5p.css",
//       h5pContent: "../workspace/hervir",
//       displayOptions: {
//         // OPTIONAL hide the frame or download, export etc. buttons they are visible by default
//         frame: true,
//         copyright: true,
//         embed: false,
//         download: false,
//         icon: true,
//         export: false
//       }
//     });
//   });
// })(H5P.jQuery);

export default {};
$(document).ready(function() {
  $('[data-toggle="popover"]').popover();
});

// function myFunction() {
//   var iframe = document.querySelector("#h5p-iframe-1");
//   var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

//   if (!iframeDocument) {
//     throw "iframe couldn't be found in DOM.";
//   }

//   var iframeContent = iframeDocument.querySelector(
//     ".h5p-joubelui-score-number"
//   );

//   console.log(iframeContent.textContent);
// }
</script>




<style>
.oscuro {
  color: rgba(255, 255, 255, 0.2);
}

.container {
  margin: 0 !important;
  padding: 0 !important;
  max-width: 100% !important;
}

@media (min-width: 1200px) {
  .container {
    max-width: 100% !important;
  }
}

.navbar {
  width: 100% !important;
}

nav {
  width: 100% !important;
}

.logo {
  font-family: "Pacifico";
}

.center {
  text-align: center;
}

#logo {
  margin-left: 12px;
  margin-right: 12px;
  font-size: 35px;
  color: white !important;
}

h2,
th,
.btn {
  font-family: Quicksand;
  font-weight: bold;
}
</style>