<template>
    <div class="page-content">
        <div class="info">
            <div class="info__img-container">
                <img src="../assets/images/g-fisher.png" alt="A picture of George" class="info__img">
            </div>
            <div class="bio">
                <header class="bio__header">Hi, I'm <span class="emphasis">George Fisher</span></header>
                <p class="bio__text">This area will be a breif description of you, what you do, and the website itself. The longer description of yourself you sent me is in the about page. I also need album descriptions, your email, and where you would like me to put your MuseScore link. Make sure to tell me anything you don't like/want changed. We can fine tune the website until it is to your liking.</p>
            </div>
            </div>
        <router-link to="/albums" class="link--arrow desktop-only">Check Out My Music!</router-link>
    </div>
</template>

<script>
export default {
    name: 'Info',
}
</script>

<style scoped>

.page-content {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: var(--color-text);
}
.info__img-container {
    width: 80%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 2px solid var(--color-secondary);
    margin: 40px;
    overflow: hidden;
    align-self: center;

}
.info__img {
    width: 100%;
}
.bio__header {
    text-align: center;
}

.link--arrow {
    color: var(--color-accent);
}

@media screen and (min-width: 768px) {
    .page-content {
        height: 100%;
        margin: auto;
        justify-content: center;
    }
    .info {
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .bio {
        width: 60%;
        max-width: 700px;
    }
    .info__img-container {
        width: 40%;
        max-width: 300px;
    }
}
</style>