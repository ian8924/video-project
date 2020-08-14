<template>
  <div class="vedioItem" @click="goContent">
      <div class="img-item">
        <img class="vedioImg" :src="img" alt="" >
        <div class="timer">
             12:22
        </div>
        <div class="svg" @click.stop="changeLike">
          <img v-if="like" src="../assets/like.svg" >
          <img v-else src="../assets/dislike.svg" >
        </div>
      </div>
      <div class="title" ><p class="">{{title}}</p></div>
      <div class="channel"><p>頻道：{{channelTitle}}</p></div>
      <div class="hover" :title="description">
        <a>完整訊息</a>
      </div>
      <!-- <div class="description" >{{description}}</div> -->
  </div>
</template>

<script>
export default {
  name: 'VedioItem',
  props: {
    vedioInfo: Object
  },
  data () {
    return {
      like: false
    }
  },
  mounted () {
    // 定義是否有加入收藏
    const likes = JSON.parse(localStorage.getItem('likes')) || []
    this.like = likes.indexOf(this.vedioInfo.id) !== -1
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
  },
  methods: {
    changeLike () {
      this.like = !this.like
      if (this.like) {
        // 加入收藏
        if (!localStorage.getItem('likes')) {
          localStorage.setItem('likes', JSON.stringify([]))
        }
        const data = JSON.parse(localStorage.getItem('likes'))
        const addItem = [...data, this.vedioInfo.id]
        localStorage.setItem('likes', JSON.stringify(addItem))
        alert('收藏成功')
      } else {
        // 移除收藏
        const data = JSON.parse(localStorage.getItem('likes'))
        const removeItem = data.filter((item) => {
          return item !== this.vedioInfo.id
        })
        localStorage.setItem('likes', JSON.stringify(removeItem))
      }
    },
    goContent () {
      this.$router.push({
        name: 'VideoContent',
        query: {
          id: this.vedioInfo.id
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.vedioItem{
    height: 400px;
    padding-bottom: 10px;
    background: #c2bfbf;
    &:hover{
      position: relative;
      top:-5px;
      left:-5px;
      box-shadow: 2px 2px 2px rgb(51, 50, 50) ;
      transition: all .5s;
    }
    .img-item{
      .vedioImg{
          width: 100%;
          height: 300px;
       }
        position: relative;
        .timer{
            background: rgba(149, 160, 172,.5);
            color: white;
            position: absolute;
            bottom:10px;
            right:5px;
        }
        .svg{
          img{
            width: 40px;
            height: 40px;
            position: absolute;
            top:0px;
            left:5px;
          }
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
    .hover{
          &:hover {
            cursor: pointer;
          }
    }
}

</style>
