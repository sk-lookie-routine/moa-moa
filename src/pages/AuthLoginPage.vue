<template>
  <auth-header></auth-header>
  <auth-login-form></auth-login-form>
</template>

<script>
import AuthHeader from "../components/header/AuthHeader.vue";
import AuthLoginForm from "../components/auth/AuthLogin.vue";
export default {
  components: {
    AuthHeader,
    AuthLoginForm,
  },
};
</script>

<style>
</style>