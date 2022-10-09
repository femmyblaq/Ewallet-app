import { createStore } from "vuex";

export default createStore({
  state: {
    lightToggle: false,
    logoutToggle: false,
    sidebarToggle: false,
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
    IS_MOBILE(state) {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 750) {
        state.mobileView = true;
      }
      console.log("screen width: ", state.mobileView);
    },
  },
  actions: {
    isMobileMethod(commit) {
      commit("IS_MOBILE");
    },
  },
  getters: {
    toggleLight(state) {
      return state.lightToggle;
    },
  },
  modules: {},
});
