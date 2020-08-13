<template>
      <video id="my-video" class="video-js vjs-default-skin" controls preload="auto" >
        <source src="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" type="application/x-mpegURL">
    </video>
</template>

<script>
import videojs from 'video.js'

export default {
  updated () {
    videojs('my-video', {
      bigPlayButton: false,
      textTrackDisplay: false,
      posterImage: true,
      errorDisplay: false,
      controlBar: true,
      poster: this.likesList[0].snippet.thumbnails.high.url
    }, function () {
      this.play()
    })
  }
}
</script>

<style>

</style>
