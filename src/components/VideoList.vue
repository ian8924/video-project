<template>
    <div class="videList">
        <VedioItem v-for="(item,index) in videoList" :key="index" :vedioInfo="item"/>
    </div>
</template>

<script>
import VedioItem from './VedioItem'
export default {
  name: 'VedioList',
  props: {
    videoList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    VedioItem
  }
}
</script>

<style scoped lang="scss">
.videList{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

</style>
