<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "./supabase";
import { useUserStore } from "./stores/user";
import { storeToRefs } from "pinia";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
  await userStore.fetchUser();

  supabase.auth.onAuthStateChange((_event, session) => {
    userStore.user = session?.user ?? null;
  });
});

const logout = async () => {
  await userStore.logout();
  router.push("/");
};
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-800 bg-yoga-cream">
    <nav
      class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-yoga-sage/30 shadow-sm"
    >
      <div class="container mx-auto px-6 flex justify-between items-center h-20">
        <span
          @click="router.push('/')"
          class="text-2xl font-serif italic font-bold text-yoga-deep cursor-pointer hover:text-yoga-earth transition-colors"
        >
          YogaFlow 🧘‍♂️
        </span>

        <div
          class="hidden md:flex items-center space-x-10 text-sm font-medium uppercase tracking-widest text-yoga-deep"
        >
          <RouterLink to="/" class="hover:text-yoga-earth transition-colors">Inicio</RouterLink>
          <RouterLink to="/cursos" class="hover:text-yoga-earth transition-colors"
            >Cursos</RouterLink
          >
          <a href="/#planes" class="hover:text-yoga-earth transition-colors">Planes</a>
        </div>

        <div v-if="user" class="flex items-center gap-4">
          <span class="text-sm font-medium text-gray-600 hidden sm:block">{{ user.email }}</span>
          <button
            @click="router.push('/dashboard')"
            class="text-sm font-bold text-yoga-deep hover:text-yoga-earth transition-colors"
          >
            Mi Panel
          </button>
          <button
            @click="logout"
            class="px-5 py-2 border-2 border-yoga-earth text-yoga-earth rounded-full hover:bg-yoga-earth hover:text-white transition-all text-sm font-bold ml-2"
          >
            Salir
          </button>
        </div>
        <div v-else class="space-x-4">
          <button
            @click="router.push('/login')"
            class="px-6 py-2 bg-yoga-deep text-white rounded-full hover:bg-yoga-earth transition-colors text-sm font-bold shadow-md"
          >
            Ingresar
          </button>
        </div>
      </div>
    </nav>

    <main class="flex-grow">
      <router-view></router-view>
    </main>
  </div>
</template>
