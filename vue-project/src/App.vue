<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from './supabase'
import { useUserStore } from './stores/user'
import { storeToRefs } from 'pinia'

const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

onMounted(async () => {
  await userStore.fetchUser()
  
  supabase.auth.onAuthStateChange((_event, session) => {
    userStore.user = session?.user ?? null
  })
})

const logout = async () => {
  await userStore.logout()
  router.push('/') // Lo regresamos al inicio después de salir
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-content">
      <span class="logo">Yoga Center 🧘‍♂️</span>
      <div v-if="user" class="user-info">
        <span>{{ user.email }}</span>
        <button @click="logout" class="btn-small">Salir</button>
      </div>
    </div>
  </nav>

  <main class="main-content">
    <router-view></router-view>
  </main>
</template>

<style>
/* Estilos globales (sin 'scoped' para que afecten a todo) */
body { margin: 0; background-color: #f5f3ff; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
.navbar { background: #6b46c1; color: white; padding: 1rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.nav-content { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.logo { font-weight: bold; font-size: 1.2rem; }
.main-content { max-width: 1000px; margin: 40px auto; padding: 0 20px; }
.btn-small { background: rgba(255,255,255,0.2); border: 1px solid white; color: white; padding: 6px 12px; border-radius: 6px; cursor: pointer; margin-left: 15px; }
</style>