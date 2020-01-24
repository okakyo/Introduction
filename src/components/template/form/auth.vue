<template lang="pug">
    v-form.pa-8
        v-text-field(label="email" type="email" required)
        v-text-field(label="password" type="password"  required)
        v-btn(outliuned block color="success" depressed) ログイン
        v-divider.my-5
        v-btn(outlined block).my-5 GitHub
        v-btn(outlined block).my-5 Google
    
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "auth"
});
</script>

<style scoped></style>
