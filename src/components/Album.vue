<template>
  <div class="album">
    <div class="album__background"></div>
    <img :src="cover" alt="ALbum Cover" class="album__cover">
    <div class="albumDetails">
      <header class="albumDetails__header">{{ title }}</header>
      <p class="albumDetails__description">{{ description }}</p>
      <div class="albumDetails__links">
        <a :href="link_spotify" target="_blank" class="albumDetails__link"><img src="../assets/images/spotify.svg" alt="Spotify Logo"></a>
        <a :href="link_apple" target="_blank" class="albumDetails__link"><img src="../assets/images/apple.svg" alt="Apple Music Logo"></a>
        <a :href="link_amazon" target="_blank" class="albumDetails__link"><img src="../assets/images/amazon.svg" alt="Amazon Music Logo"></a>
        <a :href="link_youtube" target="_blank" class="albumDetails__link"><img src="../assets/images/youtube.svg" alt="Youtube Logo"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      required: true
    },
    link_spotify: {
      type: String,
      required: false
    },
    link_apple: {
      type: String,
      required: false
    },
    link_amazon: {
      type: String,
      required: false
    },
    link_youtube: {
      type: String,
      required: false
    },
  }
};
</script>

<style scoped>
.album {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 20px;
  overflow: hidden;
  border-radius: 30px;
  border: 1px solid var(--color-text);
}
.album__background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--color-primary);
  opacity: .5;
  z-index: -1;
}
.album__cover {
  width: 70%;
  border-radius: 30px;
}

.albumDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.albumDetails__header {
  text-align: center;
  margin: 10px;
}

.albumDetails__links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 300px;
}

@media screen and (min-width: 768px) {
  .album {
    flex-direction: row;
    max-width: 1000px;
    align-items: self-start;
  }
  .album__cover {
    width: 200px;
    margin-right: 20px;
  }
  .albumDetails {
    justify-content: left;
    align-items: start;
  }
  .albumDetails__header {
    text-align: left;
    margin: 0;
  }
  .albumDetails__description {
    font-size: 1.7rem;
  }
  .albumDetails__links {
    position: absolute;
    bottom: 20px;
    max-width: 300px;
    width: 100%;
    justify-content: space-between;
  }
  .albumDetails__link {
    transition: scale .1s ease-in-out;
  }
  .albumDetails__link:hover {
    scale: 1.1;
  }
}
</style>