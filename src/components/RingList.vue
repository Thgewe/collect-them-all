<template>
    <div class="item-list">
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
                    @received="onReceive"
                >
                </ring>
            </li>
        </ul>
    </div>
</template>

<script>
    import Ring from '@/components/Ring.vue'

    export default {
        data() {
            return {
                rings: [],
            }
        },
        props: {
            ringOptions: Array[Object],
        },
        components: {
            ring: Ring,
        },
        methods: {
            onReceive(index) {
                // console.log(this.rings[0])
                this.rings[index].received = !this.rings[index].received;
            }
        },
        computed: {
            filteredList: function() {
                const filtered = [];
                const rings = [...this.rings];
                if (this.ringOptions[0].status) {
                    filtered.push(...rings)
                    return filtered;
                }
                if (this.ringOptions[1].status) {
                    if (filtered.length === 0) {
                        filtered.push(...rings.filter(ring => !ring.received));
                    } else {
                        filtered.push(...filtered.filter(ring => !ring.received));
                    }
                    // filtered.push(...rings.filter(ring => !ring.received));
                }
                if (this.ringOptions[2].status) {
                    // filtered.push(...filtered.filter(ring => {
                    //     return !ring.name.includes('(NG+)') & !ring.name.includes('(NG++)');
                    // }));
                    if (filtered.length === 0) {
                        filtered.push(...rings.filter(ring => {
                            return !ring.name.includes('(NG+)') & !ring.name.includes('(NG++)');
                        }));
                    } else {
                        filtered.push(...filtered.filter(ring => {
                            return !ring.name.includes('(NG+)') & !ring.name.includes('(NG++)');
                        }));
                    }
                }
                if (this.ringOptions[3].status) {
                    // filtered.push(...filtered.filter(ring => ring.name.includes('(NG+)')));
                    if (filtered.length === 0) {
                        filtered.push(...rings.filter(ring => ring.name.includes('(NG+)')));
                    } else {
                        filtered.push(...filtered.filter(ring => ring.name.includes('(NG+)')));
                    }
                }
                if (this.ringOptions[4].status) {
                    // filtered.push(...filtered.filter(ring => ring.name.includes('(NG++)')));
                    if (filtered.length === 0) {
                        filtered.push(...rings.filter(ring => ring.name.includes('(NG++)')));
                    } else {
                        filtered.push(...filtered.filter(ring => ring.name.includes('(NG++)')));
                    }
                }
                return filtered;
            }
        },
        mounted () {
            let k = 0;
            this.$store.state.ds3.rings.forEach((elem, i) => {
                const newRing = {
                    name: elem.name,
                    img: elem.img,
                    effect: elem.effect,
                    availability: elem.availability,
                    href: elem.href,
                    index: i + k,
                    received: false,
                }
                this.rings.push(newRing);
                
                if (elem['ng+'] !== undefined) {
                    elem['ng+'].forEach((elemNg, j) => {
                        const newRingNg = {
                            name: elemNg.name,
                            img: elemNg.img,
                            effect: elemNg.effect,
                            availability: elemNg.availability,
                            href: elem.href,
                            index: i + j + 1 + k,
                            received: false,
                        }
                        this.rings.push(newRingNg);
                    })
                    k = k + elem['ng+'].length;
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .item-list {

        &__rings {
            list-style: none;
        }
    }
</style>