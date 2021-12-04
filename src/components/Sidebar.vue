<template>
  <div class="col-lg-3 col-md-3 m-0 p-0">
    <div class="sidebar_item">
      <i class="fas fa-heart"></i>
      <span>favorite</span>
    </div>
    <div class="sidebar_item">
      <i class="fas fa-wallet"></i>
      <span>wallet</span>
    </div>
    <div class="sidebar_item">
      <i class="fas fa-file-alt"></i>
      <span>documents</span>
    </div>
    <div class="sidebar_item">
      <i class="fas fa-bullhorn"></i>
      <span>referral</span>
    </div>
    <div class="help">
      <p class="text-muted">help</p>
    </div>
    <div class="sidebar_item active">
      <i class="fas fa-cog"></i>
      <span>settings</span>
    </div>
    <div class="sidebar_item">
      <i class="fas fa-comment-dots"></i>
      <span>support</span>
    </div>
    <div class="sidebar_item">
      <i class="fas fa-sign-out-alt"></i>
      <router-link to="/login"><span>logout</span></router-link>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>