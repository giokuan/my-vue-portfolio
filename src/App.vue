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


  <div class="background-image-container ">

    <!-- NavBar -->
    
    <nav
      class=" z-150 mx-auto md:flex md:justify-between pr-12 xl:pr-16 bg-#444444"
    >
      <div class="flex items-center justify-between">
      
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden ">
          <button
            type="button"
            class="text-yellow-600 mt-4 ml-4 hover:text-gray-400 focus:outline-none focus:text-gray-400"
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
        class="flex-col items-end  space-y-4 md:flex md:space-y-0 md:flex-row md:items-center  md:space-x-10 md:mt-4  z-20"
      >
        <!-- <li class="menu-button"><a href="#">Home</a></li> -->
        <li class="menu-button"><a href="#work" v-smooth-scroll>PROJECTS</a></li>
        <li class="menu-button"><a href="#stacks" v-smooth-scroll>MY STACKS</a></li>
        <li class="menu-button"><a href="#about" v-smooth-scroll>ABOUT</a></li>
        <li class="menu-button"><a href="#contact" v-smooth-scroll>CONTACT</a></li>
      </ul>
    </nav>


    
<!-- <div class="mb-48"></div>
    <div class="flex flex-col  items-center">
      <div class=" pl-6 ">
          <img
            class="rounded-full border border-black shadow-sm w-40 h-40 mb-4 "
            src="./assets/gio.png"
            alt="user image"
          />
        </div>
      <div class="w-full ">
        <h1
          class="3xl:text-4xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-Eczar font-bold leading-tight text-white flex justify-center"
        >
           Giovanni Kuan
        </h1>
        <p class="text-xl xl:text-2xl mb-2 flex items-center justify-center text-yellow-500" >Software Developer</p>
        <p class="text-md  mb-2 flex items-center justify-center text-white"> I am a self-taught Software developer who designs and develops fully-fledged and functioning platforms with databases.</p>

      </div>

    </div> -->
  </div>


  <projects/>
  <Stacks />
  <About />
  <ScrollUpArrow />
  <Contact/>
  <Footer />
</template>

<style>
.background-image-container {
  /* Set the background image URL */
  background-image: url('./assets/hero.png');
  
  /* Set the background size and positioning using Tailwind CSS classes */
  /* Adjust the classes as needed */
  background-size: cover;
  background-position: center;
  
  /* Set the container's height to display the background image */
  height: 750px; /* Adjust this height to fit your needs */
}

</style>