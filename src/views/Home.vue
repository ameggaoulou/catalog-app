<template>
  <div>
    <!-- Header -->
    <AppHeader />

    <!-- Hero Section -->
    <AppHero />

    <!-- About Us Section -->
    <section class="about-section py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">About Us</h2>
        <div class="row">
          <div class="col-md-6">
            <img src="https://via.placeholder.com/500" alt="About Us" class="img-fluid rounded">
          </div>
          <div class="col-md-6">
            <p class="lead">
              At Issam Print Shop, we are dedicated to providing high-quality printing services that bring your ideas to life. Whether you need business cards, flyers, or posters, we’ve got you covered.
            </p>
            <p>
              Our team of professionals is committed to delivering exceptional results with a focus on quality, speed, and customer satisfaction. Let us help you make a lasting impression!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section py-5 bg-primary text-white">
      <div class="container">
        <h2 class="text-center mb-4">Contact Us</h2>
        <div class="row">
          <div class="col-md-6">
            <h4>Get in Touch</h4>
            <p>Email: ameggaoulou4@gmail.com</p>
            <p>Phone: 555-555-5555</p>
            <p>Location: Casablanca, 06 MA</p>
          </div>
          <div class="col-md-6">
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9:00am – 10:00pm</p>
            <p>Saturday: 9:00am – 6:00pm</p>
            <p>Sunday: 9:00am – 12:00pm</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppHero from '@/components/AppHero.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'HomePage',
  components: {
    AppHeader,
    AppHero,
    AppFooter,
  },
};
</script>

<style scoped>
.about-section {
  background-color: #f8f9fa;
}

.contact-section {
  background-color: #007bff; /* Primary color */
}

.contact-section h2,
.contact-section h4 {
  color: #fff;
}

.contact-section p {
  color: #f8f9fa;
}
</style>