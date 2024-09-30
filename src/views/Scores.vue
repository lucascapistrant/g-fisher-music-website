<template>
    <div class="page-padding"></div>
    <h1 class="page-header">Scores</h1>
    <PdfLink v-for="path in pdfPaths" :key="path.id" :name="path.name" :album="path.album" :pdfPath="path.path" :cover="path.cover" />
  </template>
  
  <script>
  import PdfLink from '@/components/PdfLink.vue';
  
  export default {
    name: 'Scores',
    components: {
      PdfLink
    },
    data() {
      return {
        pdfPaths: [
          {
            id: 1,
            name: 'A Winter Night',
            album: null,
            path: '/pdf/awn.pdf',
            cover: require('../assets/images/covers/awinternight.webp')
          },
          {
            id: 2,
            name: 'Within The Bazaar!',
            album: 'Evolving Resonance',
            path: '/pdf/wtb.pdf',
            cover: require('../assets/images/covers/evolvingResonance.png')
          },
        ]
      };
    },
  }
  </script>
  
  <style>
  </style>
  