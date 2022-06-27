<template>
    <div class="logo">
        <router-link class="logo__link" to="/">
            <img class="logo__icon" src="@/assets/images/icons/medal_icon.svg">
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'logo'
}
</script>
<style lang="scss" scoped>
    .logo {
        cursor: pointer;
        width: 100%;
        height: 100%;
        transition: 0.2s all;
        &:hover {
            transform: scale(1.1);
        }
        &__link {
            
        }
        &__icon {
            display: block;
        }
    }
</style>