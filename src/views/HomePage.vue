<template>
    <div>
      <AppHero />
      <section id="about" class="about-section py-5 bg-light"></section>
      <AboutUs />
      <AppCatalog />
      <section id="contact" class="contact-section py-5 bg-light"></section>
      <ContactUs />
    </div>
  </template>
  
  <script>
  import AppHero from '@/components/AppHero.vue';
  import AppCatalog from '@/components/AppCatalog.vue';
  import AboutUs from '@/components/AboutUs.vue';
  import ContactUs from '@/components/ContactUs.vue';
  
  export default {
    components: {
      AppHero,
      AppCatalog,
      AboutUs,
      ContactUs,
    },
  };
  </script>
  