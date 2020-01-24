<template lang="pug">
    .toolbar-header
        v-app-bar(app dark color="primary" :clipped-left="$vuetify.breakpoint.lgAndUp")
            v-app-bar-nav-icon(v-model="drawer"  @click.stop="drawer = !drawer" depressed)
            v-toolbar-title(color="primary")
                v-btn(color="primary" to="/" depressed ) Top
            v-spacer
            v-toolbar-title
                v-btn(color="primary" to="/signin" depressed ) Sign in


    
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "toolbarHeader",
  components: {},
  data() {
    return {
      drawer: true
    };
  }
});
</script>

<style scoped></style>
