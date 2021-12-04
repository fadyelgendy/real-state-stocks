<template>
  <div class="col-lg-5 login_logo full_height hidden-sm">
    <Picture src="./icons/login.svg" alt="login logo" />
  </div>
</template>

<script>
import Picture from './core/Picture.vue'
export default {
  name: "LoginLogo",
  components: {
      Picture
  }
};
</script>