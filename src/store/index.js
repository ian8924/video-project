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
    changeVedioList (state, newState) {
      state.videoList = newState
    },
    changePageInfo (state, newState) {
      state.pageInfo = newState
    }
  },
  actions: {
    async getVideoList ({ commit }) {
      const data = {
        params: {
          part: 'snippet',
          contentDetails: 'mostPopular',
          chart: 'mostPopular',
          maxResults: 12,
          key: 'AIzaSyCCv8imiVdPw5ZTn4sVHyX8k0ex57_RuOA'
        }
      }
      request.get('youtube/v3/videos', data).then(response => {
        const items = Object.assign([], response.data.items)
        commit('changeVedioList', items)
      })
    }
  },
  modules: {

  }
})
