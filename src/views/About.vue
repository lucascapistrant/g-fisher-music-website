<template>
    <div class="page-padding"></div>
    <h1 class="page-header">About</h1>
    <Paragraph v-for="paragraph in paragraphs" :key="paragraph.id" :heading="paragraph.heading" :text="paragraph.text" />
    <div class="footer-margin"></div>
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
                    text: "George Fisher is a rising composer from the Twin Cities area in Minnesota. He started his composition career at the young age of 12 and released his first album two years later. He has been releasing a continuous stream of content ever since. George’s most recent works include his latest album <i>2023-2024 Collection Evolving Resonance</i>, and <i>EP Nocturne’s of the Stars</i>. In addition to composition, George's musical career extends to a variety of instruments including Clarinet, Saxophone, and Piano. While his primary focus of performance revolves around woodwinds, the diversity of timbre in his compositions is shown in “Within The Bazaar!” winning second place in the MBDA All-State composers competition. This piece has a wide variety of imagery, depth, and musicality. George’s music can be found on several platforms including Spotify, Youtube, and Apple Music."
                },
                {
                    id: 2,
                    heading: 'Lucas Capistrant',
                    text: `This website was designed and created by Lucas Capistrant. It is implemented using <a href="https://vuejs.org" target="_blank">VueJS</a>, a progressive JavaScript framework. If you would like to learn more about Lucas, you can check out his personal website, <a href="https://lucascapistrant.github.io/portfolio-website/index.html" target="_blank">lucascapistrant.github.io</a>. You can also see his GitHub profile <a href="https://github.com/lucascapistrant" target="_blank">here</a>.`
                }
            ]
        }
    }
}
</script>

<style>

</style>