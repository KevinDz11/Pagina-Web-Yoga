<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "./supabase";

const email = ref("");
const password = ref("");
const cargando = ref(false);
const mensaje = ref("");

const registrarUsuario = async () => {
  cargando.value = true;
  mensaje.value = "Registrando...";

  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (error) {
    mensaje.value = "❌ Error: " + error.message;
  } else {
    mensaje.value = "✅ ¡Usuario creado con éxito! Revisa la pestaña Users en Supabase.";
    // Limpiamos los campos
    email.value = "";
    password.value = "";
  }
  cargando.value = false;
};
</script>

<template>
  <main class="container">
    <div class="card">
      <h1>Registro de Alumnos 🧘‍♂️</h1>
      <p>Crea una cuenta para tu academia de Yoga</p>

      <form @submit.prevent="registrarUsuario" class="formulario">
        <input v-model="email" type="email" placeholder="Correo electrónico" required />
        <input
          v-model="password"
          type="password"
          placeholder="Contraseña (mínimo 6 caracteres)"
          required
        />
        <button type="submit" :disabled="cargando">
          {{ cargando ? "Cargando..." : "Registrar mi cuenta" }}
        </button>
      </form>

      <p v-if="mensaje" class="status-msg">{{ mensaje }}</p>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;
  font-family: sans-serif;
}
.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}
.formulario {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}
input {
  padding: 0.8rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}
button {
  padding: 0.8rem;
  background-color: #6b46c1;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
button:disabled {
  background-color: #9ca3af;
}
.status-msg {
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
