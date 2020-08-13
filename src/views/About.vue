<template>
  <div class="about">
    <h1>{{data}}</h1>
  </div>
</template>

<script>
export default {
  name: 'LikeList',
  data () {
    return {
      data: []
    }
  },
  mounted () {
    const data = JSON.parse(localStorage.getItem('likes'))
    this.data = data
  }
}
</script>

<style>

</style>
