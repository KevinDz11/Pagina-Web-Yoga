<script setup lang="ts">
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-serif text-yoga-deep font-bold mb-2">Mi Panel de Alumno</h2>
      <p class="text-lg text-gray-600">
        Bienvenido a tu espacio de paz,
        <span class="font-bold text-yoga-earth">{{ user?.email }}</span>
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div
        class="bg-white p-4 border border-yoga-sage/30 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
      >
        <div
          class="bg-yoga-cream/50 h-40 rounded-xl flex items-center justify-center text-4xl mb-4 group-hover:bg-yoga-sage/20 transition-colors"
        >
          ▶️
        </div>
        <h4 class="text-xl font-bold text-yoga-deep mb-1">Yoga para Principiantes</h4>
        <p class="text-yoga-earth text-sm font-medium">Nivel Básico • 30 min</p>
      </div>

      <div
        class="bg-white p-4 border border-yoga-sage/30 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
      >
        <div
          class="bg-yoga-cream/50 h-40 rounded-xl flex items-center justify-center text-4xl mb-4 group-hover:bg-yoga-sage/20 transition-colors"
        >
          🧘‍♀️
        </div>
        <h4 class="text-xl font-bold text-yoga-deep mb-1">Vinyasa Flow</h4>
        <p class="text-yoga-earth text-sm font-medium">Nivel Intermedio • 45 min</p>
      </div>
    </div>
  </div>
</template>
