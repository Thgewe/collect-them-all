<template>
  <div class="home">
    <h1 class="title">Collect them all</h1>
    <p class="descr">It is supposed to be a simple guide to get all achievements for collecting items in the Dark Souls series.</p>
    <p class="descr">But I haven't collected any data yet, so there are only <router-link to="/Dark_Souls_III/rings">rings</router-link> for Dark Souls 3</p>
  </div>
</template>

<script>
    export default {
        name: 'HomeView',
    }
</script>
<style lang="scss" scoped>

.home {

}
.title {

}
.descr {

}
@media screen and (#{$screen-tablet}) {
  .descr {
    font-size: 1.4rem;
  }
}

</style>