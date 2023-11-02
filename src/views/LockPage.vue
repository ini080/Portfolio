<template>
  <div class="lockPage" @click="lockToggle">
    <transition name="lockAni" >
      
      <!-- 잠금화면 -->
      <div v-if="lock" class="modal">
          <div class="time_area"> {{ time }} </div>
          <div class="date_area"> {{ date }} </div>
      </div>

      <!-- 로그인시도 화면-->
      <div v-else class="modal">
          <!-- 애니메이션 -->
          <div class="backdrop"></div>
          
          <div class="Login_area" >
              <div class="userLogo"><img src="../assets/login_icon.png" /></div>

              <div class="userName" v-if="!login">
                  <h1>JeongGeon Heo</h1>
              </div>

              <transition name="fade" mode="out-in">
                  <button class="userLogin_button" id="loginBtn" @click="onLogin" v-if="!login">
                      Login
                  </button>
                  <div class="userLogin_message" v-else>환영합니다</div>
              </transition>
          </div>
      </div>

    </transition>
  </div>
</template>

<script>
import Utils from '@/store/utils.js'

export default {
  data() {
    return {
      lock: true,
      login: false,
      format: Utils,
      time: Utils.getTime(null, 'en'),
      date: Utils.getDate(null, 'kr'),
      ap: Utils.getAp(null, 'kr')
    };
  },

  created() {
      this.refreshTime();
  },

  methods: {
      lockToggle(){
          if( this.login ) return;
          this.lock = !this.lock
      },
      refreshTime() { // 시간과 날짜 1초마다 갱신
          setInterval(() => {
              this.time = this.format.getTime(null, 'en')
              this.date = this.format.getDate(null, 'kr')
              this.ap = this.format.getAp(null, 'kr')
          }, 1000)
      },

      onLogin(e) {
          e.stopPropagation()
          this.login = true
          setTimeout(() => {
              this.$emit('onLogin')
          }, 3000)
      },
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
.lockPage {
width: 100vw;
height: 100vh;
background: url("../assets/windows_background.jpg") center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  > .backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.6);
  z-index: -1;
  }
}

.lockAni-enter-active,
.lockAni-leave-active {
  transition: opacity 0.5s;
}
.lockAni-enter,
.lockAni-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
transition: opacity 0s;
}
.fade-enter,
.fade-leave-to {
opacity: 0;
}

.time_area {
  position: absolute;
  bottom: 0;
  margin: 20px;
  color: #fff;
  font-size: 6em;
  font-family: D2;
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
  font-family: D2;
  top: 65vh;
  padding: 150px 40px;
}

.Login_area {
  display: flex;
  justify-content: center;
  align-items: center;

  .userLogo {
      width: 15em;
      height: 15em;
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%,-50%);

      @media screen and (max-width:599px) {
      top: 25%;
      }
  }

  .userLogo img {
      width: 15em;
      height: 15em;
      border-radius: 10em;

      @media screen and (max-width:599px) {
      width: 65%;
      height: 65%;
      }
  }

  .userName {
      position: absolute;
      top: 51%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      color: #fff;
      @media screen and (max-width:599px) {
          top: 14%;
          font-size: 0.8em;
      }
  }

  .userLogin_button {
      position: absolute;
      top: 56.5%;
      left: 50%;
      transform: translate(-50%,-50%);
      cursor: pointer;
      border: 1px solid #fff;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0);
      outline: none;
      color: #fff;
      font-weight: bold;
      padding: 10px 20px;
      transition: 0.3s;

      @media screen and (max-width:599px) {
          top: 100px;
      }
  }

  .userLogin_button:hover {
      background-color: rgba(255, 255, 255, 0.4);
      color: #eee;
  }

  .userLogin_message {
      position: absolute;
      top: 53%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      font-weight: bold;
      font-size: 2rem;
      color: #fff;

      @media screen and (max-width:599px) {
          top: 130px;
          font-size: 1.5rem;
      }
  }
}
</style>