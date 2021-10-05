<template>
  <auth-header></auth-header>
  <auth-login-form></auth-login-form>
</template>

<script>
import AuthLoginForm from "../components/auth/AuthLoginForm.vue";
import AuthHeader from "../components/nav/AuthHeader.vue";
export default {
  components: {
    AuthLoginForm,
    AuthHeader,
  },
};
</script>

<style>
</style>