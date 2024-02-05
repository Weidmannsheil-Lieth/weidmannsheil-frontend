const state = {
  administrations: [
    [
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/sabine-nickel.jpg",
        name: "Sabine Nickel",
        roles: "1. Vorsitzende"
      },
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/stefan-mohr.jpg",
        name: "Stefan Mohr",
        roles: "2. Vorsitzender"
      },
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/sylvia-willms.jpg",
        name: "Sylvia Willms",
        roles: "Damenleitung"
      }
    ],

    [
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/daniela-vollstedt.jpg",
        name: "Daniela Vollstedt",
        roles: "1. Schriftführerin\n1. Jugendwartin"
      },
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/vera-jedtberg-henning.jpg",
        name: "Vera Jedtberg-Henning",
        roles: "2. Schriftführerin"
      },
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/torben-sbresny.jpg",
        name: "Torben Sbresny",
        roles: "1. Kassenwart"
      },
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/sascha-reimer.jpg",
        name: "Sascha Reimer",
        roles: "2. Kassenwart"
      },
    ],

    [
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/jan-sbresny.jpg",
        name: "Jan Sbresny",
        roles: "1. Sportwart"
      },
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/martin-rosenbusch.jpg",
        name: "Martin Rosenbusch",
        roles: "2. Sportwart"
      },
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/guenther-henning.jpg",
        name: "Günther Henning",
        roles: "3. Sportwart"
      },
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/frank-nickel.jpg",
        name: "Frank Nickel",
        roles: "Platzwart"
      }
    ],

    [
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/finn-ole-merz.jpg",
        name: "Finn-Ole Merz",
        roles: "2. Jugendwart"
      },
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/lennard-nickel.jpg",
        name: "Lennard Nickel",
        roles: "3. Jugendwart"
      },
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/thomas-nohren.jpg",
        name: "Thomas Nohren",
        roles: "Beisitzer"
      },
      {
        image: process.env.VUE_APP_BACKEND_URL + "assets/leadership/hans-barthold-schinckel.jpg",
        name: "Hans-Barthold Schinckel",
        roles: "Beisitzer"
      }
    ],
  ]
};

const getters = {
  administrations: (state) => state.administrations
};

const mutations = {
  SET_ADMINISTRATIONS(state, administrations) {
    state.administrations = administrations;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
