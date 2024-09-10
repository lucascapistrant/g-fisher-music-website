<template>
    <footer>
        <div class="footer-background"></div>
        <div class="footer-content"><span class="footer-text desktop-only">If you would like to contact me, my email is</span><a href="mailto:george.fisher.something@gmail.com" class="footer-link">george.fisher.something@gmail.com</a></div>
    </footer>
</template>

<script>

export default {
    methods: {
        changeOpacity() {
          const scrollPosition = window.scrollY || document.documentElement.scrollTop;
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          const totalHeight = document.documentElement.scrollHeight;
          const scrollThreshold = 100; // 100 pixels from the bottom
          if(totalHeight - (scrollPosition + windowHeight) <= scrollThreshold) {
            this.footerBackground.classList.remove('unfade');
          } else {
            this.footerBackground.classList.add('unfade');
          }
        },
    },
    beforeDestroy() {
    window.removeEventListener('scroll', this.changeOpacity);
    },
    mounted() {
        this.footerBackground = document.querySelector('.footer-background');
        window.addEventListener('scroll', this.changeOpacity);
    }
}
</script>

<style scoped>
footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}
.footer-content {
    font-size: 1.7rem;
    color: var(--color-text);
    display: flex;
}
.footer-text {
    margin-right: 5px;
}
.footer-background {
    width: 100%;
    height: 100%;
    background: var(--color-secondary);
    filter: brightness(.7);
    position: absolute;
    z-index: -1;
}

.footer-link {
    font-family: var(--font-headings);
    color: var(--color-primary);
    font-weight: bolder;
}

.unfade {
  opacity: 1 !important;
}

@media screen and (min-width: 768px) {
    .footer-background {
        filter: none;
        opacity: .4;
    }
}

</style>