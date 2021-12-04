<template>
     <a href="href">{{ title }}</a>
</template>

<script>
export default {
    name: "Link",
    props: {
        href: String,
        title: String
    }
}
</script>