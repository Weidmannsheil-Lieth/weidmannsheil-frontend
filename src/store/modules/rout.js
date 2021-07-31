import axios from "@/plugins/axios";

const state = {
  rout: null,
  routHistories: []
};

const getters = {
  rout: (state) => state.rout,
  routHistories: (state) => state.routHistories
};

const mutations = {
  SET_ROUT(state, rout) {
    state.rout = rout;
  },
  SET_ROUT_HISTORIES(state, routHistories) {
    state.routHistories = routHistories;
  }
};

const actions = {
  getRout({commit}) {
    return axios.get('/rout')
      .then((response) => {
        commit('SET_ROUT', response.data.data);
      })
  },
  getRoutHistories({commit}) {
    return axios.get('/rout-history')
      .then((response) => {
        commit('SET_ROUT_HISTORIES', response.data.data);
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
