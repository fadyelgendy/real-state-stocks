<template>
  <div class="row">
    <LoginForm />
    <LoginLogo />
    <LoginSocial />
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import LoginLogo from "./LoginLogo.vue";
import LoginSocial from "./LoginSocial.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
    LoginLogo,
    LoginSocial,
  },
};
</script>