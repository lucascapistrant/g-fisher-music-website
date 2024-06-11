<template>
    <div class="page-content">
        <div class="info">
            <div class="info__img-container">
                <img src="../assets/images/g-fisher.png" alt="A picture of George" class="info__img">
            </div>
            <div class="bio">
                <header class="bio__header">Hi, I'm <span class="emphasis">George Fisher</span></header>
                <p class="bio__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores voluptatum repudiandae quibusdam dolore ad officia, quis assumenda dolor nihil, maxime voluptatem omnis? Ratione expedita quasi voluptas cum debitis voluptates quas ullam obcaecati amet porro possimus esse a provident laudantium velit optio sit quos, in temporibus fugit. Veritatis voluptatibus illo cum beatae earum ipsa a, praesentium, quasi nemo maiores illum assumenda obcaecati sit provident quaerat ea inventore rem animi aspernatur sunt libero error corporis nulla. Eum corrupti saepe quae aliquid, sapiente id explicabo nulla ab sunt! Minus maxime fugiat ratione, ab natus praesentium quos, quia laborum earum iure beatae enim porro!</p>
            </div>
            </div>
        <router-link to="/albums" class="link--arrow desktop-only">Check Out My Music!</router-link>
        <div class="footer-margin mobile-only"></div>
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

@media screen and (min-width: 768px) {
    .page-content {
        height: 100vh;
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