<template lang="pug">
    v-container
        v-layout(row wrap)
            v-flex(xs12 sm8 lg9 xl10)
                slot(name="left-grid-content")
            v-divider(vertical)
            v-flex(xs12 sm4 lg3 xl2)
                slot(name="right-grid-content")
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "baseGrid"
});
</script>

<style scoped></style>
