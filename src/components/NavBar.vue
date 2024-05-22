<template>
  <nav class="navBar">
    <i class="navBar__icon fa-solid fa-bars" id="navBarIcon"></i>
    <div class="navBar__body collapsable__content" v-if="isOpen">
        <a href="./" class="navBar__link music">music</a>
        <a href="./" class="navBar__link colorMode-toggle">Dark/light</a>   
    </div>
</nav>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        openNav() {   
            this.isOpen = !this.isOpen;
            
            if (this.isOpen) {
                this.navBarIcon.classList.remove('rotate-reverse');
                this.navBarIcon.classList.add('rotate-forward');
            } else {
                this.navBarIcon.classList.remove('rotate-forward');
                this.navBarIcon.classList.add('rotate-reverse');
            }

            setTimeout(() => {
                this.navBar.classList.toggle('open');
            }, 300);
        }

    },
    data() {
        return {
            isOpen: false,
        }
    },
    mounted() {
        this.navBar = document.querySelector('.navBar');
        this.navBarIcon = document.getElementById('navBarIcon');

        this.navBarIcon.addEventListener("click", this.openNav);
    }
}
</script>

<style>
.navBar {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
}

.navBar__icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 3.5rem;
  color: white;
  cursor: pointer;
  z-index: 2;
}

.navBar__body {
    height: 100vh;
    display: none;
    padding: 51px;
    color: white;
}

.navBar.open .navBar__body {
    display: flex;
    flex-direction: column;
    animation: slideIn .7s ease forwards;
}

.navBar__link {
    display: block;
    margin: 10px 0;
    color: var(--color-text);
    font-size: 4rem;
    text-decoration: none;
}

@keyframes slideIn {
  from {
    transform: translate(100%, -100%);
    background: #333;
    border-radius: 0 0 0 70%;
  }
  to {
    transform: translate(0);
    background: #333;
    border-radius: 0;
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