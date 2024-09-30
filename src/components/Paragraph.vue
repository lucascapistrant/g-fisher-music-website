<template>
    <div class="paragraph">
        <h1 class="paragraph__heading">{{ heading }}</h1>
        <div class="paragraph__main">
            <p class="paragraph__text" v-html="text"></p>
            <img class="paragraph__img" v-if="img" :src="img" alt="A picture of george">
        </div>
    </div>
</template>

<script>

export default {
    props: {
        heading: {
            type: String,
            required: false,
        },
        text: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: false,
        }
    }
}
</script>


<style scoped>
.paragraph {
    width: 90%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.paragraph__main {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.paragraph__img {
    width: 30%;
    height: fit-content;
    margin: 20px;
    border-radius: 30px;
}

.paragraph__heading {
    color: var(--color-accent);
    opacity: .9;
    text-align: center;
}
.paragraph__text {
    opacity: .8;
    width: 100%;
    text-wrap: wrap;
    word-wrap: normal;
}

:root[data-theme="light"] .paragraph__text {
    opacity: 1;
}

@media screen and (max-width: 1000px) {
    .paragraph__img {
        display: none;
    }
}

</style>