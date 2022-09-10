
<!-- Вообще тут должен быть не список колец, а список предметов.
  Но из за отсутствия других предметов я сделал сразу список колец.
  Потом, когда будут данные, я сделаю новый универсальный список и универсальный компонент,
  который сможет содержать любой предмет. -->

<template>
    <div class="item-list">
      <Search v-model="searchInputValue" />
        <ul class="item-list__rings">
            <li class="item-list__ring" v-for="ring in this.filteredList" :key="ring.name">
                <ring
                    :name="ring.name"
                    :img="ring.img"
                    :effect="ring.effect"
                    :availability="ring.availability"
                    :href="ring.href"
                    :index="ring.index"
                    :key="ring.name"
                    :received="ring.received"
                    :contentHidden="ring.hidden"
                    @received="onReceive"
                    @content-hide="onHide"
                >
                </ring>
            </li>
        </ul>
    </div>
</template>

<script>
    import Ring from '@/components/Ring.vue'
    import {getIfNullSetLocalStorage, setLocalStorage} from "@/utils/workWithLocalStorage";
    import Search from "@/components/Search";
    export default {
        data() {
            return {
                rings: [],
                searchInputValue: '',
            }
        },
        props: {
            ringOptions: Array[Object],
        },
        components: {
            Search,
            ring: Ring,
        },
        methods: {
            onReceive(index) {
                this.rings[index].received = !this.rings[index].received;
                setLocalStorage('ds3', this.rings[index].name, 'received', this.rings[index].received)
            },
            onHide(index) {
                this.rings[index].hidden = !this.rings[index].hidden;
                setLocalStorage('ds3', this.rings[index].name, 'contentHidden', this.rings[index].hidden)
            }
        },
        computed: {
            filteredList: function() {
                // Array filtering
                const filtered = [];
                const rings = [...this.rings];
                const rawRings = [];

                // If "ALL" is selected, it returns a list filtered by the search string only
                if (this.ringOptions[0].status) {
                    filtered.push(...rings)
                    return filtered.filter(ring => ring.name.toLowerCase().includes(this.searchInputValue.toLowerCase()))
                }

                // If "left" is selected, then fills the 'rawList' with rings with the field "received" = false
                // else fills 'rawList' with all rings
                if (this.ringOptions[1].status) {
                    rawRings.push(...rings.filter(ring => !ring.received))

                    // If only "left" is selected, then it fills "filtered", since it will not be filled anywhere else
                    if (!this.ringOptions[2].status && !this.ringOptions[3].status && !this.ringOptions[4].status) {
                        filtered.push(...rawRings)
                    }
                } else {
                    rawRings.push(...rings)
                }

                // If "NG" is selected, then fills in "filtered" depending on whether "NG+", "NG++" are selected
                if (this.ringOptions[2].status) {
                    if (!this.ringOptions[3].status && !this.ringOptions[4].status) {
                        filtered.push(...rawRings.filter(ring => {
                            return !ring.name.includes('(NG+)') && !ring.name.includes('(NG++)')
                        }))
                    } else if (this.ringOptions[3].status && this.ringOptions[4].status) {
                        filtered.push(...rawRings)
                    } else if (this.ringOptions[3].status) {
                        filtered.push(...rawRings.filter(ring => {
                            return !ring.name.includes('(NG++)')
                        }))
                    } else if (this.ringOptions[4].status) {
                        filtered.push(...rawRings.filter(ring => {
                            return !ring.name.includes('(NG+)')
                        }))
                    }

                // If "NG+" is selected, then fills in "filtered" depending on whether "NG++" are selected
                } else if (this.ringOptions[3].status) {
                    if (!this.ringOptions[4].status) {
                        filtered.push(...rawRings.filter(ring => {
                            return ring.name.includes('(NG+)') && !ring.name.includes('(NG++)')
                        }))
                    } else {
                        filtered.push(...rawRings.filter(ring => {
                            return ring.name.includes('(NG+)') || ring.name.includes('(NG++)')
                        }))
                    }

                // If "NG++" is selected, then fills in "filtered"
                } else if (this.ringOptions[4].status) {
                    filtered.push(...rawRings.filter(ring => {
                        return ring.name.includes('(NG++)')
                    }))
                }

                // returns "filtered" filtered by the input string
                return filtered.filter(ring => ring.name.toLowerCase().includes(this.searchInputValue.toLowerCase()));
            }
        },
        mounted () {

            // on mount creates an array of rings

            let k = 0;
            const newRings = [];
            this.$store.state.ds3.rings.forEach((elem, i) => {

              // if the properties exist, then it does nothing, if not, it creates them with an initial value
                getIfNullSetLocalStorage('ds3', elem.name, 'received', 'false')
                getIfNullSetLocalStorage('ds3', elem.name, 'contentHidden', 'false')
                const newRing = {
                    name: elem.name,
                    img: elem.img,
                    effect: elem.effect,
                    availability: elem.availability,
                    href: elem.href,
                    index: i + k,
                    received: JSON.parse(getIfNullSetLocalStorage('ds3', elem.name, 'received')),
                    hidden: JSON.parse(getIfNullSetLocalStorage('ds3', elem.name, 'contentHidden')),
                }
                newRings.push(newRing);

                // If there are "ng+" rings then it creates them and adds them to the array
                if (elem['ng+'] !== undefined) {
                    elem['ng+'].forEach((elemNg, j) => {
                        getIfNullSetLocalStorage('ds3', elemNg.name, 'received', 'false')
                        getIfNullSetLocalStorage('ds3', elemNg.name, 'contentHidden', 'false')
                        const newRingNg = {
                            name: elemNg.name,
                            img: elemNg.img,
                            effect: elemNg.effect,
                            availability: elemNg.availability,
                            href: elem.href,
                            index: i + j + 1 + k,
                            received: JSON.parse(getIfNullSetLocalStorage('ds3', elemNg.name, 'received')),
                            hidden: JSON.parse(getIfNullSetLocalStorage('ds3', elemNg.name, 'contentHidden')),
                        }
                        newRings.push(newRingNg);
                    })
                    k = k + elem['ng+'].length;
                }
            })
          this.rings.push(...newRings)
        }
    }
</script>

<style lang="scss" scoped>
    .item-list {
        margin-bottom: 2rem;
        &__rings {
            list-style: none;
        }
    }
</style>