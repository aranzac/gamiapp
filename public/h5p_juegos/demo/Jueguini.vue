<template>
  <div>
    <h1>Juego 1. Nivel 2</h1>
    <div class="text-right">
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
    <button v-on:click="myFunction()">Enviar</button>
  </div>
</template>

<script>
$(function() {
  $(".h5p-container").h5p({
    frameJs: "../dist/js/h5p-standalone-frame.min.js",
    frameCss: "../dist/styles/h5p.css",
    h5pContent: "../workspace/hervir",
    displayOptions: {
      frame: true,
      copyright: true,
      embed: false,
      download: false,
      icon: true,
      export: false
    }
  });
});
export default {
  created() {
    $(document).ready(function() {
      $('[data-toggle="popover"]').popover();
    });
  },
  methods: {
    myFunction() {
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
  },
  mounted() {
    let recaptchaLink = document.createElement("link");
    recaptchaLink.setAttribute("type", "text/css ");
    recaptchaLink.setAttribute("media", "all");
    recaptchaLink.setAttribute("href", "../dist/styles/h5p.css");
    document.head.appendChild(recaptchaLink);

    let recaptchaLink2 = document.createElement("script");
    recaptchaLink2.setAttribute("type", "text/javascript");
    recaptchaLink2.setAttribute("src", "../dist/js/h5p-standalone-main.min.js");
    document.head.appendChild(recaptchaLink2);

    let recaptchaLink3 = document.createElement("script");
    recaptchaLink3.setAttribute("rel", "stylesheet");
    recaptchaLink3.setAttribute(
      "href",
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    );
    recaptchaLink3.setAttribute(
      "integrity",
      "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    );
    recaptchaLink3.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(recaptchaLink3);

    let recaptchaLink4 = document.createElement("script");
    recaptchaLink4.setAttribute(
      "src",
      "https://code.jquery.com/jquery-3.2.1.slim.min.js"
    );
    recaptchaLink4.setAttribute("crossorigin", "anonymous");
    recaptchaLink4.setAttribute(
      "integrity",
      "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    );
    document.head.appendChild(recaptchaLink4);

    let recaptchaLink5 = document.createElement("script");
    recaptchaLink5.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    );
    recaptchaLink5.setAttribute("crossorigin", "anonymous");
    recaptchaLink5.setAttribute(
      "integrity",
      "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    );
    document.head.appendChild(recaptchaLink5);

    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    );
    recaptchaScript.setAttribute(
      "integrity",
      "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    );
    recaptchaScript.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(recaptchaScript);

    // let recaptchaScript2 = document.createElement("script");
    // recaptchaScript.setAttribute("type", "text/javascript");
    // recaptchaScript2.innerHTML();
    // recaptchaScript2.setAttribute("crossorigin", "anonymous");
    // document.head.appendChild(recaptchaScript2);
  }
};
</script>
