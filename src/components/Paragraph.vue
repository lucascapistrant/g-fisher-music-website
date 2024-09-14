<template>
    <div class="paragraph">
        <h1 class="paragraph__heading">{{ heading }}</h1>
        <p class="paragraph__text" v-html="text"></p>
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
.paragraph__heading {
    color: var(--color-accent);
    opacity: .9;
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

</style>