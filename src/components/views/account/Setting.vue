<template lang="pug">
    card-grid
        template(v-slot:grid-content)
            base-card(cardTitle="設定")
                template(v-slot:card-content)
                    setting-list
                    v-list.px-8.ma-3
                      v-btn(@click="removeAccount" color="error" depressed rounded width="100%") アカウントを削除

</template>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase";

import cardGrid from "@/components/organisms/grid/cardGrid.vue";
import settingList from "@/components/organisms/list/settingList.vue";
import baseCard from "@/components/template/card/baseCard.vue";
export default Vue.extend({
  name: "Setting",
  components: {
    cardGrid,
    settingList,
    baseCard
  },
  data() {
    return [
      {
        icon: "",
        title: "ダークモード",
        action: ""
      },
      {
        icon: "",
        title: "テーマカラー",
        action: ""
      },
      {
        icon: "",
        title: "",
        action: ""
      }
    ];
  },
  methods: {
    removeAccounts() {
      return;
    }
  }
});
</script>

<style scoped></style>
