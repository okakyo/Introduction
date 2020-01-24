<template lang="pug">
    v-layout.justify-center
        v-col(lg="4" md="6" sm="8" xs="10")
            v-card
                p こんにちは
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
