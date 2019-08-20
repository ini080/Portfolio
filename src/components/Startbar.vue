<template>
<!-- Taskbar -->
<div>
  <div class="taskbar">
    <div class="icons">

      <div class="icons-left">
        <a id="start-menu" @click="showMenu = !showMenu"><i class="fab fa-windows" ></i></a>
        <a id="search"></a>
        <a id="tabs-windows"></a>
        <a id="folder" ></a>
        <a id="chrome"></a>
      </div>

      <div class="icons-right">
        <a href="#up" id="up" class="small-icons"><i class="fas fa-chevron-up"></i></a>
        <a href="#sound-modal" id="sound" class="small-icons"></a>
        <a href="#wifi-modal" id="wifi" class="small-icons"></a>
        <div class="datetime">
          <span class="hour">
            {{time}}
          </span>
          <span class="date">
            {{date}}
          </span>
        </div>

        <a href="#notifications" id="notifications"><i class="far fa-bell"></i></a>
        <a href="#" class="clear disabled"></a>
        <a href="#" id="return"></a>
      </div>
    </div>
  </div>


<transition name="fade" mode="in-out">
  <div class="start-menu-modal" v-if="showMenu">
    <div id="user">
      <a class="push" href="#"><i class="fas fa-bars"></i></a>
      <a href="#"><i class="fas fa-user"></i></a>
      <a href="#"><i class="fas fa-cog"></i></a>
      <a @click="$emit('onLogout')"><i class="fas fa-power-off"></i></a>
    </div>
    <div id="apps">
      <a class="category" href="#">My Using Language</a>
      <a href="#"><img src="https://image.noelshack.com/fichiers/2018/22/1/1527510180-logo-microsoft-access-20132.png" alt="access"> <span>Access</span></a>
      <a href="#"><img src="http://assets.nnm-club.ws/forum/image.php?link=http://s019.radikal.ru/i622/1709/cc/334931ae4fe7.png" alt="sublime"> <span>Sublime text 3</span></a>
    </div>
    <div id="others">
      <div class="title-others">
        My Projects
      </div>
      <div class="box-others">
        <div class="box">
          <img src="https://image.noelshack.com/fichiers/2018/22/1/1527527145-logo-microsoft-word-20132.png" alt="">
          <span>Word</span>
        </div>
        <div class="box">
          <img src="https://image.noelshack.com/fichiers/2018/22/1/1527527145-logo-microsoft-excel-20132.png" alt="">
          <span>Excel</span>
        </div>
        <div class="box">
          <img src="https://image.noelshack.com/fichiers/2018/22/1/1527527145-logo-microsoft-powerpoint-2013.png" alt="">
          <span>Powerpoint</span>
        </div>
        <div class="box">
          <img src="https://image.noelshack.com/fichiers/2018/22/1/1527527145-logo-microsoft-outlook-2013.png" alt="">
          <span>Outlook</span>
        </div>
        <div class="box">
          <img src="https://image.noelshack.com/fichiers/2018/22/1/1527527458-publisher-by-navdbest-d6186xo-600x6002.png" alt="">
          <span>Publisher</span>
        </div>
        <div class="box">
          <img src="https://image.noelshack.com/fichiers/2018/22/1/1527527243-logo-microsoft-onenote-20132.png" alt="">
          <span>OneNote</span>
        </div>
      </div>
    </div>
  </div>
  </transition>
</div>
</template>


<script>

import Format from '@/date-format.js'


export default {
  data () {
    return {
      showMenu: false, // 시작메뉴 Show
      format: Format, // 시간포맷 변환객체
      time: Format.getSimple(null, 'en'),
      date: Format.getDate(null, 'en'),
      interval: null
    }
  },
  created () {
    this.refreshTime()
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    refreshTime () {
      this.interval = setInterval(() => {
        this.date = this.format.getDate(null, 'en')
        this.time = this.format.getSimple(null, 'en')
      }, 1000)
    },
  }
}
</script>

<style>
/* ==========================================================================
    Taskbar
========================================================================== */
.taskbar {
  position: fixed;
  bottom: 0;
  height: 43px;
  width: 100%;
  background: #004172;
}

.taskbar .icons-left {
  height: 43px;
  display: inline-block;
  float : left;
}

.taskbar .icons-left #start-menu, .taskbar .icons-left #tabs-windows {
  height: 43px;
  width: 48px;
  position: relative;
}

.taskbar .icons-left #start-menu i, .taskbar .icons-left #tabs-windows i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 21px;
  color: white;
}

.taskbar .icons-left #search {
  height: 43px;
  width: 49px;
  background-image: url("https://image.noelshack.com/fichiers/2018/18/6/1525514790-698627-icon-111-search-512.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 26px 26px;
}

.taskbar .icons-left #folder {
  height: 43px;
  width: 49px;
  background-image: url("http://www.iconarchive.com/download/i98291/dakirby309/simply-styled/File-Explorer.ico");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 21px 21px;
  background-size: 24px 21px;
}

.taskbar .icons-left #chrome {
  height: 43px;
  width: 49px;
  background-image: url("https://cdn0.iconfinder.com/data/icons/jfk/512/chrome-512.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 26px 26px;
}

