<template>
  <div class="w-screen h-screen bg-center bg-cover flex justify-center items-center lockPage" @click="lockToggle">
    <transition name="lockAni" >
      
      <!-- 잠금화면 -->
      <div v-if="lock" class="fixed bottom-0 left-0">
        <p class=" text-white p-4 m-2 text-left text-4xl
                  sm:p-2 sm:pt-0 sm:m-1 sm:text-2xl
                  md:p-4 md:pt-0 md:m-2
                  lg:p-2 lg:m-1">{{ date }}</p>
        <p class="text-white p-4 pt-0 m-2 mb-12 text-left font-bold
                sm:p-2 sm:pt-0 sm:m-1 sm:mb-10 sm:text-6xl
                md:p-4 md:m-2 md:w-1/2 md:text-4xl
                lg:p-2 lg:m-1 lg:w-1/3 lg:text-4xl">{{ time }}</p>
      </div>
      
      <!-- 로그인시도 화면-->
      <div v-else class="fixed">
          <!-- 애니메이션 -->
          <div class="fixed backdrop-blur-sm bg-[rgba(0, 0, 0, 0.6)] z-[-1]"></div>
          
          <div class="absolute justify-center items-center">
            <div class="w-60 h-60 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src="@/assets/login_icon.png" alt="User Logo" class="w-full h-full rounded-full">
            </div>
            <div v-if="!login" class="absolute top-51 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-2xl">
              User Name
            </div>
            <button class="absolute top-56.5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer border border-white rounded-md bg-transparent outline-none text-white font-bold py-1 px-10 transition duration-300">
              Login
            </button>
          </div>
          
          <!-- <div class="Login_area" >
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
          </div> -->
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

.lockPage{
  background-image: url('../assets/windows_background.jpg');
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

  }

  .userLogo img {
      width: 15em;
      height: 15em;
      border-radius: 10em;

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