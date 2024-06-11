<template>
    <div class="paragraph">
        <h1 class="paragraph__heading">{{ heading }}</h1>
        <p class="paragraph__text">{{ text }}</p>
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
.paragraph__heading {
    color: var(--color-primary);
    opacity: .9;
}
.paragraph__text {
    opacity: .8;
    width: 100%;
    text-wrap: wrap;
}
</style>