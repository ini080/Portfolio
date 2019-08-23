<template>
  <div class="project">
    <div class="item" v-for="(item, index) in project" :key="index">
      <div class="item__title">{{ item.name }}</div>
      <img class="item__image" v-if="index==0" src="@/assets/project/AutoParking.jpg" height="300">
      <img class="item__image" v-if="index==1" src="@/assets/project/SmartBlind.png" height="300"  width="90%">
      <img class="item__image" v-if="index==2" src="@/assets/project/SafeFood.jpg" height="300"   width="80%">
      <img class="item__image" v-if="index==3" src="@/assets/project/ChatBot.jpg" height="300">
      <img class="item__image" v-if="index==4" src="@/assets/project/WebMobile.jpg" height="300"  width="80%" >
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
  font-size: 2rem;
  margin-bottom: 10px;
  color: blue;
}
</style>
