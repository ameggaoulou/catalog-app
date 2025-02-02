<template>
    <section class="about-us-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <!-- Text Content -->
          <div class="col-md-6">
            <div class="about-us-content">
              <h2 class="about-us-title">Quality printing solutions</h2>
              <h3 class="about-us-subtitle">Your vision, our expertise.</h3>
              <p class="about-us-paragraph">
                At Issam Print Shop in Casablanca, MA, we bring your ideas to life with our high-quality printing services. Specializing in logos, posters, banners, and wall art, we pride ourselves on delivering exceptional results that leave a lasting impression. Our commitment to excellence ensures that every project, big or small, meets your expectations. Explore our diverse product categories, choose your colors, and see our gallery of previous work. Let us help you make your mark!
              </p>
              
            </div>
          </div>
  
          <!-- Image Content -->
          <div class="col-md-6">
            <div class="about-us-image">
              <img src="@/assets/background2.jpeg" alt="printing services" class="img-fluid rounded">
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
  };
  </script>
  
  <style scoped>
  .about-us-section {
    background-color: #fff;
    padding: 100px 0;
  }
  
  .about-us-content {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .about-us-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
  }
  
  .about-us-subtitle {
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 20px;
  }
  
  .about-us-paragraph {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 30px;
  }
  
  .about-us-cta .btn-secondary {
    background-color: #6c757d;
    border: none;
    padding: 10px 30px;
    font-size: 1.1rem;
    color: #fff;
    transition: background-color 0.3s ease;
  }
  
  .about-us-cta .btn-secondary:hover {
    background-color: #5a6268;
  }
  
  .about-us-image img {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .about-us-content {
      text-align: center;
      margin-bottom: 30px;
    }
  
    .about-us-title {
      font-size: 2rem;
    }
  
    .about-us-subtitle {
      font-size: 1.3rem;
    }
  
    .about-us-paragraph {
      font-size: 1rem;
    }
  }
  </style>