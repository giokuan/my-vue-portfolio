<script>

  export default {
    data() {
      return {
        showMenu: false, 
      
      }
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
        <li class="menu-button"><a href="#">Home</a></li>
        <li class="menu-button"><a href="#work" v-smooth-scroll>Works</a></li>
        <li class="menu-button">
          <a href="#testimonial" v-smooth-scroll>Testimonials</a>
        </li>
        <li class="menu-button"><a href="#about" v-smooth-scroll>About</a></li>
      </ul>
    </nav>
    <!-- End Navbar -->

    <div class="flex flex-col mt-16 items-center">
      <div class="relative pl-6">
          <img
            class="rounded-full border border-black shadow-sm w-40 h-40"
            src="./assets/gio.png"
            alt="user image"
          />
        </div>
      <div class="w-full ">
        <!-- <h3
          class="hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans"
        >
          👋 Hi!,
        </h3> -->
        <h1
          class="3xl:text-4xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-Eczar font-bold leading-tight text-black flex justify-center"
        >
        
          <!-- <a
            href="https://www.linkedin.com/"
            target="_blank"
            class="text-black hover:underline"
          > -->
           Giovanni Kuan
         
        </h1>
        <p class="text-xl xl:text-3xl mb-4 flex items-center justify-center">Software Developer</p>
        <p class="text-xl xl:text-2xl mb-4 flex items-center justify-center"> I am a self-taught Software developer who designs and develops<br> fully-fledged and functioning platforms with databases.</p>

        <!-- <div class="md:flex gap-1 md:gap-10">
          <button class="text-white bg-gray-800 submit-button hidden md:block">
            View My Work
          </button>
          <button
            class="text-gray-800 border-4 border-gray-800 submit-button mb-5 md:mb-0"
          >
            Contact Me
          </button>
        </div> -->
      </div>

      <div class="w-8/12 flex justify-end">
        <!-- <img
          class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px] opacity-50"
          src="./assets/profile-pic.png"
          alt="user image"
        /> -->
      </div>
    </div>
  </div>

  <div class="banner-2 space-y-10 pb-20" id="work">
    <h3 class="heading3 my-5">My Recent Work</h3>

    <div class="card flex flex-col xl:flex-row justify-between">
      <div class="px-8  md:px-10">
        <h4 class="text-2xl my-4 font-bold">SJMC Membership Management System</h4>
        <p class="font-work_sans pr-4">
          Tau Gamma Phi San Juan Municipal Council Membership Management System - is a web application <br>
          designed to facilitate the  management of fraternity membership for existing members of the 
          Tau Gamma Phi<br> San Juan Municipal Council. The systemleverages the TALL stack, which includes
          Tailwind CSS, Alpine.js, Laravel, and Livewire. Theprimary objective of the system is to provide 
          an intuitive and efficient platform for managing fraternity membership information and facilitating
          communication between fraternity members and administrators.
        </p>
    
        <Devicon :name="deviconName" :size="48" />
        <!-- <button class="text-sky-800 font-bold text-2xl tracking-wider">
          View Case Study
        </button> -->
 
      </div>
      <div class="card-image flex flex-col h-full m-4 pt-12 xl:m-2">
        <img
          class="xl:object-cover w-full h-full px-4 md:px-8"
          src="./assets/sjmc.png"
        />

        <div class="flex gap-8 items-center justify-center">
          <p class="font-bold mt-4 mb-4 text-xl">
          <a href="#">View Live</a>
        </p>

        <p class="font-bold mt-4 mb-4 text-xl">
          <a href="#"> Video Demo</a>
        </p>
        </div>
     
      </div>
    </div>

    
    <div class="card flex flex-col xl:flex-row">
      <div class="px-8  md:px-10">
        <h4 class="text-2xl my-4 font-bold">TINHS PORTAL</h4>
        <p class="font-work_sans pr-4">
          This school portal I have developed combines custom middleware with multi-authentication to deliver an 
          innovative and inclusive educational experience for junior and senior high school students. By leveraging the power of technology, 
          I aim to bridge the gap between students, teachers, and administrators, creating a seamless ecosystem.
          
        </p>
        <!-- <button class="text-sky-800 font-bold text-2xl tracking-wider">
          View Case Study
        </button> -->
      </div>
      <div class="card-image flex flex-col h-full m-4 pt-12 xl:m-2">
        <img
          class="xl:object-cover w-full h-full px-4 md:px-8"
          src="./assets/tinhs.png"
        />

        <div class="flex gap-8 items-center justify-center">
          <p class="font-bold mt-4 mb-4 text-xl">
          <a href="#">View Live</a>
        </p>

        <p class="font-bold mt-4 mb-4 text-xl">
          <a href="#"> Video Demo</a>
        </p>
        </div>
     
      </div>
    </div>

    <div class="card flex flex-col xl:flex-row">
      <div class="px-8  md:px-10">
        <h4 class="text-2xl my-4 font-bold">PLANT BASE</h4>
        <p class="font-work_sans pr-4">
          A plant shop web application where user can find and buy ornamnetal indoor and outdoor ornamental plants for decorations
          Aims to promote environmental awareness and influence people to take care of our planet by knowing how to grow plants.
          
        </p>
        <!-- <button class="text-sky-800 font-bold text-2xl tracking-wider">
          View Case Study
        </button> -->
      </div>
      <div class="card-image flex flex-col h-full m-4 pt-12 xl:m-2">
        <img
          class="xl:object-cover w-full h-full px-4 md:px-8"
          src="./assets/mini3.png"
        />

        <div class="flex gap-8 items-center justify-center">
          <p class="font-bold mt-4 mb-4 text-xl">
          <a href="#">View Live</a>
        </p>

        <p class="font-bold mt-4 mb-4 text-xl">
          <a href="#"> Video Demo</a>
        </p>
        </div>
     
      </div>
    </div>


    <div class="card flex flex-col xl:flex-row">
      <div class="px-8  md:px-10">
        <h4 class="text-2xl my-4 font-bold">BARANGAY RESIDENT RECORD SYSTEM</h4>
        <p class="font-work_sans pr-4">
          A desktop software application developed using Python with PyQt5 and MySQL as the underlying technologies
          its primary purpose is to facilitate the management and organization of resident information within a barangay (local community)
          The system provides various search functionalities to efficiently retrieve specific groups of residents based on different criteria
          
        </p>
        <!-- <button class="text-sky-800 font-bold text-2xl tracking-wider">
          View Case Study
        </button> -->
      </div>
      <div class="card-image flex flex-col h-full m-4 pt-12 xl:m-2">
        <img
          class="xl:object-cover w-full h-full px-4 md:px-8"
          src="./assets/brr.jpg"
        />

        <div class="flex gap-8 items-center justify-center">
          <p class="font-bold mt-4 mb-4 text-xl">
          <a href="#">View Live</a>
        </p>

        <p class="font-bold mt-4 mb-4 text-xl">
          <a href="#"> Video Demo</a>
        </p>
        </div>
     
      </div>
    </div>


    <div class="card flex flex-col xl:flex-row">
      <div class="px-8  md:px-10">
        <h4 class="text-2xl my-4 font-bold">THE LAZY READER</h4>
        <p class="font-work_sans pr-4">
          The Lazy Reader is a Python project a local desktop application that aims to provide a text-to-speech solution <br>specifically designed for children.
          The primary functionality of the project is to convert text input into speech output, allowing children to listen to the text instead of reading it themselves.
          Additionally, the project offers three different themes for children to choose from, enhancing the user experience and making it more engaging
          
        </p>
        <!-- <button class="text-sky-800 font-bold text-2xl tracking-wider">
          View Case Study
        </button> -->
      </div>
      <div class="card-image flex flex-col h-full m-4 pt-12 xl:m-2">
        <img
          class="xl:object-cover w-full h-full px-4 md:px-8"
          src="./assets/textspeech.png"
        />

        <div class="flex gap-8 items-center justify-center">
          <p class="font-bold mt-4 mb-4 text-xl">
          <a href="#">Source Code</a>
        </p>

        <p class="font-bold mt-4 mb-4 text-xl">
          <a href="https://www.linkedin.com/posts/gio-kuan_python-qt5designer-sqlite3-activity-6765151030377373696-HJFQ?utm_source=share&utm_medium=member_desktop"> Video Demo</a>
        </p>
        </div>
     
      </div>
    </div>

    <div class="card flex flex-col xl:flex-row">
      <div class="px-8  md:px-10">
        <h4 class="text-2xl my-4 font-bold">SJMC DATABASE MANAGEMENT SYSTEM</h4>
        <p class="font-work_sans pr-4">
          The SJMC Database Management System is a desktop application developed using Python, PyQt5, and MySQL
          The primary objective of this system is to manage a database for an organization called TGP SJMC
        </p>
        <!-- <button class="text-sky-800 font-bold text-2xl tracking-wider">
          View Case Study
        </button> -->
      </div>
      <div class="card-image flex flex-col h-full m-4 pt-12 xl:m-2">
        <img
          class="xl:object-cover w-full h-full px-4 md:px-8"
          src="./assets/sjmclocal.png"
        />

        <div class="flex gap-8 items-center justify-center">
          <p class="font-bold mt-4 mb-4 text-xl">
          <a href="#">View Live</a>
        </p>

        <p class="font-bold mt-4 mb-4 text-xl">
          <a href="#"> Video Demo</a>
        </p>
        </div>
     
      </div>
    </div>




  </div>


  <p class="banner-1 text-yellow-600 md:text-5xl text-xl font-bold font-work_sans tracking-wide">MY STACKS</p>
  <div class="banner-1 grid grid-cols-2 md:grid-cols-4 gap-4 h-full p-4 md:p-36 2xl:p-64">
    
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./assets/tailwind.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./assets/mysql.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./assets/php.png" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./assets/alpine.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./assets/vue.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./assets/html.png" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./assets/laravel.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./assets/js.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./assets/css.png" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./assets/livewire.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./assets/python.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./assets/qt.png" alt="">
        </div>
    </div>
</div>



  <div class="banner-2 md:flex items-center md:justify-evenly" id="about">
    <img
      class="md:h-[500px] h-[400px] mb-4 pb-4"
      src="./assets/tab-gio.png"
      alt="user image"
    />
    <div class="flex gap-24" data-page="resume">
    

    <section class="text-teal-600">
      <h5 class="h5 pb-4 pt-4 text-xl font-bold">
              Experience
            </h5>
      <ol class="timeline-list">

        <li class="timeline-item text-gray-500">
          <h4 class="h4 timeline-item-title">
            Software Developer 
          </h4>
          <span>March 2023 — Present</span>
       
          <p class="timeline-text pb-4">
            Freelance
          </p>
        </li>

        <li class="timeline-item text-gray-500">
          <h4 class="h4 timeline-item-title">
            Software Developer (Word Press)
          </h4>
          <span>November 2022 — February 2023</span>
       
          <p class="timeline-text pb-4">
            Dice 205
          </p>
        </li>


        <li class="timeline-item text-gray-500">
          <h4 class="h4 timeline-item-title">
            Software Developer
          </h4>
          <span>June 2022 — October 2022</span>
       
          <p class="timeline-text pb-4">
            Freelance
          </p>
        </li>
        
        <li class="timeline-item text-gray-500">
          <h4 class="h4 timeline-item-title">
            Python Developer
          </h4>
          <span>July 2019 — May 2022</span>
          <!-- <p class="timeline-item-desc">
            Location
          </p> -->
          <p class="timeline-text">
            Freelance
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <ul class="skills-list content-card">
        <li >
            <h5 class="h5 pb-4 pt-4 text-xl font-bold text-teal-600">
              Education
            </h5>
            
            <p class="text-yellow-600 pb-4">
              <span class="text-gray-500">School:</span> AMA Computer Learning Center
            </p>
            
            <p class="text-yellow-600 pb-4">
              <span class="text-gray-500">Course:</span> Computer System Design and Programming
            </p>
       
            <p class="text-yellow-600 pb-8">
              <span class="text-gray-500">GPA:</span> 3.8
            </p>
        </li>

        <li >
          <h5 class="text-xl font-bold pb-4 text-teal-600">
            Achievements
          </h5>
         
          <p class="text-yellow-600 pb-4">
            <span class="text-gray-500">2nd Place</span> 48 hours Concati Hackathon
          </p>
          
          <p class="text-yellow-600 pb-4">
            <span class="text-gray-500">Best Programmer</span> Thesis ( Philhealth Information and Billing System )<br>
            AMA Computer Learning Center
          </p>
        </li>

      </ul>
    </section>
  </div>
  </div>

  <div class="banner-1 flex h-full items-center pb-8">

    <div class="mx-auto">
      <div class="flex flex-wrap justify-end gap-2">
        <a href="https://www.facebook.com/giokuan/"
          class="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
        >
          <svg
            class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            />
          </svg>
        </a>

     

        <a href="https://github.com/giokuan"
          class=" p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
          
        >
        <svg 
        class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
        
      </a>
       
 

        <a href="https://www.linkedin.com/in/gio-kuan/"
          class=" p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
        >
          <svg
            class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current"
            role="img"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

