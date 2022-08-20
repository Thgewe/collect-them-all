<template>
    <div class="nav-in">
        <div class="nav-in__select">
            <custom-select
                :rawOptions="links"
            ></custom-select>
        </div>
        <ul class="nav-in__list">
            <li class="nav-in__item" v-for="link in links" :key="link">
                <router-link :to="$router.currentRoute.value.path.match(/^\/.*(?=\/.*)|^\/.*/) + '/' + link">{{ link }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: [
                    'description',
                    'rings',
                    'pyromancy',
                    'sorcery',
                    'miracles',
                    'infusions',
                    'gestures',
                ]
            }
        },
        name: 'nav-in',
        props: {
            links: Array[String],
        },
    }
</script>

<style lang="scss" scoped>
    .nav-in {
        margin-bottom: rem(20px);
        &__list {
            display: none;
            list-style: none;
        }
        
        @media screen and (#{$screen-tablet}) {
            
            &__select {
                display: none;
            }
            &__list {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: rem(10px);
                padding: rem(10px);
            }
            &__item {
                display: flex;
                align-items: center;
                gap: 10px;

                &:hover a {
                    color: $orangePeel;
                }
                & .router-link-active {
                    color: $orangePeel;
                }
            }
            &__item + &__item::before {
                content: '';
                display: block;
                width: 1px;
                height: 30px;
                background-color: $primaryCerulean;
            }
        }
    }
</style>