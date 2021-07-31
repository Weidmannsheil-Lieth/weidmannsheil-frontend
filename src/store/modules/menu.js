const state = {
  menuIsOpen: false
};

const getters = {
  menuIsOpen: (state) => state.menuIsOpen
};

const mutations = {
  SET_MENU_IS_OPEN(state, menuIsOpen) {
    state.menuIsOpen = menuIsOpen
  }
};

const actions = {
  toggleMenu({commit}, bool = false) {
    commit('SET_MENU_IS_OPEN', bool);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
