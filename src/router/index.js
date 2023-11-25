import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import SignupView from '../views/auth/SignupView.vue'
import CreatePlaylistView from '../views/playlists/CreatePlaylistView.vue'
import PlaylistDetailsView from '../views/playlists/PlaylistDetailsView.vue'
import UserPlaylists from '../views/playlists/UserPlaylists.vue'

// route guard
import { projectAuth } from '@/firebase/config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'login' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/playlists/create',
    name: 'createPlaylist',
    component: CreatePlaylistView,
    beforeEnter: requireAuth
  },
  {
    path: '/playlists/:id',
    name: 'playlistDetails',
    component: PlaylistDetailsView,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/playlists/user',
    name: 'userPlaylists',
    component: UserPlaylists,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
