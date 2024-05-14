<template>
  <div class="container">
    <div id="mouse-effect" v-if="isDisplay"></div>
    <div id="blur"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
      this.isDisplay = false;
    }
    document.body.addEventListener('pointermove', this.handleMouseMove);
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

<style>
:root {
  --color-background: #0D121F;
  --color-primary: #D25C01;
  --color-secondary: #18B7C9;
}
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: var(--color-background);
}
#mouse-effect {
  height: 300px;
  width: 300px;
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

/* animations */
@keyframes glob {
  0% {
    transform: rotate(0deg) scale(1) skew(0deg);
  }
  50% {
    transform: rotate(180deg) scale(1.5) skew(15deg);
  }
  100% {
    transform: rotate(360deg) scale(1) skew(0deg);
  }
}
</style>
