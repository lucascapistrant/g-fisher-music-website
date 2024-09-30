<template>
  <div class="pieceScore">
    <div class="score__background"></div>
    <img class="score__img" :src="cover" alt="">
    <div class="score__details">
      <h2 class="score__name">{{ name }}</h2>
      <p v-if="album" class="score__album">from <i class="albumName">{{ album }}</i></p>
      <p v-else class="score__album">Single</p>
    </div>
    <a class="score__link" :href="pdfPath" target="_blank">
      <i class="fa-solid fa-arrow-up-from-bracket link-icon"></i>
    </a>
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
  position: relative;
  width: 90%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  padding: 1rem;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.score__img {
  width: 100%;
  height: fit-content;
  border-radius: 20px;
}

.score__details {
  width: 100%;
  padding: 0 10px;
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

.score__link {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid var(--color-accent);
  border-radius: 20px;
}

.link-icon {
  font-size: 40px;
  color: var(--color-accent);
  z-index: -1;
}

.score__background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--color-primary);
  z-index: -1;
}

:root[data-theme="dark"] .score__background {
  opacity: .6;
}

:root[data-theme="light"] .score__background {
  filter: brightness(.5);
}
</style>
  