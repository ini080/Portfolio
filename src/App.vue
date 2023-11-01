<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view
        @onLogin="changeRoute('Home')"
        @onLogout="changeRoute('Lock')">
      </router-view>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'app',
  methods: {
    changeRoute (routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>


<style>

* {
  scroll-behavior: smooth;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

html, body {
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
