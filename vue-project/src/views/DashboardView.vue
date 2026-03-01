<script setup lang="ts">
import { useUserStore } from '../stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
</script>

<template>
  <div class="dashboard">
    <h2>Mi Panel de Alumno</h2>
    <p>Bienvenido, {{ user?.email }}</p>
    
    <div class="clases-grid">
      <div class="clase-card">
        <div class="video-placeholder">▶️</div>
        <h4>Yoga para Principiantes</h4>
        <p>Nivel Básico</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard { text-align: center; }
.clases-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; margin-top: 20px; }
.clase-card { background: white; padding: 15px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.video-placeholder { background: #edf2f7; height: 150px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 10px; }
</style>