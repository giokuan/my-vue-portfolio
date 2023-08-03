<!-- ScrollUpArrow.vue -->
<template>
  <div v-if="showScrollButton" @click="scrollToTop" class="scroll-up-button">
    <!-- Replace the arrow icon below with your desired icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 " viewBox="0 0 384 512">
      <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 
      0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 
      0s12.5-32.8 0-45.3l-160-160z"/>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showScrollButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showScrollButton = window.scrollY > 100;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
/* Add some basic styles for the scroll-up button */
.scroll-up-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #E7B10A;
  /* color: #444444 !important; */
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  
}
</style>
