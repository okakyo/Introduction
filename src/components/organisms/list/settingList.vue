<template lang="pug">

    v-list( dense )
      .list-items(v-for="item in listItems" :key="item.title")
        v-list-item
            v-list-item-content {{item.title}}
            v-switch
        v-divider

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
