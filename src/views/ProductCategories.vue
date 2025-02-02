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
            <div class="card-img-container">
              <img :src="category.image" class="card-img-top" :alt="category.name">
            </div>
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
        { id: 1, name: 'Logos', slug: 'logos', image: require('@/assets/logos.jpg') },
        { id: 2, name: 'Posters', slug: 'posters', image: require('@/assets/posters.jpg') },
        { id: 3, name: 'Banners', slug: 'banners', image: require('@/assets/banners.jpg') },
        { id: 4, name: 'Wall Decor', slug: 'wall-decor', image: require('@/assets/wallpapers.jpg') },
      ],
    };
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
  justify-content: center;
  align-items: center;
}

.card-title {
  font-size: 1.25rem; /* Adjust the font size as needed */
  text-align: center;
}
</style>
