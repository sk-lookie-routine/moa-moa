<template>
  <header>
    <router-link to="/login"><img src="../../assets/logo.svg" class="icon" /></router-link>
    <router-link to="/login" class="text">MOAMOA</router-link>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  height: 70px;
  display: flex;
  align-items: center;
  padding:0 40px;
}
.icon {
  width: 42px;
  height: 42px;
}
.text {
  font-family: "Krona One", sans-serif;
  color: #4e4e4e;
  padding: 0 10px;
  display: flex;
  text-decoration: none;
}
</style>