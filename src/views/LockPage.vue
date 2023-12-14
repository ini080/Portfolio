<template>
  <div class="w-screen h-screen bg-center bg-cover flex justify-center items-center lockPage" @click="lockToggle">
    <transition name="lockAni" >
      
      <!-- 잠금화면 -->
      <div v-if="lock" class="fixed bottom-0 left-0">
        <p class=" text-white p-4 m-2 text-left
                  sm:p-2 sm:pt-0 sm:m-1 sm:text-2xl
                  md:p-4 md:pt-0 md:m-2 md:pb-0 md:text-3xl
                  lg:p-2 lg:m-1 lg:ml-10 lg:text-4xl">{{ today.date }}</p>
        <p class="text-white p-4 pt-0 m-2 mb-12 text-left font-bold
                sm:p-2 sm:pt-0 sm:m-1 sm:mb-10 sm:text-6xl
                md:p-4 md:m-2 md:pt-0 md:mb-12 md:w-1/2 md:text-7xl
                lg:p-2 lg:m-1 lg:pt-0 lg:ml-10 lg:mb-10 lg:w-1/3 lg:text-8xl">{{ today.time }}</p>
      </div>
      
      <!-- 로그인시도 화면-->
      <div v-else class="fixed loginPage">
          <!-- 애니메이션 -->
          <div class="backdrop"></div>
          
          <div class="absolute justify-center items-center">
            <div class="w-60 fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src="@/assets/login_icon.png" alt="User Logo" class="w-full h-full rounded-full">
            </div>
            
            <p v-if="!login" class="absolute w-60 mt-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl" >
                JeongGeon Heo
            </p>

            <transition name="fade" mode="out-in">
              <button v-if="!login" class="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer border border-white rounded-md outline-none text-white font-bold py-1 px-10" @click="onLogin">
                Login
              </button>
              <div v-else class="absolute w-60 top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl">환영합니다</div>
            </transition>
          </div>
      </div>

    </transition>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export default {
  data() {
    return {
      lock: true,
      login: false,
      today : {},
    };
  },

  mounted() {
      this.updateTime()
      setInterval(this.updateTime, 1000)
  },
  methods: {
      lockToggle(){
          if( this.login ) return;
          this.lock = !this.lock
      },
      updateTime() { 
        this.today = {
          date: dayjs().format('MM월 DD일 dddd'),
          time: dayjs().format('HH:mm:ss')
        }
      },
      onLogin(e) {
          e.stopPropagation()
          this.login = true
          setTimeout(() => { this.$emit('onLogin') }, 3000)
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
transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
opacity: 0;
}

.lockPage{
  background-image: url('../assets/windows_background.jpg');
}

// blur 및 애니메이션을 위해 tailwindcss 미적용
.loginPage{
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
</style>