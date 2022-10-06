import { createStore } from "vuex";

export default createStore({
  state: {
    lightToggle: false,
    logoutToggle: false,
    sidebarToggle: false,
  },
  mutations: {
    TOGGLE_LIGHT(state) {
      state.lightToggle = !state.lightToggle;
    },
    LOGOUT_TOGGLE(state) {
      state.logoutToggle = !state.logoutToggle;
    },
    SIDEBAR_TOGGLE(state) {
      state.sidebarToggle = !state.sidebarToggle;
      console.log("sidebar toggle ", state.sidebarToggle);
    },
  },
  actions: {},
  getters: {
    toggleLight(state) {
      return state.lightToggle;
    },
  },
  modules: {},
});
