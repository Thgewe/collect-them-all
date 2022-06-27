<template>
    <div class="nav">
        <ul class="nav__list">
            <li class="nav__item" v-for="value in values" :key="value.name">
                <router-link :to="value.value">{{value.name}}</router-link>
            </li>
        </ul>
        <div class="nav__burger">
            <burger :values="values">
            </burger>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        data() {
            return {
                values: [
                    {
                        value: '/',
                        name: 'Home',
                    },
                    {
                        value: '/Dark_Souls',
                        name: 'Dark Souls',
                    },
                    {
                        value: '/Dark_Souls_II',
                        name: 'Dark Souls II',
                    },
                    {
                        value: '/Dark_Souls_III',
                        name: 'Dark Souls III',
                    },
                ]
            }
        },
        methods: {
            changeRoute(e) {
                console.log(this.$route);
                this.$router.push({ path: e.target.value })
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .nav {

        
        &__list {
            display: none;
        }
        &__burger {
            font-family: inherit;
            height: rem(40px);
            border-left: rem(1px) solid $bunker;
            border-right: rem(1px) solid $bunker;
            outline: none;
            border: none;
            background-color: transparent;
        }

        
        @media screen and (#{$screen-tablet}) {
            &__list {
                display: flex;
                list-style: none;
            }
            &__burger {
                display: none;
            }
            &__item {
                & > .router-link-active {
                    color: $orangePeel;
                }
                &:hover > a {
                    color: $orangePeel;
                }
                & + & {
                    position: relative;
                    margin-left: rem(20px);
                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        background-color: $primaryCerulean;
                        top: rem(-10px);
                        left: rem(-10px);
                        width: rem(1px);
                        height: calc(100% + rem(20px));
                    }
                }
            }

        }
    }
</style>