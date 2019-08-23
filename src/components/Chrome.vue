<template>
<div class="chrome" id="chrome-pop-up">
  <div class="pop-up">

    <!-- Taskbar chrome-->

    <!-- Top -->
    <div class="chrome-top">
      <div class="chrome-tabs">
        <div class="triangle"></div>
        <div class="tabs">
          <span class="icons-tabs">
            <i class="fab fa-chrome"></i>
          </span>
          <span class="text-tabs">{{title}}</span>
          <span class="close-tabs" @click="$emit('onClose')">x</span>
        </div>
        <div class="triangle-2"></div>
        <div class="new-tabs"></div>
      </div>
      <div class="chrome-close">
        <a href="#"><i class="fas fa-minus"></i></a>
        <a href="#"><i class="far fa-window-restore"></i></a>
        <a href="#" @click="$emit('onClose')"><i class="fas fa-times"></i></a>
      </div>
    </div>
    <!-- Bottom -->
    <div class="chrome-bottom">
      <div class="options-bar">
        <div class="icons-bar">
          <div class="arrows">
            <a href="#"><i class="fas fa-arrow-left"></i></a>
            <a href="#"><i class="fas fa-arrow-right"></i></a>
            <a href="#"><i class="fas fa-sync"></i></a>
          </div>
          <div class="search-bar">
            <span class="info"><i class="fas fa-lock"></i> Securised</span>
            <input type="text" v-model="URL">
            <span class="star"><i class="far fa-star"></i></span>
          </div>
          <div class="points-bar">
            <div class="points">
              <span>•</span>
              <span>•</span>
              <span>•</span>
            </div>
          </div>
        </div>
        <div class="bookmarks">
          <div class="folder-book">
            <a href="#"><i class="fas fa-home"></i> Home</a>
          </div>
          <div class="folder-book">
            <a href="#"><i class="fas fa-address-card"></i> About Me</a>
          </div>
          <div class="folder-book">
            <a href="#"><i class="fas fa-folder-open"></i> Project</a>
          </div>
          <div class="folder-book">
            <a href="#"><i class="fas fa-trophy"></i> Activity</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <about-view v-if="type == 0" />
  <project-view v-if="type == 1" />
  <activiti-vue v-if="type == 2" />
  <algorithm-vue v-if="type == 14" />
  <search-vue v-if="type == 18" />
</div>
</template>


<script>
import AboutMe from '@/components/AboutMe.vue'
import Project from '@/components/Project.vue'
import Search from '@/components/Search.vue'
import Algorithm from '@/components/Algorithm'
import Activity from '@/components/Activity'

export default {
  props: {
    title: String,
    type: String // type: 0(폴더), 1(터미널), 2(브라우저), 3(정보)
  },

  components: {
    'about-view': AboutMe,
    'project-view': Project,
    'search-vue': Search,
    'algorithm-vue': Algorithm,
    'activiti-vue': Activity,
  },

  data() {
    return {
      URL: 'https://JG_Windows/' + this.title,
    }
  },
}
</script>

