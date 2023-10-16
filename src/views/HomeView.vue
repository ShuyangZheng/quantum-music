<template>
  <div class="home">
    <div v-if="error" class="error">could not fetch the data: {{ error }}</div>
    <List :playlists="documents" v-if="documents"/>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import List from '@/components/List.vue'

export default {
  name: 'HomeView',
  components: {
    List
  },
  setup() {
    const { error, documents } = getCollection('playlists')

    return { error, documents }
  }
}
</script>
