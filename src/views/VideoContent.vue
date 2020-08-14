<template>
  <div class="contain">
    <div>
      <h1>{{title}}</h1>
    </div>
      <video id="my-video" class="video-js vjs-default-skin" controls preload="auto" style="margin:0 auto">
          <source src="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" type="application/x-mpegURL">
      </video>
      <div class="chaanel">
        頻道：
        <h3>{{channelTitle}}</h3>
      </div>
      <div class="description">
      影片描述
        <h3>{{description}}</h3>
      </div>
  </div>
</template>

<script>
import videojs from 'video.js'

export default {
  name: 'VideoContent',
  data () {
    return {
      vedioID: '',
      setting: {
        bigPlayButton: false,
        textTrackDisplay: false,
        posterImage: true,
        errorDisplay: false,
        controlBar: true,
        poster: ''
      },
      windowWidth: window.innerWidth * 0.9,
      player: null,
      currentVedioInfo: {
        snippet: {}
      }
    }
  },
  async mounted () {
    this.$store.commit('clearVedioList')
    await this.$store.dispatch('getVideoList')
    this.vedioID = this.$route.query.id
    this.currentVedioInfo = this.$store.state.videoList.find(item => {
      return item.id === this.$route.query.id
    })
    // 開始預設IMG
    this.setting.poster = this.currentVedioInfo.snippet.thumbnails.high.url
    window.addEventListener('resize', this.onResize)
    this.player = videojs('my-video', this.setting, () => {
    })
    this.setVedioSize()
  },
  beforeDestroy () {
    // remove player
    if (this.player) {
      this.player.dispose()
    }
    // remove listener
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      this.windowWidth = window.innerWidth
    },
    // 設定影片寬度
    setVedioSize () {
      if (window.innerWidth > 1000) {
        this.player.width(1000)
      } else {
        this.player.width(this.windowWidth * 0.9)
      }
    }
  },
  computed: {
    title () {
      return this.currentVedioInfo.snippet.title || ''
    },
    channelTitle () {
      return this.currentVedioInfo.snippet.channelTitle || ''
    },
    description () {
      return this.currentVedioInfo.snippet.description || ''
    }
  },
  watch: {
    windowWidth () {
      this.setVedioSize()
    }
  }
}
</script>
<style lang="scss" scoped>
.description{
  margin:0 auto;
  width: 80%;
  margin-top: 20px;
  color: gray;
  white-space:pre-line;
}
.chaanel{
  margin-top: 20px;
  color: red;
}
</style>
