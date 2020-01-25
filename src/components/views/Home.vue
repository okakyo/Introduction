<template lang="pug">
  base-grid
    template(v-slot:grid-content)
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import baseGrid from "@/components/organisms/grid/baseGrid.vue";
export default Vue.extend({
  name: "home",
  components: {
    baseGrid
  }
});
</script>
