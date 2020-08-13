<template>
  <div class="vedioItem">
      <div class="img-item">
        <img :src="img" alt="" width="100%">
        <div class="timer">
             12:22
        </div>
      </div>
      <div class="title"><p class="">{{title}}</p></div>
      <div class="channel"><p>頻道：{{channelTitle}}</p></div>
      <div class="description"><p class="ellipsis">{{description}}</p></div>
  </div>
</template>

<script>
export default {
  name: 'VedioItem',
  props: {
    vedioInfo: Object
  },
  computed: {
    title () {
      return this.vedioInfo.snippet.title
    },
    img () {
      return this.vedioInfo.snippet.thumbnails.high.url
    },
    channelTitle () {
      return this.vedioInfo.snippet.channelTitle
    },
    description () {
      return this.vedioInfo.snippet.description
    }
  }
}
</script>

<style scoped lang="scss">
.vedioItem{
    width: 240px;
    height: 300px;
    background: rgb(194, 191, 191);
    margin: 12px;
    .img-item{
        position: relative;
        .timer{
            background: rgba(149, 160, 172,.5);
            color: white;
            position: absolute;
            bottom:10px;
            right:5px;
        }
    }
    .title{
        width: 100%;
        height: 30px;
        p{
            font-size: 10px;
            font-weight: 700;
        }
    }
    .channel{
        font-size: 10px;
        color: rgb(64, 83, 83);
        text-align: left;
        margin:10px 0 0 20px;
    }
    .description{
        width: 100%;
        font-size: 10px;
    }
    .ellipsis {
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin:10px 0 0 10px;
    }
}

</style>
