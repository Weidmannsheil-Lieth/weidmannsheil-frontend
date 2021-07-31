import axios from "@/plugins/axios";

const state = {
  news: []
};

const getters = {
  news: (state) => state.news
};

const mutations = {
  SET_NEWS(state, news) {
    state.news = news;
  }
};

const actions = {
  getNews({commit}) {
    return axios.get('/news')
      .then((response) => {
        commit('SET_NEWS', response.data.data);
      })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
