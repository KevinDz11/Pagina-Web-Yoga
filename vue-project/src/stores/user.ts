import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../supabase'
import type { User } from '@supabase/supabase-js'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)

  // Función para cargar el usuario actual al arrancar la app
  async function fetchUser() {
    const { data } = await supabase.auth.getUser()
    user.value = data.user
  }

  // Función para cerrar sesión
  async function logout() {
    await supabase.auth.signOut()
    user.value = null
  }

  return { user, fetchUser, logout }
})