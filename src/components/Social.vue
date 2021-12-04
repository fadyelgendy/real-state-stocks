<template>
  <div class="col-lg-3 col-md-6">
    <Picture
      height="60"
      class="d-block mx-auto footer_logo"
      src="./icons/logo_footer.svg"
      alt="Real Estate logo"
    />

    <div
      class="
        social_contianer
        text-center
        my-5
        d-flex
        justify-content-center
        align-items-center
      "
    >
      <div class="icon">
        <i class="fab fa-twitter"></i>
      </div>
      <div class="icon mx-4">
        <i class="fab fa-instagram"></i>
      </div>
      <div class="icon">
        <i class="fab fa-linkedin"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Picture from "./core/Picture.vue";

export default {
  name: "Social",
  components: {
    Picture,
  },
};
</script>