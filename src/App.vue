<template>
  <div class="container">
    <div id="mouse-effect" v-show="isDisplay"></div>
    <div id="blur"></div>
    <NavBar @changeColorMode="removeBlur" />
    <main>
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
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
  height: 300px;
  width: 300px;
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
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  z-index: -1;
  backdrop-filter: blur(200px);
}

@media screen and (max-width: 768px) {
  #mouse-effect {
    height: 500px;
    width: 100%;
  }
}
</style>
