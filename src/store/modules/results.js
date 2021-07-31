import axios from "@/plugins/axios";

const state = {
  results: []
};

const getters = {
  results: (state) => state.results
};

const mutations = {
  SET_RESULTS(state, results) {
    state.results = results
  }
};

const actions = {
  getResults({commit}) {
    return axios.get('/result')
      .then((response) => {
        commit('SET_RESULTS', response.data);
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
