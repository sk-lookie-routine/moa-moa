<template>
  <header>
    <router-link to="/"><img src="../../assets/logo.svg" class="icon" /></router-link>
    <router-link to="/" class="text">MOAMOA</router-link>
    <!-- <div class="menu_icon"><img src="../../assets/menu_icon.svg" /></div> -->
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  height: 7rem;
  display: flex;
  align-items: center;
  padding:0 4rem;
}
.icon {
  width: 4.2rem;
  height: 4.2rem;
}
.text {
  font-family: "Krona One", sans-serif;
  color: #4e4e4e;
  padding: 0 1rem;
  display: flex;
  text-decoration: none;
  font-size:1.6rem;
}
/* .menu_icon{
  display: none;
} */
</style>