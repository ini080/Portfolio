<template>
<div id="app">
  <startbar-vue  @onLogout="$emit('onLogout')" />
  <div class="title">
    JG Portfolio
  </div>
  <div class="subtitle ">
    Made By Vue.js
  </div>

  <transition name="fade" mode="in-out">
    <chrome-view v-if="Chrome"  :title="title" :type="type" @onClose="onClose" />
  </transition>

  <div class="icon_wap">
  <div class="grid-layout-container margin-right">
    <grid-layout :layout="layoutLeft" :col-num="6" :colWidth="BASE_LEN" :row-height="BASE_LEN" :is-draggable="true" :is-resizable="false" :is-mirrored="false" :vertical-compact="true" :margin="[0, 0]" :use-css-transforms="true">
      <grid-item v-for="(item, index) in layoutLeft" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i">
        <div class="container">
          <MetroTile :width="item.width" :height="item.height" :length="item.length" :rotateX="item.rotateX" :faceStyle="item.faceStyle" :index="item.i" @onClick="chromeClick(item.i)">
            <!-- custom face for each tile in left layout-->

            <template v-if="item.i === '0'" >
              <div slot="front">
                <AboutMeIcon style="fill: white" class="icon animated pulse" />
                <div class="tile-label animated pulse">
                  About Me
                </div>
              </div>
            </template>

            <template v-else-if="item.i === '1'">
              <div slot="front">
                <ProejctIcon style="fill: white" class="icon animated pulse" />
                <div class="tile-label  animated pulse">
                  Project
                </div>
              </div>
            </template>

            <template v-else-if="item.i === '2'">
              <div slot="front">
                <Achive style="fill: white" class="icon animated pulse" />
                <div class="tile-label animated pulse">
                  Activity
                </div>
              </div>
            </template>

            <template v-else-if="item.i === '3'">
              <div slot="front">
                <OneNoteIcon style="fill: white" class="icon" />
                <div class="tile-label">
                  OneNote
                </div>
              </div>
            </template>

            <template v-else-if="item.i === '4'">
              <div slot="front">
                <PowerPointIcon style="fill: white" class="icon" />
                <div class="tile-label">
                  PowerPoint
                </div>
              </div>
            </template>

            <template v-else-if="item.i === '5'">
              <div slot="front">
                <CortanaIcon style="fill: white" class="icon" />
                <div class="tile-label">
                  Cortana
                </div>
              </div>
            </template>

            <template v-else-if="item.i === '6'">
              <div slot="front">
                <div class="calendar">
                  <div class="calendar-week-day">
                    {{weekDay}}
                  </div>
                  <div class="calendar-month-day">
                    {{monthDay}}
                  </div>
                </div>
              </div>
            </template>

            <template v-else-if="item.i === '7'">
              <div slot="front">
                <div class="tile-label">
                  Microsoft Store
                </div>
                <img src="https://user-images.githubusercontent.com/6414178/45696034-3fd14280-bb95-11e8-8c45-cd2020fabefc.png" class="store-cover-img" />
                <div class="store-title">
                  Cyberpunk 2077
                </div>
                <div class="store-subtitle">
                  Free&#8314;
                </div>
                <StoreIcon style="fill: white" class="store-icon-right" />
              </div>
              <div slot="top">
                <div class="tile-label">
                  Microsoft Store
                </div>
                <img src="https://user-images.githubusercontent.com/6414178/45696084-56779980-bb95-11e8-87ac-817bf448cd4f.png" class="store-cover-img" />
                <div class="store-title">
                  Half-Life 3: Episode 1
                </div>
                <div class="store-subtitle">
                  Free&#8314;
                </div>
                <StoreIcon style="fill: white" class="store-icon-right" />
              </div>
              <div slot="bottom">
                <div class="tile-label">
                  Microsoft Store
                </div>
                <img src="https://user-images.githubusercontent.com/6414178/45696072-4eb7f500-bb95-11e8-8e7c-ccb0099e5161.png" class="store-cover-img" />
                <div class="store-title">
                  Grand Theft Auto VI
                </div>
                <div class="store-subtitle">
                  Free&#8314;
                </div>
                <StoreIcon style="fill: white" class="store-icon-right" />
              </div>
            </template>
          </MetroTile>
        </div>
      </grid-item>
    </grid-layout>
  </div>

  <div class="grid-layout-container">
    <grid-layout :layout="layoutRight" :col-num="6" :colWidth="BASE_LEN" :row-height="BASE_LEN" :is-draggable="true" :is-resizable="false" :is-mirrored="false" :vertical-compact="true" :margin="[0, 0]" :use-css-transforms="true">
      <grid-item v-for="item in layoutRight" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i">
        <div class="container">
          <MetroTile :width="item.width" :height="item.height" :length="item.length" :rotateX="item.rotateX" :faceStyle="item.faceStyle" :frontStyle="item.frontStyle" :topStyle="item.topStyle" :backStyle="item.backStyle"
            :bottomStyle="item.bottomStyle" :perspective="item.perspective" @onClick="chromeClick(item.i)">
            <!-- custom face for each tile in right layout-->
            <template v-if="item.i === '10'">
              <div slot="front">
                <WeatherIcon style="fill: white" class="icon" />
              </div>
            </template>
            <template v-else-if="item.i === '11'">
              <div slot="front">
                <SettingsIcon style="fill: white" class="icon" />
              </div>
            </template>
            <template v-else-if="item.i === '12'">
              <div slot="front">
                <PhotoIcon style="fill: white" class="icon" />
              </div>
            </template>
            <template v-else-if="item.i === '13'">
              <div slot="front">
                <CameraIcon style="fill: white" class="icon" />
              </div>
            </template>
            <template v-else-if="item.i === '14'">
              <div slot="front">
                <div class="tile-label  animated pulse">
                  Algorithms
                </div>
                <AlgorithmIcon class="icon animated pulse" />
              </div>
            </template>
            <template v-else-if="item.i === '15'">
              <div slot="front">
                <div class="tile-label animated pulse">
                  View Source on GitHub
                </div>
                <GithubIcon style="fill: white" class="icon animated pulse" />
              </div>
            </template>
            <template v-else-if="item.i === '16'">
              <div slot="front">
                <div class="tile-label">
                  Vue
                </div>
                <img src="https://user-images.githubusercontent.com/6414178/45696077-51b2e580-bb95-11e8-91ab-097cc1d1b89d.png" class="image" />
              </div>
              <div slot="top">
                <div class="tile-label">
                  Angular
                </div>
                <img src="@/assets/svg//angular.png" class="image" />
              </div>
            </template>
            <template v-else-if="item.i === '17'">
              <div slot="front">
                <div class="tile-label animated pulse">
                  Mail
                </div>
                <MailIcon style="fill: white" class="icon animated pulse" />
              </div>
            </template>
            <template v-else-if="item.i === '18'">
              <div slot="front">
                <div class="tile-label animated pulse">
                  Google Chrome
                </div>
                <ChromeIcon class="icon animated pulse" />
              </div>
            </template>
            <template v-else-if="item.i === '19'">
              <div slot="front">
                <div class="tile-label">
                  Access
                </div>
                <AccessIcon style="fill: white" class="icon" />
              </div>
            </template>
          </MetroTile>
        </div>
      </grid-item>
    </grid-layout>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import ChromeComponent from '@/components/Chrome.vue'
