<template>
    <div class="ds3">
        <div class="ds3__rings">
            <nav-in :links="links"></nav-in>
            <Filter :options="options" @changeStatus="changeOptionStatus"></Filter>
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
            // TODO move it to a separate component
            changeOptionStatus(text) {
                const onAllOffOther = () => {
                    this.options[0].status = true;
                    this.options[1].status = false;
                    this.options[2].status = false;
                    this.options[3].status = false;
                    this.options[4].status = false;
                }
                const checkIfAll = () => {
                    if (
                        this.options[1].status &&
                        this.options[2].status &&
                        this.options[3].status &&
                        this.options[4].status
                    ) {
                        onAllOffOther();
                    } else {
                        this.options[0].status = false;
                    }
                }
                const checkIfZero = () => {
                  if (
                      !this.options[0].status &&
                      !this.options[1].status &&
                      !this.options[2].status &&
                      !this.options[3].status &&
                      !this.options[4].status
                  ) {
                    this.options[0].status = true;
                  }
                }
                switch(text) {
                    case 'All':
                        onAllOffOther();
                        break;
                    case 'left':
                        this.options[1].status = !this.options[1].status;
                        checkIfAll();
                        checkIfZero();
                        break;
                    case 'NG':
                        this.options[2].status = !this.options[2].status;
                        checkIfAll();
                        checkIfZero();
                        break;
                    case 'NG+':
                        this.options[3].status = !this.options[3].status;
                        checkIfAll();
                        checkIfZero();
                        break;
                    case 'NG++':
                        this.options[4].status = !this.options[4].status;
                        checkIfAll();
                        checkIfZero();
                        break;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>