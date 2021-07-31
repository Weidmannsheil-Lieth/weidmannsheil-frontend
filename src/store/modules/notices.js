import axios from "@/plugins/axios";

const state = {
  notices: []
};

const getters = {
  notices: (state) => state.notices
};

const mutations = {
  SET_NOTICES(state, notices) {
    state.notices = notices;
  }
};

const actions = {
  getNotices({commit}) {
    return axios.get('/notice')
      .then((response) => {
        commit('SET_NOTICES', response.data.data);
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
