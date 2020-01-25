<template lang="pug">
    .mt-5
        v-layout(justify-center)
            v-flex(xs12 sm9 md6 lg5)
                slot(name="grid-content")

</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "cardGrid"
});
</script>

<style scoped></style>
