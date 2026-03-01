<script setup lang="ts">
import { ref, computed } from "vue";

// Base de datos simulada de cursos
const cursos = ref([
  {
    id: 1,
    titulo: "Despertar con Vinyasa",
    nivel: "Intermedio",
    estilo: "Vinyasa",
    duracion: "45 min",
    icono: "🌊",
    descripcion: "Fluye con la respiración para activar tu cuerpo.",
  },
  {
    id: 2,
    titulo: "Fundamentos del Yoga",
    nivel: "Principiante",
    estilo: "Hatha",
    duracion: "30 min",
    icono: "🌱",
    descripcion: "Aprende las posturas base paso a paso.",
  },
  {
    id: 3,
    titulo: "Relajación Profunda",
    nivel: "Todos",
    estilo: "Yin Yoga",
    duracion: "60 min",
    icono: "🌙",
    descripcion: "Estiramientos sostenidos para liberar tensión.",
  },
  {
    id: 4,
    titulo: "Fuerza de Core",
    nivel: "Avanzado",
    estilo: "Vinyasa",
    duracion: "40 min",
    icono: "🔥",
    descripcion: "Fortalece tu centro con secuencias dinámicas.",
  },
  {
    id: 5,
    titulo: "Hatha Clásico",
    nivel: "Principiante",
    estilo: "Hatha",
    duracion: "50 min",
    icono: "☀️",
    descripcion: "Equilibrio perfecto entre esfuerzo y relajación.",
  },
  {
    id: 6,
    titulo: "Apertura de Caderas",
    nivel: "Intermedio",
    estilo: "Yin Yoga",
    duracion: "45 min",
    icono: "🧘‍♀️",
    descripcion: "Libera emociones atrapadas y mejora tu flexibilidad.",
  },
]);

// Estados para los filtros
const filtroNivel = ref("Todos");
const filtroEstilo = ref("Todos");

// Lógica para filtrar los cursos en tiempo real
const cursosFiltrados = computed(() => {
  return cursos.value.filter((curso) => {
    const cumpleNivel = filtroNivel.value === "Todos" || curso.nivel === filtroNivel.value;
    const cumpleEstilo = filtroEstilo.value === "Todos" || curso.estilo === filtroEstilo.value;
    return cumpleNivel && cumpleEstilo;
  });
});
</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-serif text-yoga-deep font-bold mb-4">Catálogo de Cursos</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Encuentra la práctica perfecta para ti hoy. Filtra por tu nivel de experiencia o el estilo
        de yoga que tu cuerpo necesita.
      </p>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <aside
        class="w-full md:w-1/4 bg-white p-6 rounded-3xl shadow-sm border border-yoga-sage/20 h-fit sticky top-28"
      >
        <h3 class="text-xl font-bold text-yoga-deep mb-6 flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            ></path>
          </svg>
          Filtros
        </h3>

        <div class="mb-6">
          <label class="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Nivel</label
          >
          <select
            v-model="filtroNivel"
            class="w-full bg-yoga-cream/50 border border-yoga-sage/30 text-yoga-deep rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yoga-sage transition-all"
          >
            <option value="Todos">Todos los niveles</option>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Estilo</label
          >
          <select
            v-model="filtroEstilo"
            class="w-full bg-yoga-cream/50 border border-yoga-sage/30 text-yoga-deep rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yoga-sage transition-all"
          >
            <option value="Todos">Todos los estilos</option>
            <option value="Hatha">Hatha</option>
            <option value="Vinyasa">Vinyasa</option>
            <option value="Yin Yoga">Yin Yoga</option>
          </select>
        </div>

        <button
          @click="
            filtroNivel = 'Todos';
            filtroEstilo = 'Todos';
          "
          class="w-full py-2 text-sm text-yoga-earth font-medium hover:bg-yoga-earth/10 rounded-lg transition-colors"
        >
          Limpiar Filtros
        </button>
      </aside>

      <section class="w-full md:w-3/4">
        <div
          v-if="cursosFiltrados.length === 0"
          class="bg-white p-12 rounded-3xl text-center border border-yoga-sage/20"
        >
          <div class="text-6xl mb-4 opacity-50">🍃</div>
          <h3 class="text-2xl font-serif text-yoga-deep mb-2">No encontramos cursos</h3>
          <p class="text-gray-500">Intenta cambiar los filtros para ver más opciones.</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div
            v-for="curso in cursosFiltrados"
            :key="curso.id"
            class="bg-white p-6 rounded-3xl border border-yoga-sage/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer flex flex-col h-full"
          >
            <div class="flex justify-between items-start mb-4">
              <div
                class="text-5xl bg-yoga-cream/50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
              >
                {{ curso.icono }}
              </div>
              <span
                class="bg-yoga-sage/20 text-yoga-deep px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                {{ curso.duracion }}
              </span>
            </div>

            <h3 class="text-2xl font-bold text-yoga-deep mb-2">{{ curso.titulo }}</h3>
            <p class="text-gray-600 mb-6 flex-grow">{{ curso.descripcion }}</p>

            <div class="flex items-center gap-3 border-t border-gray-100 pt-4 mt-auto">
              <span class="text-sm font-medium text-yoga-earth">{{ curso.nivel }}</span>
              <span class="text-gray-300">•</span>
              <span class="text-sm font-medium text-yoga-deep">{{ curso.estilo }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
