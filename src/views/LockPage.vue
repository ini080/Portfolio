<template>
  <div class="w-screen h-screen bg-center bg-cover flex justify-center items-center bg-[url('@/assets/windows_background.jpg')]" @click="lockToggle">
    <transition name="lockAni" >
      
      <!-- 잠금화면 -->
      <div v-if="lock" class="fixed top-0 left-0 w-screen h-screen">
        <div class="absolute bottom-0 left-0  text-white text-4xl top-[73vh]"> 
          <div class="sm:text-3xl md:text-5xl lg:text-4xl p-4 md:p-5 lg:p-10"> {{ date }} </div>
        </div>
        <div class="absolute bottom-0 left-0  text-white text-7xl font-bold top-[80vh]"> 
          <div class="sm:text-7xl md:text-3xl lg:text-3xl p-2 md:p-10 lg:p-10"> {{ time }}  </div>
        </div>
      </div>

      <!-- 로그인시도 화면-->
      <div v-else class="fixed top-0 left-0 w-screen h-screen">
          <!-- 애니메이션 -->
          <div class="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-[rgba(0, 0, 0, 0.6)] z-[-1]"></div>
          
          <div class="Login_area" >
              <div class="userLogo"><img src="@/assets/login_icon.png" /></div>

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
        top:50%;
        left:50%;
        width:30%;
        height:35%;
        text-align:center;
        position: absolute;
      }
  }

  .userLogo img {
      width: 15em;
      height: 15em;
      border-radius: 10em;

      @media screen and (max-width:599px) {
        height:40%;
        text-align:center;
        position: absolute;
      }
  }

  .userName {
      position: absolute;
      top: 51%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      color: #fff;
      font-weight: bold;
      font-size: 25px;
      @media screen and (max-width:599px) {
          // top: 14%;
          // font-size: 0.8em;
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
      padding: 5px 40px;
      transition: 0.3s;

      @media screen and (max-width:599px) {
          // top: 100px;
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