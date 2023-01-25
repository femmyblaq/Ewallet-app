<template>
  <div id="app" :class="{ darkMode: toggleLight }">
    <Preloadeer />
    <Header
      v-if="
        !['Dashboard', 'FundAccount', 'Withdraw', 'SetPin', 'Payment'].includes(
          $route.name
        )
      "
    />
    <div class="d-grid">
      <CarouselSideVue v-show="mobileView" />
      <transition name="slide">
        <router-view />
      </transition>
    </div>
  </div>
</template>
<script>
// https://e-wallet-system.up.railway.app/
import { mapGetters, mapActions } from "vuex";
import CarouselSideVue from "./components/CarouselSide.vue";
import Header from "@/components/Header";
import Preloadeer from "./components/Preloadeer.vue";

// import rout from "./router/index";
export default {
  data() {
    return {
      mobileView: true,
      rmCarousel: false,
      screen: 450,
    };
  },
  components: {
    Header,
    Preloadeer,
    CarouselSideVue,
  },
  created() {
    // const routes = rout.options.routes;
    // const login = routes[1].name;
    // const register = routes[2].name;

    // Trying to remove my carousel on my mobileView
    const screenWidth = window.innerWidth < this.screen;
    const loginRoute = this.$route.name;
    console.log(screenWidth);
    if (loginRoute === "Login" && screenWidth) {
      this.mobileView = false;
    }
    console.log("Direct Route ==>", this.$route);

    // trying to get my current darkMode boolean
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
      this.darkMode = true;
    }
  },
  methods: {
    ...mapActions(["isMobileMethod"]),
  },
  computed: {
    ...mapGetters(["toggleLight"]),
  },
  watch: {
    darkMode: {
      handler(newValue) {
        localStorage.setItem("darkMode", newValue);
      },
    },
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: all 0.5s ease;
  font-weight: 500;
  font-family: "Roboto Condensed", "Titilium Web", "Open Sans";
}
.backgroundDark {
  background-color: rgba(0, 0, 0, 0.9) !important;
}
.carousel-item {
  width: 100% !important;
  margin-right: -800px !important;
  overflow: hidden;
}
#app {
  // height: 100vh;
  overflow: hidden;
  // border: 2px solid #00f;
  .slide-enter-active,
  .slide-leave-active {
    transition: 0.8s ease all;
  }
  .slide-enter-from {
    transform: translateY(800px);
    // right: -400px;
  }
  .slide-leave-to {
    transform: translateY(0);
    // margin-right: -300px;
  }

  .lg-img {
    height: calc(100vh - 70px);
    width: 100%;
  }
  .sm-img {
    display: none;
  }
  .d-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 540px) and (max-width: 1180px) {
  #app {
    // height: 600px;
    position: static;
    overflow: scroll !important;
    display: grid !important;
    grid-template-columns: 1fr;
    .d-grid {
      grid-template-columns: 1fr;
    }
    .lg-img {
      height: 50vh;
      width: 100% !important;
    }
  }
}
@media (min-width: 376px) and (max-width: 476px) {
  #app {
    height: 100vh;
    .carousel-indicators {
      bottom: -60px !important;
      margin-bottom: 0px !important;
    }
    .carousel-indicators button {
      background-color: #444 !important;
      width: 15px !important;
      height: 15px !important;
      border-radius: 100% !important;
      z-index: 111;
    }
    .lg-img {
      display: none !important;
    }
    .sm-img {
      width: 80%;
      height: 75vh;
      margin: auto !important;
      display: block;
      border-radius: 15px;
      padding-top: 50px;
      // justify-content: center;
      // align-items: center;
    }
    .d-grid {
      display: block !important;
    }

    .slide-enter-from,
    .slide-leave-to {
      transform: translateY(1700px);
    }
  }
}
@media (min-width: 200px) and (max-width: 375px) {
  #app {
    height: calc(100vh - 70px);
    .carousel-item {
      img {
        margin: 20px auto !important;
        padding-top: 20px;
      }
      .lg-img {
        display: none !important;
      }
      .sm-img {
        width: 85%;
        height: 70vh;
        margin: auto !important;
        display: block;
        border-radius: 15px;
        // justify-content: center;
        // align-items: center;
      }
    }
    .d-grid {
      display: block !important;
    }
    .carousel-indicators {
      bottom: -50px !important;
      z-index: 1 !important;
    }
    .carousel-indicators button {
      background-color: #444 !important;
      width: 15px !important;
      height: 15px !important;
      border-radius: 100% !important;
      z-index: 111;
    }

    .clearCarousel {
      display: none !important;
    }

    // .slide-enter-from {
    //   transform: translateY(700px);
    // }
    // .slide-leave-to {
    //   top: 70px !important;
    //   transform: translateY(70px);
    // }
  }
}
.h1,
.p {
  color: #ccc;
}
</style>
