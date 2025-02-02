<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">{{ selectedCategory.name }}</h2>
    <div class="row">
      <div v-for="product in selectedCategory.products" :key="product.id" class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-img-container">
            <img :src="product.image" class="card-img-top" :alt="product.name">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <div class="product-colors">
              <span v-for="color in product.colors" :key="color" :style="{ backgroundColor: color }" class="color-dot"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  props: ['category'],
  data() {
    return {
      categories: {
        logos: {
          name: 'Custom Logos',
          products: [
            { id: 1, name: 'Premium Business Card', description: 'Elegant business cards.', image: 'https://via.placeholder.com/300', colors: ['#000', '#FFF', '#F00'] },
            { id: 2, name: 'Eco-Friendly Card', description: 'Sustainable business cards.', image: 'https://via.placeholder.com/300', colors: ['#008000', '#FFD700', '#0000FF'] },
          ],
        },
        posters: {
          name: 'Vibrant Posters',
          products: [
            { id: 3, name: 'Event Poster', description: 'Eye-catching posters.', image: 'https://via.placeholder.com/300', colors: ['#FF0000', '#00FF00', '#0000FF'] },
          ],
        },
        banners: {
          name: 'Eye-Catching Banners',
          products: [
            { id: 4, name: 'Outdoor Banner', description: 'Durable outdoor banners.', image: 'https://via.placeholder.com/300', colors: ['#800080', '#FFA500', '#FFFF00'] },
          ],
        },
      },
    };
  },
  computed: {
    selectedCategory() {
      return this.categories[this.$route.params.category] || { name: 'Category Not Found', products: [] };
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  transform: scale(1.05);
}

.card-img-container {
  height: 200px; /* Fixed height for images */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-img-top {
  object-fit: cover; /* Ensure images maintain aspect ratio and fill the container */
  height: 100%;
  width: 100%;
}

.card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.25rem; /* Adjust font size as needed */
  text-align: center;
}

.product-colors {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.color-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ddd;
}
</style>
