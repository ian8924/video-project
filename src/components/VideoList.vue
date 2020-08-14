<template>
    <div>
        <div class="videList">
            <VedioItem v-for="item in pageVedioList" :key="item.id" :vedioInfo="item"/>
        </div>
        <paginate
            :page-count="totalPages"
            :click-handler="clickCallback"
            :prev-text="'上一頁'"
            :next-text="'下一頁'"
            :container-class="'paginate'"
            :page-class="'page-item'"
            :prev-class="'prev-item'"
            :next-class="'next-item'"
        >
        </paginate>
    </div>
</template>

<script>
import VedioItem from './VedioItem'
export default {
  name: 'VedioList',
  data () {
    return {
      pageNum: 1 // 當前頁碼
    }
  },
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
  },
  computed: {
    // 當前頁面VedioList
    pageVedioList () {
      const filterList = this.videoList.filter((item, index) => {
        return Math.ceil((index + 1) / 12) === this.pageNum
      })
      return filterList
    },
    // 總頁數
    totalPages () {
      return Math.ceil(this.videoList.length / 12)
    }
  },
  methods: {
    clickCallback (pageNum) {
      this.pageNum = pageNum
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style  lang="scss">
.videList{
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin:0 auto
}
.paginate {
  display: flex;
  margin: 30px auto;
  position: absolute;
  left: 50%;
  transform:translate(-50%, -50%);
  .page-item{
    text-align: center;
    line-height: 30px;
    width: 30px;
    height: 30px;
    border: 1px solid gray;
    list-style:none;
    &:hover{
      background: gray;
      color:white
    }
  }
  .prev-item{
    text-align: center;
    line-height: 30px;
    width: 90px;
    height: 30px;
    border: 1px solid gray;
    list-style:none;
    &:hover{
      background: gray;
      color:white;
    }
  }
  .next-item{
    text-align: center;
    line-height: 30px;
    width: 90px;
    height: 30px;
    border: 1px solid gray;
    list-style:none;
    &:hover{
      background: gray;
      color:white;
    }
  }
  .active{
      background: gray;
  }
}
 @media screen and (max-width:1400px){
     .videList{
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
        margin:0 auto
    }
  }
   @media screen and (max-width:1200px){
     .videList{
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin:0 auto
    }
  }
  @media screen and (max-width:700px){
     .videList{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        margin:0 0
    }
  }
</style>
