<template>
  <div class="page-padding"></div>
    <h1 class="page-header">Music</h1>
    <Album 
      v-for="album in albums" 
      :key="album.id" 
      :title="album.title" 
      :release="album.release"
      :type="album.type"
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
          title: 'A Winter Night',
          release: '2024',
          type: 'Single',
          description: 'This is a detailed description of this piece.',
          cover: require('../assets/images/covers/awinternight.webp'),
          link_spotify: 'https://open.spotify.com/album/1H7QOjMu6QrdnkmoItqRYm',
          link_apple: null,
          link_amazon: 'https://music.amazon.com/albums/B0DC6H9LS3',
          link_youtube: 'https://www.youtube.com/watch?v=3GQgArKtlms&list=OLAK5uy_mI40m0eOMpXu7sFp0SpEl2B6ueNhH78xU',
        },
        {
          id: 2,
          title: 'Evolving Resonance',
          release: '2024',
          type: 'Album',
          description: 'This is a detailed description of Album One. It includes various details about the album, the artists involved, the genre, the release date, and other relevant information. This is a detailed description of Album One. It includes various details about the album, the artists involved, the genre, the release date, and other relevant information. This is a detailed description of Album One. It includes various details about the album, the artists involved, the genre, the release date, and other relevant information. This is a detailed description of Album One. It includes various details about the album, the artists involved, the genre, the release date, and other relevant information.  ',
          cover: require('../assets/images/covers/evolvingResonance.png'),
          link_spotify: 'https://open.spotify.com/album/1lZlVjxDLnOgcd9IwdhkDH',
          link_apple: 'https://music.apple.com/us/album/2023-2024-collection-evolving-resonance/1745468678',
          link_amazon: 'https://music.amazon.com/albums/B0D3Q2MMBQ',
          link_youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_n3aXjywj2t9HwAillIUX9jPrKgxfuj-HQ',
        },
        {
          id: 3,
          title: 'Armageddon',
          release: '2023',
          type: 'Album',
          description: 'This is a detailed description of Album Two. It includes various details about the album, the artists involved, the genre, the release date, and other relevant information.',
          cover: require('../assets/images/covers/armaggedon.png'),
          link_spotify: 'https://open.spotify.com/album/4eWIK5yOLqFGFku3rmndbF',
          link_apple: 'https://music.apple.com/us/album/armageddon/1685666674',
          link_amazon: 'https://music.amazon.com/albums/B0C412LCCB',
          link_youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_kmGL5fNNV8ORtvKDWDHHlTLj106ZKuvnI',
        },
      ]
    };
  }
}
</script>

<style>
</style>