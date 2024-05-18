<template>
  <div class="container">
    <div id="mouse-effect" v-if="isDisplay"></div>
    <div id="blur"></div>

    <Info/>
  </div>
</template>

<script>
import Info from './components/Info.vue'

export default {
  name: 'App',
  components: {
    Info
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
    }
  }
}
</script>

<style scoped>
#mouse-effect {
  height: 350px;
  width: 350px;
  position: fixed;
  border-radius: 50%;
  background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-secondary)
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
