<template>
    <div class="ds3">
        <div class="ds3__rings">
            <!-- replace -->
            <nav-in :links="links"></nav-in>
            <Filter :options="options" @changeStatus="changeStatus"></Filter>
            <router-view :ringOptions="options"></router-view>
        </div>
    </div>
</template>

<script>
    import Filter from '@/components/Filter.vue';
    export default {
        name: 'Dark_Souls_III_View',
        data() {
            return {
                links: [
                    'rings',
                    'miracles',
                    'pyromancy',
                    'sorcery',
                    'infusions',
                    'gestures'
                ],
                options: [
                    {
                        name: 'All',
                        status: true,
                    },
                    {
                        name: 'left',
                        status: false,
                    },
                    {
                        name: 'NG',
                        status: false,
                    },
                    {
                        name: 'NG+',
                        status: false,
                    },
                    {
                        name: 'NG++',
                        status: false,
                    }
                ]
            }
        },
        components: {
            Filter: Filter,
        },
        methods: {
            changeStatus(text) {
                const onAllOffOther = () => {
                    this.options[0].status = true;
                    this.options[1].status = false;
                    this.options[2].status = false;
                    this.options[3].status = false;
                    this.options[4].status = false;
                }
                const checkIfAll = () => {
                    if (
                        this.options[1].status &
                        this.options[2].status &
                        this.options[3].status &
                        this.options[4].status
                    ) {
                        onAllOffOther();
                    } else {
                        this.options[0].status = false;
                    }
                }
                switch(text) {
                    case 'All':
                        onAllOffOther();
                        break;
                    case 'left':
                        this.options[1].status = !this.options[1].status;
                        checkIfAll();
                        break;
                    case 'NG':
                        this.options[2].status = !this.options[2].status;
                        checkIfAll();
                        break;
                    case 'NG+':
                        this.options[3].status = !this.options[3].status;
                        checkIfAll();
                        break;
                    case 'NG++':
                        this.options[4].status = !this.options[4].status;
                        checkIfAll();
                        break;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>