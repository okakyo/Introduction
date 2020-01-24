<template lang="pug">
    v-app#inspire(app)
        nav-list
        toolbar-header
        v-content
            v-container
                router-view

</template>

<script lang="ts">
import Vue from "vue";
import toolbarHeader from "@/components/organisms/util/toolbarHeader.vue";
import navList from "@/components/organisms/util/navigate.vue";
export default Vue.extend({
  name: "App",

  components: {
    toolbarHeader,
    navList
  },

  data: () => ({
    //
  })
});
</script>
