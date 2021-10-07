<template>
  <auth-header></auth-header>
  <auth-login-form></auth-login-form>
</template>

<script>
import AuthHeader from "../components/nav/AuthHeader.vue";
import AuthLoginForm from "../components/auth/AuthLoginForm.vue";
export default {
  components: {
    AuthHeader,
    AuthLoginForm,
  },
};
</script>

<style>
</style>