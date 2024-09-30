<template>
  <nav class="navBar">
    <header class="navBar__header"><router-link class="navBar__header__heading" to="/">George Fisher</router-link></header>
    <div class="navBar__background"></div>
    <i class="navBar__icon fa-solid fa-bars" id="navBarIcon"></i>
    <div class="navBar__body">
        <router-link to="/" class="navBar__link">Home</router-link>
        <router-link to="/albums" class="navBar__link">Music</router-link>
        <router-link to="/scores" class="navBar__link">Scores</router-link>
        <router-link to="/about" class="navBar__link">About</router-link>
        <a href="https://musescore.com/user/41619255" target="_blank" class="navBar__link">MuseScore</a>
        <i class="navBar__link lightModeCont">
          <i class="fa-solid fa-moon lightmode moon" style="display: none"></i>
          <i class="fa-solid fa-sun lightmode sun"></i>
        </i>
    </div>
</nav>
</template>

<script>
export default {

    name: 'NavBar',
    methods: {
        openNav() {
          if(window.innerWidth < 768) {
            this.isOpen = !this.isOpen;
            
            if (this.isOpen) {
                this.navBarIcon.classList.remove('rotate-reverse');
                this.navBarIcon.classList.add('rotate-forward');
            } else {
                this.navBarIcon.classList.remove('rotate-forward');
                this.navBarIcon.classList.add('rotate-reverse');
            }

            setTimeout(() => {
                if(this.isOpen) {
                  this.navBarBody.style.animation = 'slideIn .7s ease forwards';
                  this.navBarBody.style.padding = '30px';
                  this.body.style.overflow = 'hidden';
                  this.navBarOptions.forEach(option => {
                    option.style.display = 'block';
                  });
                } else {
                  this.navBarBody.style.animation = 'slideOut .7s ease forwards';
                  this.navBarBody.style.padding = '0';
                  this.body.style.overflow = 'auto';
                  this.navBarOptions.forEach(option => {
                    option.style.display = 'none';
                  });
                }
            }, 300);
          }
        },
        colorModes() {
          this.$emit('changeColorMode')
          if (this.root.getAttribute('data-theme') === 'light') {
              this.root.setAttribute('data-theme', 'dark');
              this.lightmodes_Moon.style.display = 'none'
              this.lightmodes_Sun.style.display = 'block'
          } else {
              this.root.setAttribute('data-theme', 'light');
              this.lightmodes_Sun.style.display = 'none'
              this.lightmodes_Moon.style.display = 'block'
          }
        },
        changeOpacity() {
          const scrollPosition = window.scrollY || document.documentElement.scrollTop;
          const scrollThreshold = 100;
          if(scrollPosition > scrollThreshold) {
            this.navBarBackground.classList.add('unfade');
          } else {
            this.navBarBackground.classList.remove('unfade');
          }

        },
    },
    data() {
        return {
            isOpen: false,
        }
    },
    beforeDestroy() {
    window.removeEventListener('scroll', this.changeOpacity);
    },
    mounted() {
      this.root = document.documentElement;

        this.navBar = document.querySelector('.navBar');
        this.navBarBody = document.querySelector('.navBar__body');
        this.body = document.body;
        this.navBarBackground = document.querySelector('.navBar__background')
        this.navBarIcon = document.getElementById('navBarIcon');
        this.navBarOptions = document.querySelectorAll('.navBar__link');
        
        this.navBarIcon.addEventListener("click", this.openNav);

        // close navBar after clicking a link
        this.navBarOptions.forEach((option) => {
          if(!option.classList.contains('lightModeCont')) {
            option.addEventListener('click', this.openNav); 
          }
        })

        // dark/light mode initialization
        this.lightModeCont = document.querySelector('.lightModeCont');
      
        this.lightmodes_Sun = document.querySelector('.sun');
        this.lightmodes_Moon = document.querySelector('.moon');

        this.lightModeCont.addEventListener("click", this.colorModes);

        // change navBar opacity when scrolling down
        window.addEventListener('scroll', this.changeOpacity);
    }
}
</script>

<style>
.navBar {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
}

.navBar__header {
  display: none;
}

.navBar__icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 3.5rem;
  color: var(--color-text);
  cursor: pointer;
  z-index: 100;
}

.navBar__body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: white;
}

.navBar__link {
    display: none;
    color: var(--color-text);
    font-family: var(--font-body);
    font-size: 4rem;
    text-decoration: none;
    margin: .5rem 0;
}

.navBar__link--icon {
  position: absolute;
  bottom: 50px;
}

.unfade {
  opacity: 1 !important;
}

@media screen and (min-width: 768px) {
.navBar {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  height: 70px;
  z-index: 100;
}

.navBar__background {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: var(--color-primary);
  transition: opacity .2s ease-in-out;
}

:root[data-theme="dark"] .navBar__background {
  opacity: .4;
}

:root[data-theme="light"] .navBar__background {
  opacity: .8;
  filter: brightness(.8);
}

.navBar__icon {
  display: none;
}

.navBar__header {
  display: block;
  padding: 0 10px 5px 10px;
  flex-grow: 1;
}

.navBar__header__heading {
  color: var(--color-text);
  text-decoration: none;
}

.navBar__body {
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 0;
  color: white;
}

.navBar__link {
  display: block;
  margin: 0 2.5rem;
  color: var(--color-text);
  font-size: 2.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: all .1s ease-out;
}

.navBar__link:hover {
  transform: scale(1.1);
}

.navBar__link--icon {
  position: relative;
  bottom: 0;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightModeCont {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
}

.lightModeCont:hover {
  animation: spin 30s linear;
}
}

@keyframes slideIn {
  from {
    z-index: 100;
    transform: translate(100%, -100%);
    background: var(--color-accent);
    border-radius: 0 0 0 100%;
    width: 0;
  }
  to {
    z-index: 100;
    transform: translate(0);
    background: var(--color-accent);
    border-radius: 0;
    width: 100vw;
  }
}

@keyframes slideOut {
  0% {
    z-index: 100;
    transform: translate(0);
    background: var(--color-accent);
    border-radius: 0;
    width: 100vw;
  }
  99% {
    z-index: 100;
    transform: translate(100%, -100%);
    background: var(--color-accent);
    border-radius: 0 0 0 100%;
    width: 0;
  }
  100% {
    z-index: 0;
    transform: translate(0);
  }
}

@keyframes rotateForward {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(45deg);
  }
}

@keyframes rotateReverse {
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.rotate-forward {
  animation: rotateForward .5s cubic-bezier(0.615, -2, 0.735, 0.045) forwards;
}

.rotate-reverse {
  animation: rotateReverse .5s cubic-bezier(0.615, -2, 0.735, 0.045) forwards;
}

</style>