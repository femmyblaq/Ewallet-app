<template>
  <div id="header" class="shadow-sm" :class="{ darkMode: toggleLight }">
    <div class="d-flex justify-content-between align-items-center">
      <router-link to="/"
        ><font-awesome-icon icon="fa-solid fa-brightness" /><img
          src="../assets/e-wallet-logo.png"
          alt=""
      /></router-link>
      <div>
        <span
          class="material-symbols-outlined"
          ref="night"
          :class="{ color: toggleLight }"
          @click="toggleLightMethod"
        >
          dark_mode
        </span>
        <!-- <div class="d-flex justify-content-center align-items-center">
          <span
            class="button"
            :class="{ 'main-button': toggleLight }"
            @click="toggleLightMethod"
            ><span
              class="round-button"
              :class="{ 'inner-button': toggleLight }"
            ></span
          ></span>
        </div> -->
        <!--<span class="material-symbols-outlined"> dark_mode </span> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      mobile: false,
      color: "silver",
    };
  },

  methods: {
    ...mapMutations(["TOGGLE_LIGHT"]),
    toggleLightMethod() {
      if (this.TOGGLE_LIGHT()) this.$refs.night.innerHTML = "&#xe51c;";
      else this.$refs.night.innerHTML = "&#xe518;";
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.$store.dispatch("toggleLight");
      });
    },
    computed: {
      ...mapGetters(["toggleLight"]),
    },
  },
};
</script>
<style lang="scss">
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url(https://example.com/MaterialIcons-Regular.woff2) format("woff2"),
    url(https://example.com/MaterialIcons-Regular.woff) format("woff"),
    url(https://example.com/MaterialIcons-Regular.ttf) format("truetype");
}
.darkMode {
  background-color: rgba(0, 0, 0, 0.88) !important;
  transition: all 0.5s ease;
  border-bottom: 2px solid #ddd;
  box-shadow: 20 0.125rem 0.25rem rgba(252, 250, 250, 0.75) !important;
}
#header {
  height: 70px;
  padding: 10px 25px;
  // background-color: #fff;
  transition: all 0.5s ease;
  z-index: 1111;
  .button {
    position: relative;
    // top: -20px;
    cursor: pointer;
    border: none;
    -webkit-appearance: none;
    background: #fff;
    width: 40px;
    height: 19px;
    border: 1px solid #ccc;
    border-radius: 40px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 4px 2px -1px rgba(0, 0, 0, 0.06);
    transition: 200ms all;
  }
  .round-button {
    position: absolute;
    z-index: 1;
    width: 17px;
    height: 17px;
    background: #ccc;
    border-radius: 50%;
    // top: 0;
    left: -1px !important;

    transition: 200ms ease-in-out all;
  }
  .main-button {
    background: rgb(162, 162, 163);
  }
  .inner-button {
    left: 21px !important;
    background: rgb(66, 66, 67);
  }
  .color {
    color: #ccc !important;
  }
}
img {
  width: 150px;
}
.material-symbols-outlined {
  cursor: pointer;
}

@media (min-width: 200px) and (max-width: 450px) {
  #header {
    padding: 10px 15px;
  }
}
</style>
