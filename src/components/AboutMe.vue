<template>
<div class="profile">

  <img class="picture" src="../../public/picture.jpg" />

  <div class="profile_info">
    <dl>
      <dt class="profile_name">허정건</dt>
      <dt class="profile_birthday">1994.04.26</dt>
      <dt class="profile_email">ini080@naver.com</dt>
      <dt class="profile_motto">좌우명</dt>
      <dt class="animated heartBeat profile_motto_text">백문이 불여일타</dt>
      <dt class="profile_contact">Contact Me😍</dt>
      <dd><a href="#" @click="onClick(1)"><i class="fas fa-envelope fa-2x"></i></a></dd>
      <dd><a href="#" @click="onClick(2)"><i class="fab fa-github-alt fa-2x"></i></a></dd>
      <dd><a href="#"  @click="onClick(3)"><i class="fas fa-mobile fa-2x"></i></a></dd>
    </dl>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onClick(n) {
      if (n == 1) {
        window.open('mailto:ini080@naver.com')
      } else if (n == 2) {
        window.open('https://github.com/ini080')
      } else{
        alert("010-XXXX-XXXX")
      }

    }
  }
}
</script>

<style lang="scss">
.profile {
    width: 100%;
    height: 100%;

    .picture {
        position: relative;
        left: -170px;
        top: 65px;
        width: 200px;
        height: auto;
        border: 5px solid #fff;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    }
    .profile_info {
        position: relative;
        left: 100px;
        top: -160px;
        font-size: 1rem;
        font-weight: bold;
    }
    .profile_name {
        font-size: 2.5rem;
        margin-bottom: 5px;
    }
    .profile_birthday {
        font-size: 0.8rem;
    }
    .profile_email {
        font-size: 0.8rem;
        margin-bottom: 20px;
    }

    .profile_motto_text {
        margin-top: 5px;
        margin-bottom: 20px;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .profile_contact {
        margin-bottom: 10px;
    }

    dd {
        margin-right: 25px;
        display: inline;
    }
    a:link {
        text-decoration: none;
        color: #000000;
    }
    a:visited {
        text-decoration: none;
        color: #000000;
    }
    a:active {
        text-decoration: none;
        color: #000000;
    }

}


@-webkit-keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes heartBeat {
  0% {
    color: red;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {

    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    color: blue;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    color:green;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.heartBeat {
  -webkit-animation-name: heartBeat;
  animation-name: heartBeat;
  -webkit-animation-duration: 1.3s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count:infinite;
}
</style>
