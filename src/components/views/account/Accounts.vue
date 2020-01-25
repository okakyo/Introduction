<template lang="pug">
      base-grid
        template(v-slot:left-grid-content)
            h2 アカウント
            p こんお
        template(v-slot:right-grid-content)
            
    
</template>

<script lang="ts">
import Vue from "vue";
import baseGrid from "@/components/organisms/grid/baseGrid.vue";
import baseCard from "@/components/template/card/baseCard.vue";
export default Vue.extend({
  name: "Accounts",
  components: {
    baseGrid,
    baseCard
  }
});
</script>

<style scoped></style>
