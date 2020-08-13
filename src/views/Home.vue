<template>
  <div class="home">
    <VedioList :videoList="videoList"></VedioList>
  </div>
</template>

<script>
import VedioList from '../components/VideoList'
export default {
  name: 'Home',
  components: {
    VedioList
  },
  mounted () {
    this.$store.dispatch('getVideoList')
  },
  computed: {
    videoList () {
      return this.$store.state.videoList
    },
    pageInfo () {
      return 0
    }
  }
}
</script>
