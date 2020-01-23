<template lang="pug">
    base-grid
        template(v-slot:left-grid-content)
            p HEllo World
        template(v-slot:right-grid-content)
            h3 こん
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
