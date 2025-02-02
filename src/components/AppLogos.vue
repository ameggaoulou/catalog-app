<template>
    <div>
      
      <section class="product-page py-5">
        <div class="container">
          <h2 class="text-center mb-4">Custom Logos</h2>
          <div class="row">
            <div class="col-md-6">
              <img src="https://cdn.b12.io/client_media/De0iDF3R/77eb7242-dce2-11ef-9315-0242ac110002-jpg-regular_image.jpeg" alt="Custom Logos" class="img-fluid">
            </div>
            <div class="col-md-6">
              <p class="lead">
                Elevate your brand with a unique logo design. Our custom logos are crafted to make your business stand out.
              </p>
              <div class="product-colors">
                <span style="background-color: #000000;"></span>
                <span style="background-color: #FFFFFF;"></span>
                <span style="background-color: #FF0000;"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'AppLogos',
    components: {
      
    },
  };
  </script>
  
  <style scoped>
  .product-page {
    background-color: #fff;
  }
  
  .product-colors {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  
  .product-colors span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
  </style>