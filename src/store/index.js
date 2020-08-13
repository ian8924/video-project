import Vue from 'vue'
import Vuex from 'vuex'
import request from '@/utils/request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videoList: [],
    pageInfo: {}
  },
  mutations: {
    clearVedioList (state) {
      state.videoList = []
    },
    changeVedioList (state, newState) {
      state.videoList = [...state.videoList, ...newState]
    },
    changePageInfo (state, newState) {
      state.pageInfo = newState
    }
  },
  actions: {
    // 取得100筆資訊
    async getVideoList ({ commit }) {
      const data = {
        params: {
          part: 'snippet',
          contentDetails: 'mostPopular',
          chart: 'mostPopular',
          maxResults: 50,
          key: 'AIzaSyCCv8imiVdPw5ZTn4sVHyX8k0ex57_RuOA'
        }
      }
      // 1-50
      await request.get('youtube/v3/videos', data).then(response => {
        const items = Object.assign([], response.data.items)
        commit('changeVedioList', items)
        data.params.pageToken = response.data.nextPageToken
      })
      // 51-100
      request.get('youtube/v3/videos', data).then(response => {
        const items = Object.assign([], response.data.items)
        commit('changeVedioList', items)
      })
    }
  },
  modules: {

  }
})
