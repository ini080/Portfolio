<template>
<div class="project">
  <div class="view">
    <button :class="[ user_type === 'all' ? 'selected item_button' : 'item_button']" @click="update_source('all')">All</button>
    <button :class="[ user_type === 'BOJ' ? 'selected item_button' : 'item_button']" @click="update_source('BOJ')">BOJ</button>
    <button :class="[ user_type === 'SWexpert' ? 'selected item_button' : 'item_button']" @click="update_source('SWexpert')">SWexpert</button>

    <div v-if="user_type == 'all'">
      <div v-for="item in Algorithm">
        <div class="item">
          <div class="item_title">{{ item.name }}
            <div>{{item.site}} {{item.number}}</div>
          </div>

          <div><strong class="item_disc">{{ item.disc }}</strong></div>
          <div>{{item.type}}</div>
          <div>{{item.date}}</div>
          <button class="fun-btn" @click="onClick(item.link)">풀러가기</button>
        </div>
      </div>
    </div>

    <div v-else-if="user_type =='BOJ'">
      <div class="" v-for="item in Algorithm" v-if="item.site =='BOJ'">
        <div class="item">
          <div class="item_title">{{ item.name }}
            <div>{{item.site}} {{item.number}}</div>
          </div>

          <div><strong class="item_disc">{{ item.disc }}</strong></div>
          <div>{{item.type}}</div>
          <div>{{item.date}}</div>
          <button class="fun-btn" @click="onClick(item.link)">풀러가기</button>
        </div>
      </div>
    </div>

    <div v-else-if="user_type =='SWexpert'">
      <div class="" v-for="item in Algorithm" v-if="item.site =='SWexpert'">
        <div class="item">
          <div class="item_title">{{ item.name }}
            <div>{{item.site}} {{item.number}}</div>
          </div>

          <div><strong class="item_disc">{{ item.disc }}</strong></div>
          <div>{{item.type}}</div>
          <div>{{item.date}}</div>
          <button class="fun-btn" @click="onClick(item.link)">풀러가기</button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import Algorithm from '@/models/Algorithm.js'

export default {
  data() {
    return {
      Algorithm: Algorithm,
      user_type: 'all',
    }
  },
  components: {},
  methods: {
    update_source(user_type) {
      this.user_type = user_type;
    },
    onClick(url) {
      window.open(url)
    }
  }

}
</script>

<style>
@font-face {
  font-family: 'ymB';
  src: url("../assets/font/ymB.ttf") format('truetype')
}

@font-face {
  font-family: 'ymL';
  src: url("../assets/font/ymL.ttf") format('truetype')
}

.item_title div {
  font-size: 15px;
  color: gray;
}

.fun-btn{
  padding: 0 0 0 0;
  text-align: center;
  margin-top: 10px;
}

@-webkit-keyframes sheen {
  0% {
    -webkit-transform: skewY(-45deg) translateX(0);
            transform: skewY(-45deg) translateX(0);
  }
  100% {
    -webkit-transform: skewY(-45deg) translateX(12.5em);
            transform: skewY(-45deg) translateX(12.5em);
  }
}
@keyframes sheen {
  0% {
    -webkit-transform: skewY(-45deg) translateX(0);
            transform: skewY(-45deg) translateX(0);
  }
  100% {
    -webkit-transform: skewY(-45deg) translateX(12.5em);
            transform: skewY(-45deg) translateX(12.5em);
  }
}


.item_button {
  margin-left: 6px;
  margin-top: 20px;
  padding: 0.25em 1.5em;
  text-align: center;
  text-decoration: none;
  color: #2194E0;
  border: 2px solid #2194E0;
  font-size: 24px;
  display: inline-block;
  border-radius: 0.3em;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
}
.item_button:before {
  content: "";
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  width: 3em;
  display: block;
  position: absolute;
  top: 0;
  left: -4.5em;
  -webkit-transform: skewX(-45deg) translateX(0);
          transform: skewX(-45deg) translateX(0);
  transition: none;
}
.item_button:hover {
  background-color: #2194E0;
  color: #fff;
  border-bottom: 4px solid #1977b5;
}
.item_button:hover:before {
  -webkit-transform: skewX(-45deg) translateX(13.5em);
          transform: skewX(-45deg) translateX(13.5em);
  transition: all 0.5s ease-in-out;
}

</style>
