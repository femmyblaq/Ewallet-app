import { createStore } from "vuex";

export default createStore({
  state: {
    lightToggle: false,
    logoutToggle: false,
    sidebarToggle: false,
    windowWidth: null,
    mobileView: false,
  },
  mutations: {
    TOGGLE_LIGHT(state) {
      state.lightToggle = !state.lightToggle;
    },
    LOGOUT_TOGGLE(state) {
      state.logoutToggle = !state.logoutToggle;
      console.log("I got toggled ", state.logoutToggle);
    },
    SIDEBAR_TOGGLE(state) {
      state.sidebarToggle = !state.sidebarToggle;
      console.log("sidebar toggle ", state.sidebarToggle);
    },
    MOBILE(state) {
      state.windowWidth = window.innerWidth;
      if (
        state.windowWidth <= 550 &&
        this.routes.name === "Login" &&
        this.routes.name === "Register"
      ) {
        state.mobileView = true;
      }
      console.log("screen width: ", state.mobileView);
    },
  },
  actions: {
    isMobileMethod({ commit }) {
      commit("MOBILE");
    },
  },
  getters: {
    toggleLight(state) {
      return state.lightToggle;
    },
  },
  modules: {},
});
