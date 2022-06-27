<template>
    <div class="burger">
        <div :class="buttonClass" @click="onClick">
            <img class="burger__icon" src="@/assets/images/icons/burger.svg">
        </div>
        <div :class="listClass">
            <div class="burger__covering" @click="onClick"></div>
            <div
                class="burger__item"
                v-for="value in values"
                :key="value.name"
            >
                <router-link :to="value.value" @click="onClick">{{value.name}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: false,
                buttonClass: 'burger__button',
                listClass: 'burger__list',
            }
        },
        name: 'burger',
        props: {
            values: Array[String],
        },
        methods: {
            onClick() {
                this.active = !this.active;
            }
        },
        watch: {
            active: function () {
                this.buttonClass = this.active ? 'burger__button burger__button--active' : 'burger__button';
                this.listClass = this.active ? 'burger__list burger__list--active' : 'burger__list';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .burger {   
        position: relative;

        &__button {
            transition: 0.4s all;
            width: rem(40px);
            height: rem(40px);
            cursor: pointer;
            &--active {
                transform: rotate(180deg);
            }
        }
        &__icon {
            display: block;
            width: 100%;
        }
        &__list {
            position: absolute;
            width: rem(200px);
            top: rem(-10px);
            right: rem(-20px);
            padding: rem(10px);
            height: 100vh;
            background-color: $cuttySark;
            transform: translate(110%);
            transition: 0.3s all;
            &--active {
                transform: translate(0);
                & .burger__covering {
                    display: block;
                }
            }
        }
        &__covering {
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            background-color: $bunker;
            opacity: 0.2;
            width: rem(1000px);
            transform: translate(-100%);
            height: 100vh;
            display: none;
        }
        &__item {
            & + & {
                &::before {
                    content: '';
                    display: block;
                    width: 100%;
                    height: rem(1px);
                    background-color: $primaryCerulean;
                    margin-top: rem(5px);
                    margin-bottom: rem(5px);
                }
            }
            & > .router-link-active {
                color: $orangePeel;
            }
        }
    }
</style>