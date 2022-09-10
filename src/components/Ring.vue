<template>
    <div :class="ringClass">
        <div class="ring__header">
            <!-- The image is used for mobile resolution -->
            <a title="wiki" :href="this.$store.state.BASE_URL + this.href" class="ring__link">
                <img class="ring__img" :src="this.img" :alt="this.name"/>
            </a>
            <a title="wiki" :href="this.$store.state.BASE_URL + this.href" class="ring__link">
                <div class="ring__name">{{this.name}}</div>
            </a>
        </div>
        <div class="ring__content">
            <!-- The image is used for tablet and desktop resolution -->
            <a title="wiki" :href="this.$store.state.BASE_URL + this.href" class="ring__link">
                <img class="ring__img" :src="this.img" :alt="this.name"/>
            </a>
            <div class="ring__descr">
                <div class="ring__effect">
                    <div class="ring__effect-title">Effect:</div>
                    <p class="ring__effect-text">{{ this.effect }}</p>
                </div>
                <div class="ring__availability">
                    <div class="ring__availability-title">Availability:</div>
                    <p class="ring__availability-text" v-for="item in availability" :key="item">{{ item }}</p>
                </div>
            </div>
        </div>
        <div class="ring__bottom">
            <CustomCheckbox
                @change-active="onChangeReceived"
                :is-active="this.received"
                :label="'received'"
                :inputId="this.name"
            />
            <CustomCheckbox
                @change-active="onChangeVisibleDescr"
                :is-active="this.contentHidden"
                :label="'hide description'"
                :inputId="this.name"
            />
        </div>
    </div>
</template>

<script>
    import CustomCheckbox from "@/components/UI/CustomCheckbox";
    export default {
        components: {CustomCheckbox},
        data() {
                return {
                    ringClass: this.contentHidden ? 'ring ring--hidden' :  'ring',
                }
            },
            props: {
                name: String,
                img: String,
                effect: String,
                availability: Array[String],
                href: String,
                index: Number,
                received: Boolean,
                contentHidden: Boolean,
            },
            methods: {
                onChangeReceived() {
                    this.$emit('received', this.index);
                },
                onChangeVisibleDescr() {
                    this.$emit('contentHide', this.index)
                }
            },
            watch: {
                contentHidden: function(newVal, prevVal) {
                    this.ringClass = newVal ? 'ring ring--hidden' :  'ring';
                }
            }
    }
</script>

<style lang="scss" scoped>
    .ring {
        background-color: rgba($color: $lochmara , $alpha: 0.1);
        
        margin-bottom: rem(10px);
        border: rem(1px) solid $primaryCerulean;

        // header

        &--hidden {
            & .ring__content {
                font-size: 0;
                
                & .ring__descr {
                    padding-top: 0;
                    padding-bottom: 0;
                }
                & p {
                    font-size: 0;
                }
                & *::before {
                    display: none;
                }
            }
            & .ring__img {
                height: 0;
                width: 0;
            }
        }

        &__header {
            display: flex;
            align-items: center;
            gap: rem(10px);
            border-bottom: rem(1px) solid $primaryCerulean;
        }
        &__name {
            color: $primaryCerulean;
            font-size: $font-size-default;
            font-weight: $font-weight-medium;
        }
        &__link {
            font-size: 0;
        }
        &__img {
            width: rem(70px);
            height: rem(70px);
            transition: 0.3s all;
        }

        // content

        &__content {
            display: flex;
            transition: 0.3s all;
            & .ring__img {
                display: none;
            }
            
        }
        &__descr {
            padding: rem(5px);
        }
        &__effect-title {
            color: $bahamaBlue;
        }
        &__effect-text {
            margin-left: rem(16px);
            font-size: $font-size-small;
            @include list-style-circle;
        }
        &__availability-title {
            color: $bahamaBlue;
        }
        &__availability-text {
            margin-left: rem(16px);
            font-size: $font-size-small;
            @include list-style-circle;
        }

        // bottom

        &__bottom {
            width: 100%;
            height: rem(40px);
            border-top: rem(1px) solid $primaryCerulean;
            display: flex;
            gap: rem(10px);
            justify-content: flex-end;
            padding-right: rem(10px);
        }

        @media screen and (#{$screen-tablet}) {
            &__header {
                & .ring__img {
                    display: none;
                }
                padding: rem(5px);
            }
            &__content {
                display: flex;
                align-items: center;
                & .ring__img {
                    display: block;
                }
            }
            &__img {
                width: rem(100px);
                height: rem(100px);
            }
            &__descr {
                border-left: rem(1px) solid $primaryCerulean;
                padding: rem(8px);
            }
        }
    }
</style>