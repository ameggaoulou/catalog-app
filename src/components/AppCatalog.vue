<template>
  <section class="catalog-section py-5">
    <div class="container">
      <h2 class="text-center mb-5">Our Products</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
          <div class="card h-100">
            <img :src="product.image" class="card-img-top" :alt="product.name">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppCatalog',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Business Cards',
          description: 'High-quality business cards for your professional needs.',
          image: 'https://via.placeholder.com/300',
        },
        {
          id: 2,
          name: 'Flyers',
          description: 'Eye-catching flyers for promotions and events.',
          image: 'https://via.placeholder.com/300',
        },
        {
          id: 3,
          name: 'Posters',
          description: 'Large format posters for advertising and decoration.',
          image: 'https://via.placeholder.com/300',
        },
        // Add more products here
      ],
    };
  },
};
</script>

<style scoped>
.catalog-section {
  background-color: #fff;
}
.card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>