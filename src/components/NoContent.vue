<template>
    <div class="empty">
        <h1 class="empty__heading">
            This page is currently empty.
        </h1>
        <p class="empty__text">
            Someday there will be content here
        </p>
        <router-link class="empty__link" to="/">
            Home
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
    .empty {
        background-color: rgba($color: $lochmara , $alpha: 0.1);
        margin: rem(30px) auto;
        padding: $padding-default;
        border: rem(1px) solid $primaryCerulean;
        border-radius: rem(8px);
        width: fit-content;
        &__heading {
            font-size: $title-size-small;
            margin-bottom: rem(10px);
        }
        &__text {
            font-size: $font-size-default;
            margin-bottom: rem(10px);
        }

        @media screen and (#{$screen-tablet}){
            padding: rem(30px);
            border-radius: rem(20px);
            &__heading {
                font-size: $title-size-big;
            }
            &__text {
                font-size: $font-size-big;
            }
            &__link {
                font-size: $font-size-big;
            }
        }
    }
</style>
