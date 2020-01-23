<template lang="pug">
    v-app
        toolbar-header
        v-content(style="background-color:#f6f6f6")
            v-container
                router-view

</template>

<script lang="ts">
import Vue from "vue";
import toolbarHeader from "@/components/organisms/util/toolbarHeader.vue";
export default Vue.extend({
  name: "App",

  components: {
    toolbarHeader
  },

  data: () => ({
    //
  })
});
</script>
