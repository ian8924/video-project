<template>
  <div class="about">
    <VedioList :videoList="likesList"/>
  </div>
</template>

<script>
import VedioList from '../components/VideoList'

export default {
  name: 'MyLikes',
  data () {
    return {
      data: []
    }
  },
  components: {
    VedioList
  },
  mounted () {
    const data = JSON.parse(localStorage.getItem('likes'))
    this.data = data
    this.$store.commit('clearVedioList')
    this.$store.dispatch('getVideoList')
  },
  computed: {
    likesList () {
      return this.$store.state.videoList.filter(item => {
        return this.data.indexOf(item.id) !== -1
      })
    }
  }
}
</script>

<style>

</style>
