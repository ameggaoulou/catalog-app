<template>
  <header class="bg-white shadow-sm p-4 sticky-top">
    <div class="container d-flex justify-content-between align-items-center">
      <h1 class="m-0 text-dark" style="font-size: 2rem;">ISSAM PRINT SHOP</h1>
      <nav>
        <a href="#" class="text-dark me-4">Home</a>
        <a href="#" class="text-dark me-4">About</a>
        <a href="#" class="text-dark me-4">Products</a>
        <a href="#" class="text-dark me-4">Gallery</a>
        <a href="#" class="text-dark">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure the header stays above other content */
}

.sticky-top {
  position: sticky;
  top: 0;
}

nav a {
  font-size: 1.1rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #28a745 !important; /* Green color on hover */
}
</style>