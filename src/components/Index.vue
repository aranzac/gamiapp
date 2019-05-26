<template>
  <div>
    <div class="div-centrado"></div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      title: "Inicio"
    };
  },
  head() {
    return {
      title: this.title
    };
  },
  components: {}
};
</script>
<style>
div-centrado {
  margin: auto;
  width: 100px;
  height: 100px;
}
</style>