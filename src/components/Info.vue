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
    margin: 20px;
    overflow: hidden;
    align-self: center;

}
.info__img {
    width: 100%;
}
.bio__header {
    text-align: center;
}

@media screen and (min-width: 700px) {
    .info {
        flex-direction: row;
        max-width: 1000px;
    }
    .bio {
        align-self: center;
    }
}
</style>