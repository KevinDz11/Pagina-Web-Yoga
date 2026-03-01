<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="flex flex-col">
    <section
      class="relative bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center py-32 text-center rounded-b-[3rem] shadow-lg"
    >
      <div class="absolute inset-0 bg-yoga-deep/80 rounded-b-[3rem]"></div>

      <div class="relative z-10 max-w-4xl mx-auto px-6">
        <span
          class="bg-yoga-earth text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block shadow-sm"
        >
          Tu Studio de Yoga Online
        </span>
        <h1 class="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Transforma tu cuerpo y mente desde casa
        </h1>
        <p class="text-lg md:text-xl text-yoga-cream/90 mb-10 max-w-2xl mx-auto">
          Clases nuevas cada semana, programas guiados y una comunidad que te respalda en tu camino
          al bienestar.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="router.push('/login')"
            class="bg-yoga-earth text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all hover:-translate-y-1 shadow-lg"
          >
            Empieza tu prueba gratis
          </button>
          <button
            class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all hover:-translate-y-1"
          >
            Ver catálogo
          </button>
        </div>
      </div>
    </section>

    <section id="catalogo" class="py-24 px-6 max-w-6xl mx-auto">
      <h2 class="text-4xl font-serif text-center text-yoga-deep font-bold mb-16">
        ¿Por qué practicar con nosotros?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div
          class="bg-white p-10 rounded-3xl text-center shadow-sm border border-yoga-sage/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
        >
          <div
            class="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform"
          >
            🧘‍♀️
          </div>
          <h3 class="text-2xl font-medium text-yoga-deep mb-4">A tu ritmo</h3>
          <p class="text-gray-600 leading-relaxed">
            Clases de 15 a 60 minutos para que las adaptes a tu rutina diaria, sin presiones.
          </p>
        </div>

        <div
          class="bg-white p-10 rounded-3xl text-center shadow-sm border border-yoga-sage/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
        >
          <div
            class="text-6xl mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform"
          >
            📺
          </div>
          <h3 class="text-2xl font-medium text-yoga-deep mb-4">Multidispositivo</h3>
          <p class="text-gray-600 leading-relaxed">
            Practica desde tu celular, tablet o envíalo directamente a tu Smart TV.
          </p>
        </div>

        <div
          class="bg-white p-10 rounded-3xl text-center shadow-sm border border-yoga-sage/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
        >
          <div class="text-6xl mb-6 group-hover:scale-110 transition-transform">🌱</div>
          <h3 class="text-2xl font-medium text-yoga-deep mb-4">Todos los niveles</h3>
          <p class="text-gray-600 leading-relaxed">
            Desde tus primeros pasos hasta posturas avanzadas de Hatha y Vinyasa.
          </p>
        </div>
      </div>
    </section>

    <section id="planes" class="py-20 px-6 max-w-md mx-auto mb-20">
      <h2 class="text-4xl font-serif text-center text-yoga-deep font-bold mb-10">Elige tu plan</h2>

      <div
        class="bg-white p-10 rounded-3xl text-center shadow-lg border-t-8 border-yoga-earth hover:-translate-y-2 transition-transform duration-500"
      >
        <h3 class="text-2xl font-bold text-yoga-deep mb-2">Pase Mensual</h3>
        <p class="text-5xl font-extrabold text-yoga-earth mb-8">
          $15 <span class="text-lg font-medium text-gray-500">USD / mes</span>
        </p>
        <ul class="text-left space-y-4 mb-8 text-gray-700 font-medium">
          <li class="flex items-center gap-3">✅ Acceso a todas las clases pregrabadas</li>
          <li class="flex items-center gap-3">✅ 2 clases en vivo por semana</li>
          <li class="flex items-center gap-3">✅ Comunidad privada de Telegram</li>
        </ul>
        <button
          @click="router.push('/login')"
          class="w-full bg-yoga-deep text-white py-4 rounded-full font-bold hover:bg-yoga-sage transition-colors shadow-md"
        >
          Suscribirme ahora
        </button>
      </div>
    </section>
  </div>
</template>
