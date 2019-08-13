<template>
<div class="wrapper">
  <div>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="bounce">
      <p v-if="show">hello</p>
    </transition>
  </div>
  <div class="Page1">
    <div class="time">
      <h1>20:30</h1>
    </div>
    <div @click="urlgo()">ggg</div>
    <div class="date">
      <h1>2016/4/9</h1>
    </div>
  </div>
  <div class="Page2">
    <div class="userLogo"><img src="../assets/logo.png" /></div>
    <div class="userName">
      <h1>JeongGeon Heo</h1>
    </div>
    <div class="userEmail">
      <h3>ini080@naver.com</h3>
    </div>
    <input class="passwordInput" type="password" />
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      show: true,
    };
  },
  mounted() {},
  methods: {
    urlgo() {
      const Page1 = document.querySelector('.Page1');
      Page1.style.top = '-200vh'
    },


  }
}
</script>

<style >

@import url(https://fonts.googleapis.com/css?family=Open+Sans);

* {
  padding: 0;
  margin: 0;
}

html {
  font-family: Open Sans;
  overflow: hidden;
}


.Page1 {
  z-index: 2;
  position: relative;
  background: url('http://betanews.com/wp-content/uploads/2015/09/Windows-10-lock-screen.jpg') center;
  background-size: 100vw 100vh;

  width: 100vw;
  height: 100vh;


  & h1 {
    position: relative;
    color: #FFF;
    font-size: 5em;
    font-family: Open Sans;
    top: 65vh;
  }

}



.Page2 {
  z-index: 1;
  position: relative;
  background: url('http://i1-news.softpedia-static.com/images/news2/adobe-after-effects-master-creates-downloadable-version-of-windows-10-wallpaper-485537-2.jpg') no-repeat;

  background-size: 100vw 100vh;



  width: 100vw;
  height: 100vh;

  top: -100vh;
}

.userLogo {
  width: 15em;
  height: 15em;
  position: relative;
  margin: 0em auto;
  display: block;

  & img {
    width: 15em;
    height: 15em;
    border-radius: 10em;
  }
}


.userName {
  text-align: center;
  color: #FFF;
  margin: 1em 0em 1em 0em;
}


.userEmail {
  text-align: center;
  color: #FFF;
  margin: 1em 0em 1em 0em;
}

.passwordInput {
  position: relative;
  margin: 0 auto;
  display: block;
  font-size: 2em;
  width: 10em;
  outline: none;
  border: rgba(204, 204, 204, 0.7) solid;

}
bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
</style>
