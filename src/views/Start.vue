<template>
  <body @click="urlgo" class="spotlight_body">
    <h1 class="spotlight_text">Login</h1>
    <div class="spotlight"></div>
  </body>
</template>

<script>

export default {
  name: 'HomePage',
  mounted() {
    this.spotlight()

  },
  methods : {
    spotlight() {
      window.addEventListener("DOMContentLoaded", () => {
        const spotlight = document.querySelector('.spotlight');
        let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';
        window.addEventListener('mousemove', e => updateSpotlight(e));
        window.addEventListener('mousedown', e => {
          spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';
          updateSpotlight(e);
        });
        window.addEventListener('mouseup', e => {
          spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';
          updateSpotlight(e);
        });
        function updateSpotlight(e) {
          spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
        }
      });
    },
    urlgo() {
        this.$router.push({name:'Home'})
    }
  }
}
</script>

<style>
.spotlight_body {
    background: url(../../public/window_login.jpg) no-repeat center;
    background-size: cover;
    height: 100vh;
    cursor: none;
}

.spotlight_text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    font-family: "Roboto", Arial, sans-serif;
    font-size: calc(20px + 2vw);
    font-weight: 700;
    color: #fafafa;
    text-shadow: 2px 2px 2px #000;
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
}
.spotlight {
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
        circle,
        transparent 160px,
        rgba(0, 0, 0, 0.85) 200px
    );
}
</style>