import StartbarComponent from '@/components/Startbar.vue'

import Format from '@/date-format.js'
import Icons_Left from '@/models/Icons_Left.js'
import Icons_Right from '@/models/Icons_Right.js'
import MetroTile from '../components/MetroTile.vue'
import VueGridLayout from 'vue-grid-layout';

import OneNoteIcon from '@/assets/svg/oneNote.svg';
import PowerPointIcon from '@/assets/svg/powerPoint.svg';
import CortanaIcon from '@/assets/svg/cortana.svg';
import StoreIcon from '@/assets/svg//store.svg';
import WeatherIcon from '@/assets/svg/weather.svg';
import SettingsIcon from '@/assets/svg/settings.svg';
import PhotoIcon from '@/assets/svg/photo.svg';
import CameraIcon from '@/assets/svg/camera.svg';
import GithubIcon from '@/assets/svg/github.svg';
import AccessIcon from '@/assets/svg/access.svg';

import ChromeIcon from '@/assets/svg/chrome.svg';
import AlgorithmIcon from '@/assets/svg/algorithm.svg';
import MailIcon from '@/assets/svg/email.svg';
import AboutMeIcon from '@/assets/svg/aboutme.svg';
import Achive from '@/assets/svg/achive.svg';
import ProejctIcon from '@/assets/svg/project.svg';

const BASE_LEN = 65;
const MARGIN = 3;
const REPO_URL = 'https://github.com/ini080';

