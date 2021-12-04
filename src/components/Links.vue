<template>
  <div class="col-lg-2 col-md-6">
    <h4 class="p-2 border-bottom border-2">Home</h4>
    <div class="footer_links">
      <Link href="#" title="Properties" />
      <Link href="#" title="HOW IT WORKS" />
      <Link href="#" title="Our message" />
      <Link href="#" title="Our Advantages" />
      <Link href="#" title="Privacy Policy" />
    </div>
  </div>
</template>

<script>
import Link from "./core/Link.vue"
export default {
  name: "Links",
  components: {
      Link
  }
};
</script>