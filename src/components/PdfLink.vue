<template>
  <div class="pieceScore">
    <h2>Piece Name</h2>
    <a :href="pdfPath" target="_blank">See Score</a>
  </div>
</template>
  
<script>
  export default {
    name: "PdfLink",
    props: {
      pdfPath: {
        type: String,
        required: true,
      },
    }
  }
</script>
  
<style>
main {
    width: 100%;
}
iframe {
    width: 500px;
    height: 1000px;
}
</style>
  