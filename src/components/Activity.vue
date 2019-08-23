<template>
  <div class="project">
    <div class="item" v-for="(item, index) in Achive" :key="index">
      <div class="item__title">{{ item.name }}</div>
      <img class="item__image" v-if="index==0" src="@/assets/activity/capstone.jpg" height="300">
      <img class="item__image" v-if="index==1" src="@/assets/activity/ssafy.jpg" height="300">
      <img class="item__image" v-if="index==2" src="@/assets/activity/expert.png" height="300" width="90%">

      <div class="item__info">
        <div class="item__info__text">{{ item.info }}</div>
        <div class="item__info__text">{{ item.disc }}</div>
      </div>
      <div class="item__info">
        <br>
        <div class="item__info__text">{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Achive from '@/models/Activity.js'

export default {
  data () {
    return {
      Achive: Achive
    }
  },
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
