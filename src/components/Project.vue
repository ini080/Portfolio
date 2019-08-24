<template>
<div class="project">
  <div class="item" v-for="(item, index) in project" :key="index">
    <div class="item_title">{{ item.name }}</div>
    <img class="item_image" v-if="index==0" src="@/assets/project/AutoParking.jpg" height="300">
    <img class="item_image" v-if="index==1" src="@/assets/project/SmartBlind.png" height="300" width="90%">
    <img class="item_image" v-if="index==2" src="@/assets/project/SafeFood.jpg" height="300" width="80%">
    <img class="item_image" v-if="index==3" src="@/assets/project/ChatBot.jpg" height="300">
    <img class="item_image" v-if="index==4" src="@/assets/project/WebMobile.jpg" height="300" width="80%">

    <div class="item_content">
      <br>
      <div class="item_info">{{ item.info }}</div>
      <div class="item_disc">{{ item.disc }}</div>
      <div class="item_text">{{ item.text }}</div>
    </div>

    <br>
    <div class="item_date">{{ item.date }}</div>
    <br>

    <button class="item_button fun-btn" v-if="(index == 0) || (index == 1)" @click="showPage(item.link,index)">동영상보기</button>
    <button class="item_button fun-btn" v-else @click="showPage(item.link,index)">더보기</button>
  </div>
</div>
</template>

<script>
import Project from '@/models/Project.js'

export default {
  data() {
    return {
      project: Project,
    }
  },
  computed: {

  },
  methods: {
    showPage(url, idx) {
      if (idx == 0) {
        window.open('https://youtu.be/ubBWLg_unf4')
      } else if (idx == 1) {
        window.open('https://youtu.be/3QlQ6UJwFwA')
      } else {
        if (url) {
          window.open(url)
        }
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

</style>
