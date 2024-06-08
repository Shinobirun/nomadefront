<template>
  <header>
    <div class="logo">
      <img src="../assets/images/Nomade_Logo.png" alt="Logo de Nomade">
    </div>
    <nav class="normal-menu" :class="{ hidden: isMenuActive }">
      <ul>
        <li><a href="/"><img src="../assets/images/icons/travelling_2060284.png" alt="Inicio"> Inicio</a></li>
        <li><a href="/tours"><img src="../assets/images/icons/map_1934285.png" alt="Tours"> Tours</a></li>
        <li><a href="/contacto"><img src="../assets/images/icons/reception_1934306.png" alt="Contacto"> Contacto</a></li>
        <li><a href="/registro"><img src="../assets/images/icons/rating_1934299.png" alt="Registrarse"> Registrarse</a></li>
        <li @click="abrirModal"><a href="#"><img src="../assets/images/icons/luggage_1934282.png" alt="Iniciar sesión"> Iniciar sesión</a></li>
      </ul>
    </nav>
    <div class="hamburger-menu" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <nav class="nav-hamburguer" :class="{ active: isMenuActive }">
      <ul>
        
        <li><a href="/"><img src="../assets/images/icons/travelling_2060284.png" alt="Inicio"> Inicio</a></li>
        <li><a href="/tours"><img src="../assets/images/icons/map_1934285.png" alt="Tours"> Clima</a></li>
        <li><a href="/contacto"><img src="../assets/images/icons/reception_1934306.png" alt="Contacto"> Contacto</a></li>
        <li><a href="/registro"><img src="../assets/images/icons/rating_1934299.png" alt="Registrarse"> Registrarse</a></li>
        <li @click="abrirModal"><a href="#"><img src="../assets/images/icons/luggage_1934282.png" alt="Iniciar sesión"> Iniciar sesión</a></li>
      </ul>
    </nav>


    <LoginModalComponent v-show="mostrarModal" @close="cerrarModal" />   
  </header>
</template>

<script>
import LoginModalComponent from './LoginModalComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    LoginModalComponent
  },
  data() {
    return {
      mensaje: 'Componente Contacto',
      mostrarModal: false,
      isMenuActive: false
    };
  },
  methods: {
    abrirModal() {
      this.mostrarModal = true;
      console.log(this.mostrarModal);
    },
    cerrarModal() {
      this.mostrarModal = false;
      console.log(this.mostrarModal);
    },
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    }
  }
};
</script>


<style scoped>
@import '@/assets/css/variables.css';


header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  background-color: var(--color-accent);
  opacity: 1;
  padding: 10px 0;
}

header:hover {
  opacity: .9;
}

.logo {
  text-align: left;
  padding-left: 10%;
}

nav {
  text-align: right;
}

.normal-menu {
  display: block;
}

.hamburger-menu {
  display: none;
  cursor: pointer;
}

.nav-hamburguer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  display: none;
}

.nav-hamburguer.active {
  max-height: 800px;
  display: flex;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: var(--color-secondary);
  margin: 5px auto;
  transition: 0.4s;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: var(--color-primary);
  font-weight: bold;
}

a:hover {
  text-decoration: none;
  color: var(--color-secondary);
  font-weight: bold;
}

li a img {
  height: 30px;
}

.hidden {
  display: none;
}

@media (max-width: 768px) {
  .normal-menu {
    display: none;
  }

  .hamburger-menu {
    display: block;
    min-height: 50px;
    margin-right: 20px;
  }

  .nav-hamburguer.active {
    background-color: var(--color-accent);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
  }

  .nav-hamburguer li {
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .normal-menu {
    display: none;
  }

  .hamburger-menu {
    display: block;
    margin-right: 20px;
  }

  .nav-hamburguer.active {
    background-color: var(--color-accent);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
  }

  .nav-hamburguer li {
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 1025px) {
  .normal-menu {
    display: block;
  }

  .hamburger-menu {
    display: none;
  }

  .nav-hamburguer {
    display: none;
  }
}
</style>

