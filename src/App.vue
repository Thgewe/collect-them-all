<template>
    <Header></Header>
    <div class="wrapper">
        <router-view/>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
    components: {
        Header: Header,
    }
}
</script>
<style lang="scss">
    .wrapper {
        @include wrapper;
    }
</style>
