<template lang="pug">

    v-list( dense )
        v-list-item(v-for="item in listItems" :key="item.title")
            v-list-item-avatar
            v-list-item-content {{item.title}}
            v-list-tile-action

</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "settingList",
  data() {
    return {
      listItems: [
        {
          icon: "",
          title: "ダークモード",
          action: ""
        },
        {
          icon: "",
          title: "テーマカラー",
          action: ""
        }
      ]
    };
  }
});
</script>

<style scoped></style>