export default {
  name: 'app',
  components: {
    MetroTile,
    VueGridLayout,
    AboutMeIcon,
    ProejctIcon,
    OneNoteIcon,
    PowerPointIcon,
    CortanaIcon,
    StoreIcon,
    WeatherIcon,
    SettingsIcon,
    PhotoIcon,
    CameraIcon,
    GithubIcon,
    ChromeIcon,
    AccessIcon,
    AlgorithmIcon,
    MailIcon,
    Achive,
    'chrome-view': ChromeComponent,
    'startbar-vue' : StartbarComponent,
  },
  data: () => ({
    window: false, // 단축 아이콘 클릭시 윈도우 띄우기
    Chrome: false,
    BASE_LEN,
    layoutLeft: Icons_Left,
    layoutRight: Icons_Right,
    format: Format,
    type:0,
    title:'',
    time: Format.getTime(null, 'kr'),
    date: Format.getDate(null, 'kr'),
    ap: Format.getAp(null, 'kr'),
    weekDay: (() => {
      const weekDayMap = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
      }
      return weekDayMap[new Date().getDay()];
    })(),
    monthDay: (() => {
      return new Date().getDate();
    })(),
    rotateIndex1: 0,
    rotateArray1: [-90, 90, 90, -90],
    rotateIndex2: 0,
    rotateArray2: [-90, 90],
  }),
  methods: {
    refreshTime() {
      setInterval(() => {
        this.time = this.format.getTime(null, 'kr')
        this.date = this.format.getDate(null, 'kr')
        this.ap = this.format.getAp(null, 'kr')
      }, 1000)
    },
    onClose() {
      this.Chrome = false
    },

    chromeClick(n) {
      if (n == 15) {
        window.open('https://github.com/ini080')
      } else if( n == 17){
        window.open('mailto:ini080@naver.com')
      } else{
        this.showChrome(n)
      }
    },
    showChrome(n) {
      this.type = n
      if( n == 0 ){
        this.title = 'About Me'
        this.Chrome = true
      } else if( n == 1){
        this.title = 'Project'
        this.Chrome = true
      } else if( n == 14){
        this.title = 'Algorithm'
        this.Chrome = true
      } else if( n == 18){
        this.title = 'Chrome'
        this.Chrome = true
      } else if( n== 2 ){
        this.title = "Activity"
        this.Chrome = true
      }else {
        this.title = 'Unknown'
        this.Chrome = false
      }

    },
    Logout() {
      setTimeout(() => {
        this.$emit('onLogout')
      }, 1000)
    },
    setRotateX(layoutItem, rotateIndexName, rotateArray) {
      layoutItem.rotateX += rotateArray[this[rotateIndexName] % rotateArray.length];
      this[rotateIndexName] += 1;
    },
  },
  mounted() {
    this.interval1 = setInterval(
      () => {
        this.setRotateX(this.layoutLeft[7], 'rotateIndex1', this.rotateArray1);
      }, 3000);
    this.interval2 = setInterval(
      () => {
        this.setRotateX(this.layoutRight[6], 'rotateIndex2', this.rotateArray2);
      }, 5000);
  },
  beforeDestroy() {
    clearInterval(this.interval1);
    clearInterval(this.interval2);
  },
  created(){
    this.refreshTime();
  }
}
</script>

<style lang="scss">

@font-face {
  font-family: 'ymB';
  src: url("../assets/font/ymB.ttf") format('truetype')
}

@font-face {
  font-family: 'ymL';
  src: url("../assets/font/ymL.ttf") format('truetype')
}


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  text-align: center;
}

body {
  background: radial-gradient(circle, rgba(61, 82, 108, 1) 0%, rgba(29, 50, 75, 1) 100%);
}

.title {
  margin-top: 4%;
  font-family: "ymB";
  font-size: 40px;
  font-weight: 500;
  padding: 0 0 0 0;
  color: #fff;
}

.subtitle {
  margin-top: 5px;
  font-family: "ymL";
  font-size: 15px;
  font-weight: 500;
  padding-bottom: 20px;
  color: #fff;
}

.grid-layout-container {
  display: inline-block;
  width: 390px;
  height: 100%;
}

.margin-right {
  margin-right: 17px
}

.container {
  margin: 3px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
}

.icon {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index : -1;
}

.image {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.store-icon-right {
  position: absolute;
  right: 5px;
  bottom: 5px;
  margin: auto;
}

.store-cover-img {
  position: absolute;
  left: 8px;
  top: 10px;
  height: 50px;
  width: 50px;
}

.store-title {
  font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: #fff;
  position: absolute;
  top: 10px;
  left: 65px;
}

.store-subtitle {
  font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 35px;
  left: 65px;
}

.tile-label {
  font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  position: absolute;
  left: 8px;
  bottom: 5px;
}

.vue-grid-item.vue-grid-placeholder {
  background-color: transparent !important;
}

.calendar {
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
  color: #fff;
}

.calendar .calendar-week-day {
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
}

.calendar .calendar-month-day {
  margin-top: 15px;
  font-size: 30px;
  transform: scale(1.75);
}


@-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 1.15, 1.15);
    transform: scale3d(1.15, 1.15, 1.15);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 1.15, 1.15);
    transform: scale3d(1.15, 1.15, 1.15);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
  -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count:infinite;
}

</style>
