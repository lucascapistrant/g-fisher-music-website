<template>
    <footer>
        <div class="footer-background"></div>
        <div class="footer-content"><span class="footer-text desktop-only">If you would like to contact me, my email is</span><a href="mailto:george.fisher.something@gmail.com" class="footer-link">george.fisher.something@gmail.com</a></div>
    </footer>
</template>

<script>
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
    background: var(--color-primary);
    filter: brightness(.7);
    position: absolute;
    z-index: -1;
}

.footer-link {
    font-family: var(--font-headings);
    color: var(--color-secondary);
    font-weight: bolder;
}

@media screen and (min-width: 768px) {
    .footer-background {
        filter: none;
        opacity: .4;
    }
}

</style>