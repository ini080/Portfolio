<template>
<div class="profile">

  <img class="picture" src="../../public/picture.jpg" />

  <div class="profile_info">
    <dl>
      <dt class="profile_name">허정건</dt>
      <dt class="profile_birthday">1994.04.26</dt>
      <dt class="profile_email">ini080@naver.com</dt>
      <dt class="profile_motto">좌우명</dt>
      <dt class="profile_motto_text">백문이 불여일타</dt>
      <dt class="profile_contact">Contact Me!</dt>
      <dd><a href="#"><i class="fas fa-envelope fa-2x"></i></a></dd>
      <dd><a href="#"><i class="fab fa-github-alt fa-2x"></i></a></dd>
      <dd><a href="#"><i class="fas fa-mobile fa-2x"></i></a></dd>
    </dl>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
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
        top: 50px;
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
        margin-bottom: 15px;
    }

    .profile_motto_text {
        margin-top: 5px;
        margin-bottom: 15px;
        font-size: 1.2rem;
        font-weight: bold;
        color: gray;
        -webkit-animation: bounce 1s alternate infinite;
        -moz-animation: bounce 1s alternate infinite;
        -ms-animation: bounce 1s alternate infinite;
        -o-animation: bounce 1s alternate infinite;
        animation: bounce 1s alternate infinite;
    }

    .profile_contact {
        margin-bottom: 5px;
    }

    dd {
        margin-right: 20px;
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

@-ms-keyframes bounce {
    0% {
        color: red;
    }

    25% {
        color: orange;
    }

    50% {
        color: green;
    }

    75% {
        color: blue;
    }
    100% {
        -ms-transform: scale(1.1);
        color: purple;
    }
}

@-o-keyframes bounce {
    0% {
        color: red;
    }

    25% {
        color: orange;
    }

    50% {
        color: green;
    }

    75% {
        color: blue;
    }
    100% {
        -o-transform: scale(1.1);
        color: purple;
    }
}

@-moz-keyframes bounce {
    0% {
        color: red;
    }

    25% {
        color: orange;
    }

    50% {
        color: green;
    }

    75% {
        color: blue;
    }
    100% {
        -moz-transform: scale(1.1);
        color: purple;
    }
}

@-webkit-keyframes bounce {
    0% {
        color: red;
    }

    25% {
        color: orange;
    }

    50% {
        color: green;
    }

    75% {
        color: blue;
    }
    100% {
        -webkit-transform: scale(1.1);
        color: purple;
    }
}

@keyframes bounce {
    0% {
        color: red;
    }

    25% {
        color: orange;
    }

    50% {
        color: green;
    }

    75% {
        color: blue;
    }
    100% {
        transform: scale(1.1);
        color: purple;
    }
}
</style>
