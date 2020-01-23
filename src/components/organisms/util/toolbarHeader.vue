<template lang="pug">
    v-app-bar(app dark color="primary")
        v-app-bar-nav-icon(style="border:none;")
        v-toolbar-title(color="primary")
            v-btn(color="primary" to="/") Top
        v-spacer
        v-toolbar-title()
            v-btn(color="primary" to="/about") Sign in
    
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "toolbarHeader"
});
</script>

<style scoped></style>
