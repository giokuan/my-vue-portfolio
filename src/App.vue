<script>
import ScrollUpArrow from "./components/ScrollUpArrow.vue";
import About from "./components/About.vue";
import Stacks from "./components/Stacks.vue";
import Footer from "./components/Footer.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/contact.vue";

  export default {
    data() {
      return {
        showMenu: false, 
      
      }
    },
    components: {
    ScrollUpArrow,
    About,
    Stacks,
    Footer,
    Projects,
    Contact,
  },
  }
</script>



<template>


  <div class="banner-1 h-full">
    <!-- NavBar -->
    <nav
      class="container  mx-auto md:flex md:justify-between pr-16 bg-#444444"
    >
      <div class="flex items-center justify-between">
      
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 text-black"
      >
        <!-- <li class="menu-button"><a href="#">Home</a></li> -->
        <li class="menu-button"><a href="#work" v-smooth-scroll>PROJECTS</a></li>
        <li class="menu-button">
          <a href="#stacks" v-smooth-scroll>MY STACKS</a>
        </li>
        <li class="menu-button"><a href="#about" v-smooth-scroll>ABOUT</a></li>
        <li class="menu-button"><a href="#contact" v-smooth-scroll>CONTACT</a></li>
      </ul>
    </nav>
    <!-- End Navbar -->

    <div class="flex flex-col mt-16 items-center">
      <div class="relative pl-6">
          <img
            class="rounded-full border border-black shadow-sm w-40 h-40 mb-4"
            src="./assets/gio.png"
            alt="user image"
          />
        </div>
      <div class="w-full ">
        <h1
          class="3xl:text-4xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-Eczar font-bold leading-tight text-black flex justify-center"
        >
           Giovanni Kuan
        </h1>
        <p class="text-xl xl:text-2xl mb-4 flex items-center justify-center text-yellow-500" >Software Developer</p>
        <p class="text-xl xl:text-2xl mb-4 flex items-center justify-center"> I am a self-taught Software developer who designs and develops<br> fully-fledged and functioning platforms with databases.</p>

      </div>

      <div class="w-8/12 flex justify-end">
 
      </div>
    </div>
  </div>


  <projects/>
  <Stacks />
  <About />
  <ScrollUpArrow />
  <Contact/>
  <Footer />
</template>

