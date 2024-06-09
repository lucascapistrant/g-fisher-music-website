<template>
  <div class="container">
    <div id="mouse-effect" v-show="isDisplay"></div>
    <div id="blur"></div>
    <NavBar @changeColorMode="removeBlur" />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      isDisplay: true,
      mouseEffect: null
    };
  },
  mounted() {
    this.mouseEffect = document.getElementById('mouse-effect');
    if (window.innerWidth < 480) {
       this.mouseEffect.style.left = '50%'
    } else {
      document.body.addEventListener('pointermove', this.handleMouseMove);
    }
  },
  beforeUnmount() {
    document.body.removeEventListener('pointermove', this.handleMouseMove);
  },
  methods: {
    handleMouseMove(event) {
      const { clientX, clientY } = event;
      this.mouseEffect.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, {duration: 4000, fill: "forwards"})
    },
    removeBlur() {
      this.isDisplay = !this.isDisplay;
    }
  }
}
</script>

<style scoped>
#mouse-effect {
  height: 500px;
  width: 500px;
  position: fixed;
  border-radius: 50%;
  background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-accent)
      );
  transform: translate(-50%, -50%);
  z-index: -2;
  animation: glob 10s linear infinite;
}
#blur {
  height: 150%;
  width: 100%;
  position: fixed;
  z-index: -1;
  backdrop-filter: blur(200px);
}
</style>
