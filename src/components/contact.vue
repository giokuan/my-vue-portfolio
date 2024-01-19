<template>
  <!-- Container for demo purpose -->
  
    <div class="banner-1 py-8 md:px-6 h-1/2" id="contact">
      <!-- Section: Design Block -->
      <section class="mb-8">
        <div class="flex justify-center">
          <div class="text-center md:max-w-xl lg:max-w-3xl">
            <h2 class="mb-12 pt-4 px-6 text-3xl font-bold text-yellow-600">CONTACT</h2>
          </div>
        </div>

        <div class="flex flex-wrap  xl:px-2 2xl:px-48">
          <div class="mb-2 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-1/2 lg:px-6">
            <form @submit.prevent="submitForm" class="mx-4 ">
              <div class="relative mb-6">
                <label
                  class="left-3 mb-0 max-w-[90%] truncate pt-[0.37rem] font-bold text-black"
                  for="from_name">Name
                </label>
                <input type="text" v-model="formData.name"
                  class="peer block min-h-[auto] w-full rounded border border-black bg-gray-300 py-[0.32rem] px-3 leading-[1.6] outline-none "
                  id="name" />
            
              </div>
              <div class="relative mb-6">
                <label
                  class="left-3 mb-0 max-w-[90%]  truncate pt-[0.37rem] font-bold text-black"
                  for="from_email">Email address
                </label>
                <input type="email" v-model="formData.email"
                  class="peer block min-h-[auto] w-full rounded border border-black bg-gray-300 py-[0.32rem] px-3 leading-[1.6] outline-none  "
                  id="email"  />
              
              </div>
              <div class="relative mb-6" >
                <label for="message"
                  class="left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] text-black font-bold">Message</label>
              
                <textarea v-model="formData.message"
                  class="peer block min-h-[auto] w-full rounded border border-black bg-gray-300 py-[0.32rem] px-3 leading-[1.6] outline-none "
                  id="message" rows="3"></textarea>
              
                </div>
              <!-- <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                <input
                  class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox" value="" id="exampleCheck96" checked />
                <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">
                  Send me a copy of this message
                </label>
              </div> -->
              <button type="button" @click="submitForm" data-te-ripple-init data-te-ripple-color="light"
                class="mb-6 inline-block w-full rounded bg-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase text-white hover:bg-gray-900 hover:text-yellow-600">
                Send
              </button>
            </form>
          </div>

          <div class="w-full lg:w-1/2">
            <div class="flex flex-col lg:items-center">
              <div class="mb-12 w-full  basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary" >
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" stroke-width="2"
                        stroke="currentColor" class="h-6 w-6">
                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 
                        311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 
                        11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold ">
                      Phone
                    </p>
                  
                    <p class="text-yellow-600 ">
                      +639263169179
                    </p>
                  </div>
                </div>
              </div>

              <div class="mb-12 w-full basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" stroke-width="2"
                        stroke="currentColor" class="h-6 w-6">
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 
                        8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 
                        176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold">
                      Email
                    </p>
                    <p class="text-yellow-600">
                      giokuan@gmail.com
                    </p>
                  
                  </div>
                </div>
              </div>
              
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" stroke-width="2"
                      stroke="currentColor" class="h-6 w-6">
                        <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 
                        168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 
                        9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 
                        18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 
                        13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 
                        15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 
                        31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold dark:text-white">Address</p>
                    <p class="text-yellow-600 dark:text-neutral-200">
                      312 Tipas San Juan Batangas Philippines
                    </p>
              
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->
    </div>

</template>


<script>
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      formData: {
        from_name: '',
        from_email: '',
        message: '',
        sendCopy: false, // Optional: Set the default value of the checkbox
      },
      emailServiceId: 'default_service', // Replace with your EmailJS service ID
      emailTemplateId: 'template_avuo3b5', // Replace with your EmailJS template ID
      emailUserId: 'ARlNBJeNwr_odbDtf', // Replace with your EmailJS user ID
    };
  },
  methods: {
  
    async submitForm() {
      console.log(this.formData);
      try {
        const { name, email, message, sendCopy } = this.formData;

        // Prepare the template parameters
        const templateParams = {
          to_name: 'Your Name', // Replace with the recipient's name (your name or any other)
          from_name: name,
          from_email: email,
          message: message,
          send_copy:  'Yes',
        };

        // Send the email using EmailJS API//
        const response = await emailjs.send(
          this.emailServiceId,
          this.emailTemplateId,
          templateParams,
          this.emailUserId
        );

      
     

    
        console.log(response); // Handle the response from EmailJS API
        await Swal.fire('Thank you!', 'Email sent successfully!', 'success');

          // Clear the form fields after successful submission
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
        this.formData.sendCopy = false;
       

      } catch (error) {
        console.error(error); // Handle errors if any
      }

      
    },

    
  },
};
</script>