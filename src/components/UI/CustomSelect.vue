<template>
    <div class="select" @mouseleave="onMouseLeave" ref="select">
        <div class="select__header" @click="onHeaderClick">
            <div class="select__current">{{ this.currentText }}</div>
            <div class="select__arrow">
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="select__body" ref="body">
            <div 
                @click="onItemClick" 
                v-for="option in formatOptions(rawOptions)" 
                :key="option.value"
                :value="option.value"
                :class="option.active"
            >
                {{ option.value }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentElem: '',
                currentText: 'select',
            }
        },
        name: 'custom-select',
        props: {
            rawOptions: Array[String],
        },
        methods: {
            formatOptions(array) {
                const newArr = [];
                for (let i = 0; i < array.length; i++) {
                    const obj = {
                        value: array[i],
                        active: 'select__item',
                        // to: this.$router.currentRoute.value.path.match(/^\/.*(?=\/.*)|^\/.*/) + '/' + array[i],
                    }
                    // if (i === 0) {
                    //     obj.active = 'select__item select__item--active';
                    //     newArr.push(obj);
                    //     continue;
                    // }
                    newArr.push(obj);
                }
                return newArr;
            },
            onMouseLeave(e) {
                e.currentTarget.classList.remove('select--active');
            },
            onHeaderClick(e) {
                e.currentTarget.parentNode.classList.toggle('select--active');
            },
            onItemClick(e) {
                if (this.currentText === 'select') {

                } else {
                    this.currentElem.classList.remove('select__item--active');
                }
                this.currentElem = e.currentTarget;
                this.currentElem.classList.add('select__item--active');
                this.currentText = this.currentElem.innerText;
                this.$refs.select.classList.remove('select--active');
                this.$router.push(this.$router.currentRoute.value.path.match(/^\/.*(?=\/.*)|^\/.*/) + '/' + e.currentTarget.innerText)
            }
        },
        mounted() {
            // this.currentElem = this.$refs.body.children[0];
        }
    }
</script>

<style lang="scss" scoped>
    .select {
        background-color: white;
        overflow: hidden;
        position: relative;
        max-width: rem(150px);
        transition: 0.4s all;
        margin: 0 auto;
        &--active {
            overflow: visible;
            & .select__header {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
            & .select__arrow {
                transform: rotateX(180deg);
            }
        }
        &__header {
            display: flex;
            width: 100%;
            justify-content: space-between;
            border: rem(1px) solid $primaryCerulean;
            border-radius: rem(5px);
            padding: rem(5px) rem(10px);
        }
        &__arrow {
            position: relative;
            transition: 0.4s all;
            & span {
                display: block;
                width: rem(16px);
                height: rem(3px);
                position: absolute;
                top: rem(12px);
                right: rem(8px);
                background-color: $orangePeel;
            }
            & > span {
                transform: translate(58%) rotate(-45deg);
            }
            & span + span {
                transform: rotate(45deg);
            }
        }
        &__body {

            border-left: 1px solid $primaryCerulean;
            border-right: 1px solid $primaryCerulean;
            border-bottom: 1px solid $primaryCerulean;
            position: absolute;
            width: 100%;
            top: 100%;
        }
        &__item {
            padding: rem(5px) rem(10px);
            cursor: pointer;
            background-color: white;
            &:hover {
                background-color: $mercury;
            }
            &--active {
                display: none;
            }
        }
    }
</style>