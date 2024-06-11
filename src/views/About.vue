<template>
    <div class="page-padding"></div>
    <h1 class="page-header">About</h1>
    <Paragraph v-for="paragraph in paragraphs" :key="paragraph.id" :heading="paragraph.heading" :text="paragraph.text" />
</template>

<script>
import Paragraph from '../components/Paragraph.vue'

export default {
    components: {
        Paragraph,
    },
    data() {
        return {
            paragraphs: [
                {
                    id: 1,
                    heading: 'George Fisher',
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam adipisci a, quam eaque assumenda recusandae sed, cumque debitis architecto quis nostrum voluptas possimus sit aspernatur fuga, deleniti dolores officia blanditiis molestias. Nam iusto fuga neque ipsam delectus sint est illo? Facilis aperiam incidunt eum, reiciendis voluptas explicabo sit! Corporis, dolores."
                },
                {
                    id: 2,
                    heading: 'Lucas Capistrant',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam adipisci a, quam eaque assumenda recusandae sed, cumque debitis architecto quis nostrum voluptas possimus sit aspernatur fuga, deleniti dolores officia blanditiis molestias. Nam iusto fuga neque ipsam delectus sint est illo? Facilis aperiam incidunt eum, reiciendis voluptas explicabo sit! Corporis, dolores.'
                }
            ]
        }
    }
}
</script>

<style>

</style>