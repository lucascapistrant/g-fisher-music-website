<template>
    <div class="page-padding"></div>
    <h1 class="page-header">Scores</h1>
    <PdfLink v-for="path in pdfPaths" :key="path.id" :pdfPath="path.path" />
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
            path: '/pdf/composition_upload(3).pdf'
          },
          {
            id: 2,
            path: '/pdf/Within The Bazaar!.pdf'
          },
        ]
      };
    },
  }
  </script>
  
  <style>
  </style>
  