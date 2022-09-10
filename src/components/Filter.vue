<template>
    <div class="filter">
        <div
            v-for="option in options"
            :key="option.name"
            :class="setClass(option.status)"
            @click="onClick">{{option.name}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                default: () => [],
            },
        },
        methods: {
            setClass(status) {
                return status ? 'filter__button filter__button--active' : 'filter__button'
            },
            onClick(e) {
                this.$emit('changeStatus', e.currentTarget.innerText);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .filter {
        display: flex;
        justify-content: center;
        gap: rem(10px);
        align-items: center;
        margin-bottom: rem(20px);
        &__button {
            cursor: pointer;
            width: 100%;
            max-width: rem(100px);
            height: rem(40px);
            background-color: $primaryCerulean;
            border-radius: rem(8px);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
            transition: 0.2s all;
            &:hover {
                background-color: $bahamaBlue;
            }
            &--active {
                background-color: $bahamaBlue;
            }
        }
    }
</style>