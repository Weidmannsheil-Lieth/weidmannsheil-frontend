import axios from "@/plugins/axios";

const state = {
  galleryData: []
};

const getters = {
  galleryData: (state) => state.galleryData
};

const mutations = {
  SET_GALLERY_DATA(state, galleryData) {
    state.galleryData = galleryData;
  }
};

const actions = {
  getGalleryData({commit}) {
    return axios.get('/gallery')
      .then((response) => {
        commit('SET_GALLERY_DATA', response.data);
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
