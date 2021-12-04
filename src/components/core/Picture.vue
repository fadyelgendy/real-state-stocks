<template>
  <img :src="src" :alt="alt" />
</template>

<script>
export default {
  name: "Picture",
  props: {
    src: String,
    alt: String,
  },
};
</script>