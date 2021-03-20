<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    Login,
  },
};
</script>
<style lang="sass">
.home
  background: url("../assets/bg-login.jpg")
  background-position: center
  background-size: cover
  min-height: 100vh
</style>
