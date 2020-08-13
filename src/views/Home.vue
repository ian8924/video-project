<template>
  <div class="home">
    <VedioList :videoList="videoList"/>
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
    }
  },
  methods: {
  }
}
</script>
