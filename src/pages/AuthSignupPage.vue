<template>
  <auth-header></auth-header>
  <auth-signup-form></auth-signup-form>
</template>

<script>
import AuthHeader from "../components/nav/AuthHeader.vue";
import AuthSignupForm from "../components/auth/AuthSignupForm.vue";
export default {
  components: {
    AuthHeader,
    AuthSignupForm,
  },
};
</script>

<style>
</style>