<template>
  <section id="products" class="catalog-section py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="catalog-title">Print perfection</h2>
          <h3 class="catalog-subtitle">Elevate your brand with stunning prints!</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
          <router-link :to="product.link" class="catalog-item">
            <div class="catalog-item-image">
              <img :src="product.image" :alt="product.name" class="img-fluid">
            </div>
            <div class="catalog-item-content">
              <h4 class="catalog-item-title">{{ product.name }}</h4>
              <p class="catalog-item-description">{{ product.description }}</p>
            </div>
          </router-link>
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
          name: 'Custom logos',
          description: 'Elevate your brand with a unique logo design.',
          image: 'https://cdn.b12.io/client_media/De0iDF3R/77eb7242-dce2-11ef-9315-0242ac110002-jpg-regular_image.jpeg',
          link: '/products/logos', // Updated to use Vue Router path
        },
        {
          id: 2,
          name: 'Vibrant posters',
          description: 'Capture attention with stunning, vibrant posters.',
          image: 'https://cdn.b12.io/client_media/De0iDF3R/775698c0-dce2-11ef-9315-0242ac110002-jpg-regular_image.jpeg',
          link: '/products/posters', // Updated to use Vue Router path
        },
        {
          id: 3,
          name: 'Eye-Catching banners',
          description: 'Promote your message with custom, durable banners.',
          image: 'https://cdn.b12.io/client_media/De0iDF3R/779e44f4-dce2-11ef-9315-0242ac110002-jpg-regular_image.jpeg',
          link: '/products/banners', // Updated to use Vue Router path
        },
      ],
    };
  },
};
</script>

<style scoped>
.catalog-section {
  background-color: #f8f9fa;
  padding: 100px 0;
}

.catalog-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.catalog-subtitle {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 40px;
}

.catalog-item {
  display: block;
  text-decoration: none;
  color: inherit;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.catalog-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.catalog-item-image img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eee;
}

.catalog-item-content {
  padding: 20px;
  text-align: center;
}

.catalog-item-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.catalog-item-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .catalog-title {
    font-size: 2rem;
  }

  .catalog-subtitle {
    font-size: 1.3rem;
  }

  .catalog-item-title {
    font-size: 1.3rem;
  }

  .catalog-item-description {
    font-size: 0.9rem;
  }
}
</style>