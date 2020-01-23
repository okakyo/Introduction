<template lang="pug">
    v-container
        v-layout(row wrap)
            v-flex(xs12 md4 lg3)
                slot(name="left-grid-content")
            v-flex(xs12 md8 lg9)
                slot(name="right-grid-content")
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "baseGrid"
});
</script>

<style scoped></style>
