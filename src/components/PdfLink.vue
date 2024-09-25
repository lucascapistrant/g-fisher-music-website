<template>
  <div class="pieceScore">
    <img class="score__img" :src="cover" alt="">
    <div class="score__details">
      <h2 class="score__name">{{ name }}</h2>
      <p v-if="album" class="score__album">from <i class="albumName">{{ album }}</i></p>
    </div>
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
      name: {
        type: String,
        required: true,
      },
      cover: {
        type: String,
        required: true,
      },
      album: {
        type: String,
        required: false,
      }
    },
  }
</script>
  
<style>
main {
    width: 100%;
}

.pieceScore {
  background: red;
  width: 90%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  flex-direction: row;
  padding: 1rem;
  border-radius: 20px;
}

.score__img {
  width: 100%;
  height: fit-content;
}

.score__details {
  width: 100%;
  padding-left: 10px;
}

.score__name {
  margin: 0;
  margin-bottom: .5rem;
}

.score__album {
  font-size: 1.5rem;
  margin: 0;
  opacity: .8;
}
</style>
  