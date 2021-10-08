<template>
    <div>
        <!-- we'll add back button up here later -->
        <router-view :key="key" />
    </div>
</template>

<script>
export default {
    name: 'layout',
    computed: {
        key() {
            return this.$route.fullPath;
        },
    }
}
</script>