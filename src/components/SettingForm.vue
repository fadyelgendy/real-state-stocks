<template>
  <div class="main_body p-3">
    <h1>settings</h1>
    <div class="form-inline">
      <div class="row">
        <div class="form-group col-lg-4 col-md-4">
          <label>Current Password</label>
          <input
            type="text"
            placeholder="**********"
            class="form-control my-2"
          />
        </div>
        <div class="form-group col-lg-4 col-md-4">
          <label>new Password</label>
          <input
            type="text"
            placeholder="**********"
            class="form-control my-2"
          />
        </div>
        <div class="form-group col-lg-4 col-md-4">
          <label>confirm <span class="hidden-md">new Password</span></label>
          <input
            type="text"
            placeholder="**********"
            class="form-control my-2"
          />
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <Button class="button">CONFIRM</Button>
        <button class="button">Edit profile</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingForm",
};
</script>