<template>
  <div class="album">
    <div class="album__background"></div>
    <img :src="cover" alt="ALbum Cover" class="album__cover">
    <div class="albumDetails">
      <header class="albumDetails__header">
        <h1 class="title">{{ title }}</h1>
        <div class="albumStats">
          <p>{{ release }}</p>
          <p>{{ type }}</p>
        </div>
      </header>
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
    release: {
      type: String,
      required: true
    },
    type: {
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
  },
  mounted() {
    const musicLinks = document.querySelectorAll('.albumDetails__link');
    musicLinks.forEach(link => {
      if(!link.href) {
        link.style.filter = 'brightness(.5)'
        link.addEventListener('mouseover', () => {
          link.style.scale = 1;
        })
      }
    })
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
  margin-bottom: 3rem;
}

header {
  width: 100%;
}

.title {
  margin: 0;
}

.albumStats {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: .5rem 0 0 0;
}

.albumStats p {
  margin: 0;
  opacity: .7;
  color: var(--color-secondary);
}

.album__background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--color-primary);
  z-index: -1;
}

:root[data-theme="dark"] .album__background {
  opacity: .6;
}

:root[data-theme="light"] .album__background {
  filter: brightness(.5);
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

:root[data-theme="light"] .title {
  color: var(--color-text-neg);
}

:root[data-theme="light"] .albumStats {
  color: var(--color-secondary);
  filter: brightness(1.5);
}

.albumDetails__description {
  opacity: .8;
}

:root[data-theme="light"] .albumDetails__description {
  color: var(--color-text-neg);
}

.albumDetails__links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 300px;
}

:root[data-theme="light"] .albumDetails__link {
  filter: none;
}

@media screen and (min-width: 768px) {
  .album {
    flex-direction: row;
    max-width: 1000px;
    align-items: self-start;
    min-height: 242px;
    height: fit-content;
    align-items: center;
  }

  .album__cover {
    width: 200px;
    margin-right: 20px;
  }

  .albumDetails {
    height: 100%;
    justify-content: left;
    align-items: start;
    flex-grow: 1;
  }

  .albumDetails__header {
    text-align: left;
    margin: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  .albumStats {
    display: flex;
    flex-direction: column;
    text-align: right;
    height: fit-content;
  }

  .albumDetails__description {
    font-size: 1.7rem;
    min-height: 60px;
    margin: 5 0 29px 0;
  }

  .albumDetails__links {
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