.taskbar .icons-left #tabs-windows {
  height: 43px;
  width: 49px;
  background-image: url("https://image.noelshack.com/fichiers/2018/18/5/1525467821-tabs.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 15px 15px;
  background-size: 23px 15px;
}

.taskbar .icons-left #tabs-windows:hover {
  height: 43px;
  width: 49px;
  background-image: url("https://image.noelshack.com/fichiers/2018/18/5/1525467821-tabs.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 15px 15px;
  background-size: 28px 15px;
}

.taskbar .icons-left a {
  display: table-cell;
  border-bottom: 2px solid transparent;
}

.taskbar .icons-left a:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.taskbar .icons-left a:not(:first-child) {
  margin-left: -4px;
}

.taskbar .icons-left a.border:focus {
  border-bottom: 2px solid rgba(245, 245, 245, 0.651);
}

.taskbar .icons-left .px {
  width: 1px;
}

.taskbar .icons-left .px a {
  pointer-events: none;
}

.taskbar .icons-right {
  height: 43px;
  float: right;
}

.taskbar .icons-right #wifi {
  height: 43px;
  width: 49px;
  background-image: url("https://image.noelshack.com/fichiers/2018/18/4/1525383811-wifinotificationicon.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
}

.taskbar .icons-right #sound {
  height: 43px;
  width: 49px;
  background-image: url("https://image.noelshack.com/fichiers/2018/18/4/1525383779-audiotoasticon.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 22px 22px;
}

.taskbar .icons-right #return {
  width: 4px;
  border-left: 1px solid grey;
}

.taskbar .icons-right #notifications, .taskbar .icons-right #up {
  height: 43px;
  width: 42px;
  position: relative;
}

.taskbar .icons-right #notifications i, .taskbar .icons-right #up i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 17px;
  color: white;
}

.taskbar .icons-right .clear {
  height: 43px;
  width: 7px;
  display: table-cell;
}

.taskbar .icons-right .disabled {
  pointer-events: none;
  cursor: default;
}

.taskbar .icons-right .datetime {
  display: table-cell;
  width: 70px !important;
  cursor: pointer;
  padding-top: 3px;
}

.taskbar .icons-right .datetime span {
  display: block;
  text-align: center;
  margin-top: 5px;
  font-size: 11.3px;
  color: white;
}

.taskbar .icons-right .datetime:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.taskbar .icons-right a {
  display: table-cell;
}

.taskbar .icons-right a:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.taskbar .icons-right a:not(:first-child) {
  margin-left: -4px;
}

.taskbar .icons-right .small-icons {
  width: 24px !important;
}



.start-menu-modal {
  z-index : 2;
  background: #005a9e;
  position: absolute;
  left: 0;
  bottom: 43px;
  height: 500px;
  color: white;
  display: grid;
  grid-template-columns: 50px 250px 400px;
  cursor: default;
}

.start-menu-modal:target {
  visibility: visible !important;
  animation-name: open;
  animation-duration: 0.1s;
  transition: 0.1s;
}

@keyframes open {
  0% {
    height: 550px;
    opacity: 0.5;
  }

  100% {
    height: 600px;
    opacity: 1;
  }
}

.start-menu-modal #user {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.start-menu-modal #user a {
  color: whitesmoke;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: default;
}

.start-menu-modal #user a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.start-menu-modal #user .push {
  margin-bottom: auto;
}

.start-menu-modal #apps {
  display: flex;
  flex-direction: column;
  overflow-y: visible;
  padding: 10px;
}

.start-menu-modal #apps a {
  color: whitesmoke;
  display: flex;
  text-decoration: none;
  padding: 2px 10px 0px 20px;
  line-height: 2.5;
  font-size: 12px;
  letter-spacing: 0.5px;
  cursor: default;
}

.start-menu-modal #apps a img {
  height: 30px;
  width: 30px;
  padding: 4px;
}

.start-menu-modal #apps a img[alt="sublime"] {
  background: #292929;
}

.start-menu-modal #apps a img[alt="access"] {
  background: #7c2325;
}

.start-menu-modal #apps a i {
  font-size: 25px;
  line-height: 1.1;
}

.start-menu-modal #apps a span {
  margin-left: 8px;
  color: whitesmoke;
}

.start-menu-modal #apps a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.start-menu-modal #apps a.category {
  height: 30px;
}

.start-menu-modal #others .title-others {
  color: whitesmoke;
  text-decoration: none;
  padding: 10px 10px 0px 20px;
  line-height: 2.5;
  font-size: 12px;
  letter-spacing: 0.5px;
}

.start-menu-modal #others .box-others {
  display: inline-flex;
  padding-left: 20px;
  flex-wrap: wrap;
}

.start-menu-modal #others .box-others .box {
  height: 100px;
  width: 100px;
  position: relative;
  background: #0078d7;
  margin-left: 4px;
  border: 2px solid transparent;
  margin-bottom: 4px;
}

.start-menu-modal #others .box-others .box img {
  height: 40px;
  width: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.start-menu-modal #others .box-others .box span {
  position: absolute;
  bottom: 3px;
  left: 4px;
  font-size: 12px;
}

.start-menu-modal #others .box-others .box:hover {
  border: 2px solid #7fbbeb;
}

</style>
