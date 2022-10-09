<template>
  <div id="app" :class="{ darkMode: toggleLight }">
    <Header
      v-if="
        !['Dashboard', 'FundAccount', 'Withdraw', 'SetPin', 'Payment'].includes(
          $route.name
        )
      "
    />
    <CarouselSideVue
      v-if="
        !['Dashboard', 'FundAccount', 'Withdraw', 'SetPin', 'Payment'].includes(
          $route.name
        )
      "
      :class="{ clearCarousel: clearCarousel }"
    />
    <transition name="slide">
      <div class="homeRouter">
        <router-view />
      </div>
    </transition>
    <!-- <HomePage /> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CarouselSideVue from "./components/CarouselSide.vue";
// import HomePage from "./views/Home.vue";
import Header from "@/components/Header";

export default {
  components: {
    Header,
    CarouselSideVue,
    // HomePage,
  },
  computed: {
    ...mapGetters(["toggleLight"]),
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: all 0.5s ease;
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
  overflow: hidden !important;
  .homeRouter {
    width: 50%;
    height: 89.4vh;
    overflow: hidden;
    position: absolute;
    top: 70px;
    right: 0;
    // border: 1px solid #000;
  }
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
    height: 89.4vh;
    width: 100%;
  }
  .sm-img {
    display: none;
  }
  .d-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 540px) and (max-width: 1024px) {
  #app {
    position: static;
    overflow: scroll !important;
    display: grid !important;
    grid-template-columns: 1fr;
    .d-grid {
      grid-template-columns: 1fr;
    }
    .lg-img {
      height: 70vh;
      width: 100% !important;
    }
    .homeRouter {
      position: static !important;
      width: 100%;
      height: auto;
    }
  }
}
@media (min-width: 376px) and (max-width: 476px) {
  #app {
    height: 100vh;
    .carousel-indicators {
      bottom: -50px !important;
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
      width: 85%;
      height: 75vh;
      margin: auto !important;
      display: block;
      border-radius: 15px;
      // justify-content: center;
      // align-items: center;
    }
    .homeRouter {
      width: 100%;
      height: 89.5vh !important;
      z-index: 1 !important;
    }

    .slide-enter-from,
    .slide-leave-to {
      transform: translateY(1700px);
    }
  }
}
@media (min-width: 200px) and (max-width: 375px) {
  #app {
    height: 100vh;
    .carousel-item img {
      margin: 20px auto !important;
    }
    .carousel-indicators {
      bottom: -40px !important;
      z-index: 1 !important;
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
      width: 85%;
      height: 70vh;
      margin: auto !important;
      display: block;
      border-radius: 15px;
      // justify-content: center;
      // align-items: center;
    }
    .clearCarousel {
      display: none !important;
    }
    .homeRouter {
      width: 100%;
      height: 89.5vh;
      z-index: 1 !important;
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
