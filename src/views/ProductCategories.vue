<template>
    <div class="container py-5">
      <h2 class="text-center mb-4">Product Categories</h2>
      <div class="row">
        <div
          v-for="category in categories"
          :key="category.id"
          class="col-md-4 mb-4"
        >
          <router-link :to="'/products/' + category.slug" class="text-decoration-none">
            <div class="card h-100 text-center">
              <img :src="category.image" class="card-img-top" :alt="category.name">
              <div class="card-body">
                <h5 class="card-title">{{ category.name }}</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCategories',
    data() {
      return {
        categories: [
          { id: 1, name: 'Custom Logos', slug: 'logos', image: 'https://via.placeholder.com/300' },
          { id: 2, name: 'Vibrant Posters', slug: 'posters', image: 'https://via.placeholder.com/300' },
          { id: 3, name: 'Eye-Catching Banners', slug: 'banners', image: 'https://via.placeholder.com/300' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .card {
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  </style>
  