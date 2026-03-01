// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import CursosView from "../views/CursosView.vue";
import { supabase } from "../supabase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cursos", // <-- URL actualizada
      name: "cursos",
      component: CursosView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: { requiresAuth: true }, // Esta etiqueta marca la ruta como privada
    },
  ],
});

// GUARDIA DE NAVEGACIÓN: Se ejecuta antes de cada cambio de página
router.beforeEach(async (to, from, next) => {
  // Verificamos directamente con Supabase si hay sesión activa
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !session) {
    // Si intenta entrar a una zona privada sin sesión, lo mandamos al inicio
    next("/");
  } else if (!requiresAuth && session && to.path === "/") {
    // Si ya está logueado e intenta ir al inicio, lo mandamos a su panel
    next("/dashboard");
  } else {
    // Si todo está en orden, lo dejamos pasar
    next();
  }
});

export default router;
