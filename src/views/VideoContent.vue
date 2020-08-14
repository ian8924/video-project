<template>
  <div class="contain">
      <video id="my-video" class="video-js vjs-default-skin" controls preload="auto" style="margin:0 auto">
          <source src="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" type="application/x-mpegURL">
        </video>
  </div>
</template>

<script>
import videojs from 'video.js'

export default {
  name: 'VideoContent',
  data () {
    return {
      vedioID: '',
      imgURL: '',
      setting: {
        bigPlayButton: false,
        textTrackDisplay: false,
        posterImage: true,
        errorDisplay: false,
        controlBar: true,
        poster: ''
      },
      windowWidth: window.innerWidth * 0.9,
      player: null
    }
  },
  mounted () {
    this.vedioID = this.$route.query.vedioID
    this.imgURL = this.$route.query.imgUrl
    this.setting.poster = this.imgURL
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
  watch: {
    windowWidth () {
      this.setVedioSize()
    }
  }
}
</script>
