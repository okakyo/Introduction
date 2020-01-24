<template lang="pug">
    card-grid
        template(v-slot:grid-content)
            sign-in-card(cardTitle="ログイン画面")
                template(v-slot:card-content)
                    sign-in-form

</template>

<script lang="ts">
import Vue from "vue";
import cardGrid from "@/components/organisms/grid/cardGrid.vue";
import signInCard from "@/components/template/card/baseCard.vue";
import signInForm from "@/components/template/form/auth.vue";

export default Vue.extend({
  name: "Signin",
  components: {
    cardGrid,
    signInCard,
    signInForm
  }
});
</script>

<style scoped></style>
