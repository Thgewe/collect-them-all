<template>
    <header class="header">
        <div class="header__wrapper">
            <div class="header__content">
                <div class="header__logo">
                    <logo></logo>
                </div>
                <nav class="header__nav">
                    <navbar></navbar>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .header {
        background-color: $pattensBlue;
        box-shadow: 0px 7px 10px -4px rgba(34, 60, 80, 0.2);
        position: sticky;
        top: 0;
        &__wrapper {
            @include wrapper;
        }
        &__content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: rem(10px);
            padding-bottom: rem(10px);
        }
        &__logo {
            width: rem(40px);
            height: rem(40px);
        }
    }
</style>