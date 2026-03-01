<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="landing-page">
    
    <section class="hero fade-in-up">
      <div class="hero-content">
        <span class="badge">Tu Studio de Yoga Online</span>
        <h1>Transforma tu cuerpo y mente desde casa</h1>
        <p>Clases nuevas cada semana, programas guiados y una comunidad que te respalda en tu camino al bienestar.</p>
        <div class="hero-buttons">
          <button @click="router.push('/login')" class="btn-primary">Empieza tu prueba gratis</button>
          <button class="btn-outline">Ver catálogo</button>
        </div>
      </div>
    </section>

    <section id="catalogo" class="benefits stagger-in">
      <h2>¿Por qué practicar con nosotros?</h2>
      <div class="grid-3">
        <div class="benefit-card">
          <div class="icon">🧘‍♀️</div>
          <h3>A tu ritmo</h3>
          <p>Clases de 15 a 60 minutos para que las adaptes a tu rutina diaria, sin presiones.</p>
        </div>
        <div class="benefit-card">
          <div class="icon">📺</div>
          <h3>Multidispositivo</h3>
          <p>Practica desde tu celular, tablet o envíalo directamente a tu Smart TV.</p>
        </div>
        <div class="benefit-card">
          <div class="icon">🌱</div>
          <h3>Todos los niveles</h3>
          <p>Desde tus primeros pasos hasta posturas avanzadas de Hatha y Vinyasa.</p>
        </div>
      </div>
    </section>

    <section id="planes" class="pricing">
      <h2>Elige tu plan</h2>
      <div class="pricing-card float-anim">
        <h3>Pase Mensual</h3>
        <p class="price">$15 USD <span>/ mes</span></p>
        <ul>
          <li>✅ Acceso a todas las clases pregrabadas</li>
          <li>✅ 2 clases en vivo por semana</li>
          <li>✅ Comunidad privada de Telegram</li>
        </ul>
        <button @click="router.push('/login')" class="btn-primary full-width">Suscribirme ahora</button>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* HERO SECTION */
.hero {
  /* Imagen de fondo profesional */
  background: linear-gradient(rgba(19, 78, 74, 0.85), rgba(19, 78, 74, 0.7)), url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop') center/cover;
  color: white;
  padding: 120px 20px;
  text-align: center;
  border-radius: 0 0 50px 50px;
}
.hero-content { max-width: 800px; margin: 0 auto; }
.badge { background: var(--accent); color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.85rem; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; }
.hero h1 { font-size: 3.5rem; font-weight: 800; margin: 20px 0; line-height: 1.1; }
.hero p { font-size: 1.2rem; margin-bottom: 40px; color: #E5E7EB; }
.hero-buttons { display: flex; gap: 15px; justify-content: center; }

/* BOTONES */
.btn-primary { background-color: var(--accent); color: white; border: none; padding: 15px 35px; border-radius: 30px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 15px rgba(217, 119, 87, 0.4); }
.btn-primary:hover { background-color: var(--accent-hover); transform: translateY(-3px); box-shadow: 0 6px 20px rgba(217, 119, 87, 0.6); }
.btn-outline { background-color: transparent; color: white; border: 2px solid white; padding: 15px 35px; border-radius: 30px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: 0.3s; }
.btn-outline:hover { background-color: rgba(255,255,255,0.1); transform: translateY(-3px); }
.full-width { width: 100%; margin-top: 20px; }

/* SECCIONES */
section { padding: 100px 20px; max-width: 1200px; margin: 0 auto; }
h2 { text-align: center; font-size: 2.5rem; color: var(--primary); margin-bottom: 50px; font-weight: 800; }

/* GRID Y TARJETAS */
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
.benefit-card { background: white; padding: 40px 30px; border-radius: 24px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.04); transition: transform 0.3s, box-shadow 0.3s; }
.benefit-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
.benefit-card .icon { font-size: 3.5rem; margin-bottom: 20px; display: inline-block; transition: transform 0.3s; }
.benefit-card:hover .icon { transform: scale(1.1) rotate(5deg); }
.benefit-card h3 { color: var(--primary); font-size: 1.5rem; margin-bottom: 15px; }

/* PRICING */
.pricing { background-color: white; border-radius: 40px; margin-bottom: 80px; box-shadow: 0 10px 40px rgba(0,0,0,0.02); }
.pricing-card { background: var(--bg-color); max-width: 400px; margin: 0 auto; padding: 50px 40px; border-radius: 24px; border-top: 8px solid var(--accent); }
.price { font-size: 3.5rem; font-weight: 800; color: var(--text-main); margin: 20px 0; }
.price span { font-size: 1.2rem; color: #78716C; font-weight: normal; }
ul { list-style: none; padding: 0; margin-bottom: 30px; }
li { margin-bottom: 15px; color: #57534E; font-size: 1.1rem; }

/* ANIMACIONES CSS */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.stagger-in {
  animation: fadeInUp 1s ease-out 0.3s forwards;
  opacity: 0; /* Empieza invisible hasta que la animación corra */
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.float-anim {
  animation: float 6s ease-in-out infinite;
}
</style>