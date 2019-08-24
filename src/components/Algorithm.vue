<template>
  <div class="project">
    알고리즘

    <div id="app">
   <div class="view">
     <button :class="[ user_type === 'all' ? 'selected' : '']" @click="update_source('all')">All</button>
     <button :class="[ user_type === 'BOJ' ? 'selected' : '']" @click="update_source('BOJ')">BOJ</button>
     <button :class="[ user_type === 'SWexpert' ? 'selected' : '']" @click="update_source('SWexpert')">SWexpert</button>
   </div>
   <div v-for="algo in Algorithm" v-if="(algo.type === 'BOJ') || (user_type == 'all') ">

   <div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
          </div>
          <div class="media-content">
            <div class="content">
              <p><strong>{{algo.name}}</strong> <small></small></p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>

  <div v-for="algo in Algorithm" v-if="(algo.type === 'SWexpert') || (user_type == 'all') ">

  <div class="tweet">
     <div class="box">
       <article class="media">
         <div class="media-left">
         </div>
         <div class="media-content">
           <div class="content">
             <p><strong>{{algo.type}}{{algo.name}}</strong> <small></small></p>
           </div>
         </div>
       </article>
     </div>
   </div>
 </div>

 </div>

    </div>
</template>

<script>
import Algorithms from '@/models/Algorithm.js'

export default {
  data () {
    return {
      Algorithm: Algorithms,
      user_type : 'all',
    }
  },
  components: {
  },
  methods:{
    update_source(user_type){
      this.user_type = user_type;
    }
  }

}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Muli:400,800");
#body {
  height: 100%;
  background: #e6ecf1;
  font-family: 'Muli', sans-serif;
}

strong {
  font-weight: 800;
}

p {
  line-height: 1.2;
}
p + p {
  margin-top: 5px;
}

button {
  background-color: #43c594;
  border: 0;
  color: #fff;
  padding: 15px 20px;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
}
button:focus {
  outline: none;
}
button.selected {
  background-color: #2c8f6a;
}


.view {
  margin-bottom: 20px;
}
.view button + button {
  margin-left: 6px;
}

.tweet {
  background-color: #fff;
  color: #373737;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  padding: 30px;
}
.tweet + .tweet {
  margin-top: 20px;
}
.tweet .media {
  display: flex;
}
.tweet img {
  width: 64px;
  margin-right: 15px;
}
.tweet small {
  font-size: 14px;
  color: #657786;
}
</style>
