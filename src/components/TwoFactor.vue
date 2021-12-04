<template>
  <div class="main_body p-3">
    <h1>TWO-factor documentation</h1>
    <div class="d-flex justify-content-between">
      <p>
        This makes your account extra secure. Along with your password, you'll
        need to enter the secret code that we text your phone each time you log
        in Require code at login.
        <label class="switch">
          <input type="checkbox" checked />
          <span class="slider round"></span>
        </label>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwoFactor",
};
</script>