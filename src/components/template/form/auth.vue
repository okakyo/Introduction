<template lang="pug">
    v-form
        v-text-field(label="email" type="email" required)
        v-text-field(label="password" type="password"  required)
        v-btn(outliuned block color="success" depressed) ログイン
        v-divider.my-5
        v-btn(outlined block) GitHub
        v-btn(outlined block) Google
    
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "auth"
});
</script>

<style scoped></style>
