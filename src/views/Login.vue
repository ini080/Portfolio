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
    <div class="userLogo"><img src="../../public/login_icon.png" /></div>

    <div class="userName" v-if="!login">
      <h1>JeongGeon Heo</h1>
    </div>
    <transition name="fade" mode="out-in">
      <button class="userLogin_button" @click="onLogin" v-if="!login">
        Login
      </button>
      <div class="userLogin_message" v-else>환영합니다</div>
    </transition>

    <div class='loader' v-if="login">
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
    </div>

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
      time: Format.getTime(null, 'kr'),
      date: Format.getDate(null, 'kr'),
      ap: Format.getAp(null, 'kr')
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
        this.time = this.format.getTime(null, 'kr')
        this.date = this.format.getDate(null, 'kr')
        this.ap = this.format.getAp(null, 'kr')
      }, 1000)
    },
    onLogin() {
      this.login = true
      setTimeout(() => {
        this.$emit('onLogin')
      }, 3000)
    },
  }
}
</script>

<style  lang="scss">
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
    background: url("../../public/windows_login.jpg") center;
    background-size: 100vw 100vh;
    width: 100vw;
    height: 100vh;
    top: -100vh;

      .userLogo {
          width: 15em;
          height: 15em;
          position: relative;
          top: 180px;
          margin: 0 auto;
          display: block;
      }

      .userLogo img {
          width: 15em;
          height: 15em;
          border-radius: 10em;
      }

      .userName {
          position: relative;
          top: 180px;
          text-align: center;
          color: #fff;
          margin: 1em 0;
      }

      .userLogin_button {
          position: relative;
          top: 180px;
          cursor: pointer;
          border: 1px solid #fff;
          border-radius: 5px;
          background-color: rgba(0, 0, 0, 0);
          outline: none;
          color: #fff;
          font-weight: bold;
          padding: 10px 20px;
          transition: 0.3s;
      }

      .userLogin_button:hover {
          background-color: rgba(255, 255, 255, 0.4);
          color: #eee;
      }

      .userLogin_message {
          position: absolute;
          top: 57%;
          left: 46%;
          text-align: center;
          font-weight: bold;
          font-size: 2rem;
          color: #fff;

      }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.loader {
    position: absolute;
    top: 63%;
    left: 46%;
    transform: translateX(-50%) translateY(-50%);
    width: 50px;
    height: 50px;
    margin: auto;
}
.loader .circle {
    position: absolute;
    width: 38px;
    height: 38px;
    opacity: 0;
    transform: rotate(225deg);
    animation-iteration-count: infinite;
    animation-name: orbit;
    animation-duration: 5.5s;
}
.loader .circle:after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 9px rgba(255, 255, 255, 0.7);
}
.loader .circle:nth-child(2) {
    animation-delay: 240ms;
}
.loader .circle:nth-child(3) {
    animation-delay: 480ms;
}
.loader .circle:nth-child(4) {
    animation-delay: 720ms;
}
.loader .circle:nth-child(5) {
    animation-delay: 960ms;
}
.loader {
    position: absolute;
    width: 70px;
    height: 70px;
    margin-left: -16px;
    margin-top: -16px;
    border-radius: 13px;
    animation: bgg 16087ms ease-in alternate infinite;
}
@keyframes orbit {
    0% {
        transform: rotate(225deg);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    7% {
        transform: rotate(345deg);
        animation-timing-function: linear;
    }
    30% {
        transform: rotate(455deg);
        animation-timing-function: ease-in-out;
    }
    39% {
        transform: rotate(690deg);
        animation-timing-function: linear;
    }
    70% {
        transform: rotate(815deg);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    75% {
        transform: rotate(945deg);
        animation-timing-function: ease-out;
    }
    76% {
        transform: rotate(945deg);
        opacity: 0;
    }
    100% {
        transform: rotate(945deg);
        opacity: 0;
    }
}
</style>
