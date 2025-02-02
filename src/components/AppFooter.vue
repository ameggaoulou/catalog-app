<template>
  <footer class="bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <h5>Contact</h5>
          <p>Email: ameggaoulou4@gmail.com</p>
          <p>Phone: 555-555-5555</p>
          <p>Location: Casablanca, 06 MA</p>
        </div>
        <div class="col-md-4 mb-4 d-flex justify-content-end">
          <div>
            <h5>Follow Us</h5>
            <div class="social-icons">
              <a href="#" class="text-white me-3"><i class="fab fa-facebook"></i></a>
              <a href="#" class="text-white me-3"><i class="fab fa-instagram"></i></a>
              <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-4">
        <p>&copy; 2023 ISSAM PRINT SHOP. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
footer {
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}
.social-icons {
  font-size: 1.5rem;
}
</style>