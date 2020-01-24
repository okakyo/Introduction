<template lang="pug">
    v-card
        v-toolbar(flat)
            v-spacer
            v-toolbar-title {{cardTitle}}
            v-spacer
        v-divider
        v-card-text
            slot(name="card-content")


</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "signinCard",
  props: ["cardTitle"]
});
</script>

<style scoped></style>
