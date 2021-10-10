<template>
  <auth-header></auth-header>
  <auth-signup-form></auth-signup-form>
</template>

<script>
import AuthHeader from "../components/header/AuthHeader.vue";
import AuthSignup from "../components/auth/AuthSignup.vue";
export default {
  components: {
    AuthHeader,
    AuthSignup,
  },
};
</script>

<style>
</style>