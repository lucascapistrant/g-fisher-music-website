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
      <p class="link-text link--arrow">View Score</p>
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
  max-width: 1000px;
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

.link-text {
  display: none;
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

@media screen and (min-width: 768px) {
.pieceScore {
  display: flex;
  flex-direction: row;
  align-items: center;
   padding: 1.5rem;
   border-radius: 30px;
   height: 13rem;
}

.score__img {
  border-radius: 30px;
  height: 10rem;
  width: 10rem;
}

.score__details {
  flex-grow: 1;
  height: 100%;
}

.score__name {
   font-size: 3.5rem;
}

.score__album {
  font-size: 2rem;
}

.score__link {
  border: none;
  flex-direction: column;
  width: fit-content;
}

.link-text {
  display: block;
  color: var(--color-secondary);
  font-weight: bold;
  text-wrap: nowrap;
}

.link-text:hover {
  margin-right: 12px;
}

.link-icon {
  display: none;
}
}
</style>
  