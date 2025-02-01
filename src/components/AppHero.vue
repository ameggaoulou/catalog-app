<template>
  <section class="hero-section text-center text-white">
    <div class="container">
      <h1 class="display-4">Print your vision</h1>
      <p class="lead">Transform your ideas into stunning visuals.</p>
      <a href="#" class="btn btn-success btn-lg text-white">VIEW PRODUCTS</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppHero',
};
</script>

<style scoped>
.hero-section {
  background-image: url('@/assets/background1.jpeg'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  padding: 200px 0; /* Increased padding to account for the sticky header */
}

.hero-section h1 {
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-section .lead {
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-section .btn {
  margin-top: 20px;
  background-color: #28a745; /* Green color */
  border: none;
  padding: 10px 30px;
  font-size: 1.2rem;
}

.hero-section .btn:hover {
  background-color: #218838; /* Darker green on hover */
}
</style>