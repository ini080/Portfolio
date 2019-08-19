<template>
  <div class="project">
    <div class="item" v-for="(item, index) in project" :key="index">
      <div class="item__title">{{ item.name }}</div>
      <img class="item__image" :src="item.img">
      <div class="item__info">
        <b class="item__info__text--blue">정보 </b>
        <div class="item__info__text">{{ item.info }}</div>
        <div class="item__info__text">{{ item.disc }}</div>
      </div>
      <div class="item__info">
        <b class="item__info__text--blue">날짜</b>
        <div class="item__info__text">{{ item.date }}</div>
      </div>
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
      project: Project
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
</style>
