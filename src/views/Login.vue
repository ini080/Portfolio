<template>
<div class="wrapper">

  <div class="LockPage">
    <div class="time_area">
      {{ap}} {{ time }}
    </div>
    <div class="date_area">
      {{ date }}
    </div>
  </div>

  <div class="Login_area">
    <div class="userLogo"><img src="../../public/window_login.jpg" /></div>

    <div class="userName" v-if="!login">
      <h1>JeongGeon Heo</h1>
    </div>
    <div class="userEmail" v-if="!login">
      <h3>ini080@naver.com</h3>
    </div>
    <transition name="fade" mode="out-in">
      <button class="userLogin_button" @click="onLogin" v-if="!login">
        Login
      </button>
      <div class="userLogin_message" v-else>환영합니다</div>
    </transition>
  </div>
</div>
</template>

<script>
import Format from '@/date-format.js'

export default {
  name: 'Login',
  data() {
    return {
      show: true,
      login: false,
      format: Format,
      time: Format.getTime(null, this.$store.state.language),
      date: Format.getDate(null, this.$store.state.language),
      ap: Format.getAp(null, this.$store.state.language)
    }
  },
  created() {
    this.refreshTime();

  },
  mounted: function() {
    $(document).ready(function() {
      $('.LockPage').click(function() {
        $('.LockPage').animate({
          'top': '-200vh'
        }, 1000);
      });
    })
  },
  methods: {
    refreshTime() { // 시간과 날짜 1초마다 갱신
      setInterval(() => {
        this.time = this.format.getTime(null, this.$store.state.language)
        this.date = this.format.getDate(null, this.$store.state.language)
        this.ap = this.format.getAp(null, this.$store.state.language)
      }, 1000)
    },
    onLogin() { // 2.5초 후 부모에게 onLogin 이벤트 emit
      this.login = true
      setTimeout(() => {
        this.$emit('onLogin')
      }, 2500)
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

.LockPage {
  z-index: 2;
  position: relative;
  background: url("../../public/windows_background.jpg") center;
  background-size: 100vw 100vh;
  width: 100vw;
  height: 100vh;
}

.time_area {
  position: absolute;
  bottom: 0;
  margin: 20px;
  color: #fff;
  font-size: 6em;
  font-family: Open Sans;
  top: 65vh;
  font-weight: bold;
  padding: 10px 20px;
}

.date_area {
  position: absolute;
  bottom: 0;
  margin: 0;
  color: #fff;
  font-size: 4em;
  font-family: Open Sans;
  top: 65vh;
  padding: 150px 80px;
}

.Login_area {
  z-index: 1;
  position: relative;
  background: url("../../public/windows_login.jpg") no-repeat;
  background-size: 100vw 100vh;
  width: 100vw;
  height: 100vh;
  top: -100vh;

}

.userLogo {
  width: 15em;
  height: 15em;
  position: absolute;
  top: 25%;
  left: 40%;
  margin: 0em auto;
  display: block;
}

.userLogo img {
  width: 15em;
  height: 15em;
  border-radius: 10em;
}

.userName {
  position: absolute;
  top: 55%;
  left: 40%;
  text-align: center;
  color: #fff;
  margin: 1em 0em 1em 0em;
}

.userEmail {
  position: absolute;
  top: 60%;
  left: 42%;
  text-align: center;
  color: #fff;
  margin: 1em 0em 1em 0em;
}


.userLogin_button {
  position: absolute;
  top: 65%;
  left: 45%;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  color: #fff;
  font-weight: bold;
  padding: 10px 20px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #eee;
  }
}

.userLogin_message {
  position: absolute;
  top: 55%;
  left: 42%;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: #fff;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
