<template>
  <div class="page-padding"></div>
    <h1 class="page-header">Albums</h1>
    <Album 
      v-for="album in albums" 
      :key="album.id" 
      :title="album.title" 
      :description="album.description"
      :cover="album.cover"
      :link_spotify="album.link_spotify"
      :link_apple="album.link_apple"
      :link_amazon="album.link_amazon"
      :link_youtube="album.link_youtube"
    />
    <p class="footnote link-dashed">More Music to Come Soon!</p>
    <div class="footer-margin"></div>
</template>

<script>
import Album from '../components/Album.vue'

export default {
    components: {
        Album
    },
    data() {
    return {
      albums: [
        {
          id: 1,
          title: 'Evolving Resonance',
          description: 'This is a detailed description of Album One. It includes various details about the album, the artists involved, the genre, the release date, and other relevant information.',
          cover: require('../assets/images/covers/evolvingResonance.png'),
          link_spotify: 'https://open.spotify.com/album/1lZlVjxDLnOgcd9IwdhkDH',
          link_apple: 'https://music.apple.com/us/album/2023-2024-collection-evolving-resonance/1745468678',
          link_amazon: 'https://music.amazon.com/albums/B0D3Q2MMBQ',
          link_youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_n3aXjywj2t9HwAillIUX9jPrKgxfuj-HQ',
        },
      ]
    };
  }
}
</script>

<style>
</style>