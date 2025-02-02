<template>
  <section id="contact" class="contact-section py-5 bg-light">
    <div class="container">
      <div class="row">
        <!-- Contact Form -->
        <div class="col-md-6">
          <div class="contact-form">
            <h2 class="contact-form__title">Get in touch</h2>
            <h3 class="contact-form__subtitle">We’re here to help you print your vision.</h3>
            <form class="form">
              <div class="form-group">
                <label for="name">Name <span class="required">*</span></label>
                <input type="text" id="name" name="name" placeholder="Jane Smith" required>
              </div>
              <div class="form-group">
                <label for="email">Email address <span class="required">*</span></label>
                <input type="email" id="email" name="email" placeholder="email@website.com" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone number <span class="required">*</span></label>
                <input type="tel" id="phone" name="phone" placeholder="555-555-5555" required>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4"></textarea>
              </div>
              <div class="form-group form-group--checkbox">
                <input type="checkbox" id="consent" name="consent" required>
                <label for="consent">
                  I allow this website to store my submission so they can respond to my inquiry. <span class="required">*</span>
                </label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        <!-- Contact Details -->
        <div class="col-md-6">
          <div class="contact-details">
            <h2 class="contact-details__title">Get in touch</h2>
            <div class="contact-details__email">
              <svg height="8px" viewBox="0 0 12 8" width="12px" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8h11.2V0H0v8zm5.6-2.673l1.095-.914 3.522 2.947H.983l3.522-2.947 1.095.914zm1.594-1.33l3.366-2.81v5.626L7.194 3.996zM5.6 4.492L.985.64h9.23L5.6 4.493zm-1.594-.497L.64 6.813V1.186l3.366 2.81z" fill-rule="nonzero" stroke="none" stroke-width="1"></path>
              </svg>
              <a href="mailto:ameggaoulou4@gmail.com">ameggaoulou4@gmail.com</a>
            </div>
            <div class="contact-details__location">
              <h2 class="contact-details__title">Location</h2>
              <p class="contact-details__address">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 0C156.748 0 76 80.748 76 180c0 33.534 9.289 66.26 26.869 94.652l142.885 230.257A15 15 0 00258.499 512h.119a14.997 14.997 0 0012.75-7.292L410.611 272.22C427.221 244.428 436 212.539 436 180 436 80.748 355.252 0 256 0zm128.866 256.818L258.272 468.186l-129.905-209.34C113.734 235.214 105.8 207.95 105.8 180c0-82.71 67.49-150.2 150.2-150.2S406.1 97.29 406.1 180c0 27.121-7.411 53.688-21.234 76.818z"></path>
                  <path d="M256 90c-49.626 0-90 40.374-90 90 0 49.309 39.717 90 90 90 50.903 0 90-41.233 90-90 0-49.626-40.374-90-90-90zm0 150.2c-33.257 0-60.2-27.033-60.2-60.2 0-33.084 27.116-60.2 60.2-60.2s60.1 27.116 60.1 60.2c0 32.683-26.316 60.2-60.1 60.2z"></path>
                </svg>
                <a href="https://www.google.com/maps/place/+Casablanca+06+MA" target="_blank" rel="noreferrer">
                  Casablanca, 06 MA
                </a>
              </p>
            </div>
            <div class="contact-details__hours">
              <h2 class="contact-details__title">Hours</h2>
              <ol class="hours-list">
                <li class="hours-list__item">
                  <div class="hours-list__day">Mon<span class="hidden-xs-down hidden-sm-down hidden-md-down">day</span></div>
                  <div class="hours-list__from">9:00am</div>
                  <div class="hours-list__dash">–</div>
                  <div class="hours-list__to">10:00pm</div>
                </li>
                <li class="hours-list__item">
                  <div class="hours-list__day">Tue<span class="hidden-xs-down hidden-sm-down hidden-md-down">sday</span></div>
                  <div class="hours-list__from">9:00am</div>
                  <div class="hours-list__dash">–</div>
                  <div class="hours-list__to">10:00pm</div>
                </li>
                <li class="hours-list__item">
                  <div class="hours-list__day">Wed<span class="hidden-xs-down hidden-sm-down hidden-md-down">nesday</span></div>
                  <div class="hours-list__from">9:00am</div>
                  <div class="hours-list__dash">–</div>
                  <div class="hours-list__to">10:00pm</div>
                </li>
                <li class="hours-list__item">
                  <div class="hours-list__day">Thu<span class="hidden-xs-down hidden-sm-down hidden-md-down">rsday</span></div>
                  <div class="hours-list__from">9:00am</div>
                  <div class="hours-list__dash">–</div>
                  <div class="hours-list__to">10:00pm</div>
                </li>
                <li class="hours-list__item">
                  <div class="hours-list__day">Fri<span class="hidden-xs-down hidden-sm-down hidden-md-down">day</span></div>
                  <div class="hours-list__from">9:00am</div>
                  <div class="hours-list__dash">–</div>
                  <div class="hours-list__to">10:00pm</div>
                </li>
                <li class="hours-list__item">
                  <div class="hours-list__day">Sat<span class="hidden-xs-down hidden-sm-down hidden-md-down">urday</span></div>
                  <div class="hours-list__from">9:00am</div>
                  <div class="hours-list__dash">–</div>
                  <div class="hours-list__to">6:00pm</div>
                </li>
                <li class="hours-list__item">
                  <div class="hours-list__day">Sun<span class="hidden-xs-down hidden-sm-down hidden-md-down">day</span></div>
                  <div class="hours-list__from">9:00am</div>
                  <div class="hours-list__dash">–</div>
                  <div class="hours-list__to">12:00pm</div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactUs',
};
</script>

<style scoped>
.contact-section {
  background-color: #f8f9fa;
  padding: 100px 0;
}

.contact-form {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-form__title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.contact-form__subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
}

.form-group--checkbox {
  display: flex;
  align-items: center;
}

.form-group--checkbox input {
  margin-right: 10px;
}

.form-group--checkbox label {
  margin-bottom: 0;
}

.required {
  color: #ff0000;
}

.btn-primary {
  background-color: #28a745;
  border: none;
  padding: 10px 30px;
  font-size: 1.1rem;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #218838;
}

.contact-details {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-details__title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.contact-details__email,
.contact-details__location,
.contact-details__hours {
  margin-bottom: 20px;
}

.contact-details__email a,
.contact-details__location a {
  color: #28a745;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-details__email a:hover,
.contact-details__location a:hover {
  color: #218838;
}

.hours-list {
  list-style: none;
  padding: 0;
}

.hours-list__item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #666;
}

.hours-list__day {
  font-weight: bold;
}

.hours-list__dash {
  margin: 0 10px;
}
</style>