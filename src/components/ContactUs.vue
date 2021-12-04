<template>
  <div class="col-lg-2 col-md-6">
    <h4 class="p-2 border-bottom border-2">call us</h4>
    <div class="footer_links">
      <Link href="#" title="info@res.sa.com" />
      <Link href="#" title="+966552389207" />
      <Link href="#" title="Kingdom Saudi Arabia" />
    </div>
  </div>
</template>

<script>
import Link from "./core/Link.vue"

export default {
  name: "ContactUs",
  components: {
      Link
  }
};
</script>