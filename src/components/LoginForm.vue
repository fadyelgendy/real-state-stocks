<template>
  <div class="col-lg-6 full_height">
    <div
      class="login d-flex align-content-center flex-wrap justify-content-center"
    >
      <form>
        <h3 class="my-5">Sign in</h3>
        <label>mobile number <span class="text-danger">*</span></label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Picture src="./icons/saudi_arabia.svg" alt="SA flag" />
              +966
            </button>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label=""
            placeholder="XXXXXXXXXXXXX"
          />
        </div>
        <div class="form-group">
          <label>password <span class="text-danger">*</span></label>
          <input
            type="password"
            name=""
            id=""
            class="form-control"
            placeholder="***************"
          />
        </div>

        <div class="py-2">
          <a href="#" class="text-color">Forgot your password ?</a>
        </div>

        <div class="py-5">
          <router-link to="/" class="button d-block w-100 py-2">Sign in</router-link>
        </div>
      </form>
    </div>
    <div class="text-center">
      Don't already have an account?
      <a href="#" class="text-color">Create account</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>