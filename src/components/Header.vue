<template>
  <div id="header" class="shadow-sm" :class="{ darkMode: toggleLight }">
    <div class="d-flex justify-content-between align-items-center">
      <router-link to="/"
        ><font-awesome-icon icon="fa-solid fa-brightness" /><img
          src="../assets/e-wallet-logo.png"
          alt=""
      /></router-link>
      <!-- <span style="width: 10px; height: 10px; background-color: #000"></span> -->
      <!-- <i class="fa-solid fa-brightness fa-3x"></i> -->
      <div>
        <!-- <span
            class="material-icons"
            :class="{ color: toggleLight }"
            @click="toggleLightMethod"
            ref="changeIcon"
          >
            light_mode
          </span> -->
        <!-- <span
            class="material-symbols-outlined"
            :class="{ color: toggleLight }"
            @click="toggleLightMethod"
          >
            mode_nightnpm
          </span> -->
        <div class="d-flex justify-content-center align-items-center">
          <span class="button" @click="toggleLightMethod"
            ><span
              class="round-button"
              :class="{ 'inner-button': toggleLight }"
            ></span
          ></span>
        </div>
        <!--<span class="material-symbols-outlined"> dark_mode </span> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations(["TOGGLE_LIGHT"]),
    toggleLightMethod() {
      this.TOGGLE_LIGHT();
      this.$refs.changeIcon.innerHTML = "&#xe51c;";
    },
  },
  computed: {
    ...mapGetters(["toggleLight"]),
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
    border: 1px solid #222221;
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
    background: #303030;
    border-radius: 50%;
    // top: 0;
    left: -1px !important;

    transition: 200ms ease-in-out all;
  }
  .inner-button {
    left: 21px !important;
    background: rgb(211, 228, 241);
  }
}
img {
  width: 150px;
}
.material-symbols-outlined {
  cursor: pointer;
}
.color {
  color: #ccc !important;
}
@media (min-width: 200px) and (max-width: 450px) {
  #header {
    padding: 10px 15px;
  }
}
</style>
