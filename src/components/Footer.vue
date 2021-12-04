<template>
  <footer class="text-white">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="text-white text-center my-3">
            NEED HELP GETTING STARTED?
          </h1>
          <p class="font-weight-bold text-center">
            Talk to one of our team members and start building your portfolio
          </p>
        </div>
      </div>
      <div class="row my-3">
        <Social />
        <Links />
        <Newsletter />
        <ContactUs />
      </div>
    </div>
    <p class="copy_right">
      &copy; 2021 <span>Real Estate Stocks</span> &reg; | All rights reserved
    </p>
  </footer>
</template>

<script>
import ContactUs from "./ContactUs.vue";
import Newsletter from "./Newsletter.vue";
import Social from "./Social.vue";
import Links from "./Links.vue";

export default {
  name: "Footer",
  components: {
    ContactUs,
    Newsletter,
    Social,
    Links,
  },
};
</script>