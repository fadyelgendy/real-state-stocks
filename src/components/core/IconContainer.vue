<template>
    <div :type="type" :name="icon">
        <Icon :class="{type, name}"></Icon>
    </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
    name: "IconContainer",

    data () {
        return {
            type: this.type,
            name: this.name
        }
    },
    components: {
        Icon
    }
}
</script>