<style >
@import url(//fonts.googleapis.com/earlyaccess/jejugothic.css);
@font-face {
  font-family: 'ymB';
  src: url("../assets/font/ymB.ttf") format('truetype')
}

@font-face {
  font-family: 'ymL';
  src: url("../assets/font/ymL.ttf") format('truetype')
}

.chrome{
  font-family: 'Jeju Gothic', sans-serif;
  border-radius: 15px 15px 0px 0px
}
  #chrome-pop-up {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50rem;
    height: 30rem;
    background: white;
    border: 2px solid #004275;
    z-index: 1;
    resize: both;
  }

  #chrome-pop-up:target {
    visibility: visible;
  }

  #chrome-pop-up iframe {
    height: 100vh;
    width: 100%;
  }

  .chrome-top {
    height: 33px;
    width: 100%;
    position: relative;
    border-bottom: 1px solid grey;
  }

  .chrome-tabs {
    float: left;
    position: relative;
    margin-left: 12px;
  }

  .chrome-tabs .tabs {
    padding-top: 6px;
    padding-left: 12px;
    padding-right: 6px;
    padding-bottom: 6px;
    width: 180px;
    background: #f2f2f2;
    cursor: default;
  }

  .chrome-tabs .tabs .text-tabs {
    font-size: 14px;
    margin-left: 3px;
    vertical-align: text-bottom;
  }

  .chrome-tabs .tabs .close-tabs {
    float: right;
    margin-right: 10px;
    height: 15px;
    width: 15px;
    text-align: center;
    line-height: 0.9;
    font-size: 14px;
    font-weight: bold;
    border-radius: 50%;
    font-weight: 500;
    font-family: monospace;
  }

  .chrome-tabs .tabs .close-tabs:hover {
    background: rgba(255, 0, 0, 0.781);
    color: white;
    padding: 1px;
  }

  .chrome-tabs .tabs:before {
    content: " ";
    position: absolute;
    left: -33px;
    bottom: 0;
    background: grey;
    width: 64px;
    height: 1px;
    transform: rotate(104deg);
  }

  .chrome-tabs .tabs:after {
    content: " ";
    position: absolute;
    right: -31px;
    bottom: 0;
    background: grey;
    width: 64px;
    height: 1px;
    transform: rotate(70deg);
  }

  .chrome-tabs .tabs .icons-tabs img {
    height: 16px;
    width: 16px;
  }

  .new-tabs {
    width: 26px;
    height: 15px;
    background: #ccc;
    transform: skew(27deg);
    position: absolute;
    top: 7px;
    right: -30px;
    border: 1px solid grey;
    border-radius: 2px;
  }

  .new-tabs:hover {
    background: rgba(128, 128, 128, 0.3);
  }

  .chrome-close {
    display: flex;
    justify-content: flex-end;
  }

  .chrome-close a {
    text-decoration: none;
    font-size: 11px;
    padding: 8px 24px 7px 24px;
    color: grey;
  }

  .chrome-close a:hover:not(:last-child) {
    background: #dfdfdf;
    color: black;
  }

  .chrome-close a:hover:last-child {
    background: rgba(255, 0, 0, 0.781);
    color: white;
  }

  .chrome-close a:not(:first-child) {
    margin-left: -4px;
  }

  .triangle {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: 0px solid transparent;
    border-bottom: 30px solid transparent;
    border-left: 7px solid white;
  }

  .triangle-2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-top: 0px solid transparent;
    border-bottom: 30px solid transparent;
    border-left: 10px solid white;
    transform: scaleX(-1);
  }

  .chrome-bottom {
    background: #f2f2f2;
    height: 62px;
    position: relative;
    display: flex;
    flex-direction: row;
  }

  .chrome-bottom .options-bar {
    height: calc(62px / 2);
    width: 100%;
  }

  .chrome-bottom .options-bar a {
    text-decoration: none;
    border-radius: 3px;
  }

  .chrome-bottom .options-bar a:hover {
    background: #dfdfdf;
  }

  .chrome-bottom .options-bar .icons-bar {
    padding: 3px;
    margin-left: 4px;
    display: flex;
    flex-wrap: nowrap;
  }

  .chrome-bottom .options-bar .icons-bar .arrows {
    flex: 0 0 85px;
    flex-direction: row;
    align-self: center;
  }

  .chrome-bottom .options-bar .icons-bar .arrows a {
    color: #5a5a5a;
    padding: 4px;
  }

  .chrome-bottom .options-bar .search-bar {
    width: 100%;
  }

  .chrome-bottom .options-bar .search-bar input {
    border: 1px solid grey;
    border-radius: 4px;
    padding: 8px;
    width: 100%;
    text-indent: 87px;
  }

  .chrome-bottom .options-bar .search-bar input:focus {
    outline: none;
  }

  .chrome-bottom .options-bar .search-bar .info {
    position: absolute;
    font-size: 12px;
    color: #27ae60;
    border-right: 1px solid rgba(128, 128, 128, 0.808);
    padding: 9px;
    cursor: default;
  }

  .chrome-bottom .options-bar .search-bar .info:hover {
    background: rgba(128, 128, 128, 0.2);
  }

  .chrome-bottom .options-bar .search-bar .star {
    position: absolute;
    font-size: 12px;
    color: grey;
    padding: 6px;
    top: 5px;
    right: 27px;
    border-radius: 2px;
    cursor: default;
  }

  .chrome-bottom .options-bar .search-bar .star:hover {
    background: rgba(128, 128, 128, 0.2);
  }

  .chrome-bottom .options-bar .points-bar {
    border-radius: 3px;
  }

  .chrome-bottom .options-bar .points-bar a {
    color: #5a5a5a;
  }

  .chrome-bottom .options-bar .points-bar .points {
    display: inline-flex;
    transform: rotate(90deg);
    cursor: default;
    color: grey;
    margin-top: 6px;
    border-radius: 3px;
  }

  .chrome-bottom .options-bar .points-bar:hover {
    background: rgba(128, 128, 128, 0.2);
  }

  .chrome-bottom .bookmarks {
    float: left;
    flex: 0 0 24%;
    background: #f2f2f2;
  }

  .chrome-bottom .bookmarks .folder-book {
    cursor: default;
    border-radius: 1px;
    display: inline;
  }

  .chrome-bottom .bookmarks .folder-book a {
    font-size: 12px;
    padding-right: 8px;
    color: rgba(0, 0, 0, 0.836);
    cursor: default;
    padding-bottom: 3px;
  }

  .chrome-bottom .bookmarks .folder-book i {
    padding: 1px 8px 0px 10px;
    font-size: 16px;
    vertical-align: bottom;
  }

  .chrome-bottom .bookmarks .folder-book i.fa-css3-alt {
    color: #1b73ba;
  }

  .chrome-bottom .bookmarks .folder-book i.fa-windows {
    color: grey;
  }

  .chrome-bottom .bookmarks .folder-book:hover {
    background: #dfdfdf;
  }

  .chrome-bottom .bookmarks .folder-book:first-child {
    margin-left: 4px;
  }

  .chrome-bottom .bookmarks .folder-book:first-child a {
    vertical-align: baseline;
  }

  .chrome-bottom .bookmarks .folder-book span {
    background: #1f8dd6;
    padding: 1px 3px 0px 3px;
    font-size: 13px;
    color: white;
    vertical-align: text-top;
    margin-right: 8px;
    margin-left: 8px;
  }


  .item {
  width: 90%;
  margin: 20px auto;
  padding: 20px 0;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  .item_title {
    font-family: 'ymB';
    font-size: 2rem;
    margin-bottom: 20px;
    color: blue;
  }

  .item_content {
    font-family: 'ymL';
    font-size: 18px;
  }

  .item_info {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .item_date {
    font-size: 15px;
  }

  .fun-btn {
    /* change bg color to get different hues    */
    background-color: salmon;
    color: white;
    padding: 1em 2em;
    border: none;
    transition: all .3s ease;
    border-radius: 5px;
    letter-spacing: 2px;
    text-transform: uppercase;
    outline: none;
    align-self: center;
    cursor: pointer;
    font-weight: bold;
  }

  .fun-btn:hover {
    animation: random-bg .5s linear infinite, grow 1300ms ease infinite;
  }

  .start-fun {
    background-color: #fff !important;
    /* change color of button text when fun is started   */
    color: salmon !important;
  }

  /* pulsating effect on button */
  @keyframes grow {
    0% {
      transform: scale(1);
    }

    14% {
      transform: scale(1.3);
    }

    28% {
      transform: scale(1);
    }

    42% {
      transform: scale(1.3);
    }

    70% {
      transform: scale(1);
    }
  }



  </style>
