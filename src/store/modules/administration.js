import axios from "@/plugins/axios";

const state = {
  administrations: []
};

const getters = {
  administrations: (state) => state.administrations
};

const mutations = {
  SET_ADMINISTRATIONS(state, administrations) {
    state.administrations = administrations;
  }
};

const actions = {
  getAdministrations({commit}) {
    return axios.get('/administration')
      .then((response) => {
        commit('SET_ADMINISTRATIONS', response.data.data);
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
