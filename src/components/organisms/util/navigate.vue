<template lang="pug">
    v-navigation-drawer(v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app)
      v-list-item
        v-list-item-content
          v-list-item-title dorarora
          v-list-item-subtitle @fagat
      v-divider
      v-list(dense nav)
        v-list-item(v-for="nav in navList" :key="nav.title" :to="nav.url")
            v-list-item-avatar
                v-icon {{nav.icon}}
            v-list-item-content
                v-list-item-title {{nav.title}}

</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "navigation",
  props: {
    drawer: Boolean
  },
  data() {
    return {
      navList: [
        {
          icon: "mdi-account",
          title: "アカウント",
          url: "/account"
        },
        {
          icon: "mdi-heart",
          title: "お気に入り",
          url: "/likes"
        },
        {
          icon: "mdi-settings",
          title: "設定",
          url: "/setting"
        }
      ]
    };
  }
});
</script>

<style scoped></style>
