<template>
  <div class="user-playlists">
    <h2>My Playlists</h2>
    <div v-if="playlists">
      <List :playlists="playlists" />
    </div>
    <router-link :to="{ name: 'createPlaylist' }" class="btn">Create a new playlist</router-link>
  </div>
  
</template>

<script>
import getUser from '@/composables/getUser'
import getCollection from '@/composables/getCollection'
import List from '@/components/List.vue'

export default {
  components: { List },
  setup() {
    const { user } = getUser()
    const { documents: playlists } = getCollection(
      'playlists',
      ['userId', '==', user.value.uid]
    )

    return { playlists }
  }
}
</script>

<style>

</style>