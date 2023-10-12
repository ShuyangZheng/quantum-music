<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png" alt="ninja">
      <h1>
        <router-link :to="{ name: 'home' }">Muso Ninjas</router-link>
      </h1>
      <div class="links">
        <div v-if="user">
          <button v-if="user" @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'signup'}">Signup</router-link>
          <router-link class="btn" :to="{ name: 'login'}">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '@/composables/useLogout'
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'

export default {
  setup() {
    const router = useRouter()
    const { error, logout, isPending } = useLogout()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()
      router.push({ name: 'login' })
    }

    return { error, isPending, handleClick, user }
  }
}
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background-color: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a, button {
  margin-left: 16px;
  font-size: 14px;
}
nav img {
  max-height: 60px;
}
</style>