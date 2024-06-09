<template>
    <div class="info">
        <div class="info__img-container">
            <img src="../assets/images/g-fisher.png" alt="A picture of George" class="info__img">
        </div>
        <div class="bio">
            <header class="bio__header">Hi, I'm <span class="emphasis">George Fisher</span></header>
            <p class="bio__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis quaerat optio fugiat, doloribus molestias non in reiciendis eveniet modi doloremque quisquam dolorum nostrum est provident corrupti, eius ex adipisci.</p>
        </div>
        </div>
    <router-link to="/albums" class="link--arrow">Check Out My Music!</router-link>
</template>

<script>
export default {
    name: 'Info',
}
</script>

<style scoped>

.info {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: var(--color-text)
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