<template>
    <footer id="footer">
        <div class="footer-background"></div>
        <div class="footer-content">
            <span class="footer-text desktop-only">If you would like to contact me, my email is</span>
            <a href="mailto:george.fisher.something@gmail.com" class="footer-link">george.fisher.something@gmail.com</a></div>
    </footer>
</template>

<script>

export default {
    name: 'Footer',
}
</script>

<style scoped>
footer {
    width: 100%;
    /* bottom: 0; */
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
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
    position: absolute;
    z-index: -1;
}

:root[data-theme="dark"] .footer-background {
    opacity: .4;
}

:root[data-theme="light"] .footer-background {
    opacity: .6;
}

.footer-link {
    font-family: var(--font-headings);
    color: var(--color-primary);
    font-weight: bolder;
    text-decoration: underline;
}

:root[data-theme="dark"] .footer-link {
}

:root[data-theme="light"] .footer-link {
    filter: brightness(.5);
}

</style>