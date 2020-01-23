<template lang="pug">
    v-container

</template>

<script lang="ts">
import Vue from "vue";
import cardGrid from "@/components/organisms/grid/cardGrid.vue";
import signInCard from "@/components/template/card/signinCard.vue";
export default Vue.extend({
  name: "Signin",
  components: {
    cardGrid,
    signInCard
  }
});
</script>

<style scoped></style>
