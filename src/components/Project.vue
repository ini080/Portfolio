<template>
  <div class="project">
    <div class="item" v-for="(item, index) in project" :key="index">
      <div class="item__title">{{ item.name }}</div>
      <img class="item__image" v-if="index==0" v-bind:src="autoparking" height="300">
      <img class="item__image" v-if="index==1" v-bind:src="smartblind" height="300"  width="100%">
      <img class="item__image" v-if="index==2" v-bind:src="safefood" height="300"   width="100%">
      <img class="item__image" v-if="index==3" v-bind:src="chatbot" height="300">
      <img class="item__image" v-if="index==4" v-bind:src="webmobile" height="300"   >
      <div class="item__info">
        <br>
        <div class="item__info__text">{{ item.info }}</div>
        <div class="item__info__text">{{ item.disc }}</div>
        <div class="item__info__text">{{ item.text }}</div>
      </div>
      <div class="item__info">
        <br>
        <div class="item__info__text">{{ item.date }}</div>
      </div>
      <br>
      <button class="item__more-button"
        @click="showPage(item.link)"
      >더보기</button>
    </div>
  </div>
</template>

<script>
import Project from '@/models/Project.js'

export default {
  data () {
    return {
      project: Project,
      autoparking : "https://github.com/ini080/public/blob/master/AutoParking.jpg?raw=true",
      smartblind : "https://github.com/ini080/public/blob/master/SmartBlind.png?raw=true",
      safefood : "https://github.com/ini080/public/blob/master/SafeFood.jpg?raw=true",
      webmobile : "https://github.com/ini080/public/blob/master/WebMobile.PNG?raw=true",
      chatbot : "https://github.com/ini080/public/blob/master/ChatBot.jpg?raw=true",

    }
  },
  computed: {

  },
  methods: {
    showPage (url) {
      if (url) {
        window.open(url)
      }
    }
  }
}
</script>

<style>
.project {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 0px 0px 5px 5px;
  overflow-y: auto;
  background-color: #eee;
}

.item__title{
  color: blue;
}
</style>
