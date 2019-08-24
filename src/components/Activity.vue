<template>
<div class="activity">
  <div class="item" v-for="(item, index) in Achive" :key="index">
    <div class="item_title">{{ item.name }}</div>
    <img class="item_image" v-if="index==0" src="@/assets/activity/capstone.jpg" height="300">
    <img class="item_image" v-if="index==1" src="@/assets/activity/ssafy.jpg" height="350">
    <img class="item_image style_border" v-if="index==2" src="@/assets/activity/expert.png" height="100" width="90%">
    <img class="item_image" v-if="index==3" src="@/assets/activity/ssafy2.jpg" height="450">

    <div class="item_content">
      <br>
      <div class="item_info">{{ item.info }}</div>
      <div class="item_disc">{{ item.disc }}</div>
      <div class="item_text">{{ item.text }}</div>
    </div>

    <br>
    <div class="item_date">{{ item.date }}</div>
    <br>

  </div>
</div>
</template>

<script>
import Achive from '@/models/Activity.js'

export default {
  data() {
    return {
      Achive: Achive
    }
  },
}
</script>

<style>
.activity {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 0px 0px 5px 5px;
  overflow-y: auto;
  background-color: #eee;
}

.style_border{
  margin-top: 10px;
  border:2px solid black;
}
</style>
