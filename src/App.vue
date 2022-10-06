<template>
  <div id="app">
    <Header
      v-if="
        !['Dashboard', 'FundAccount', 'Withdraw', 'SetPin', 'Payment'].includes(
          $route.name
        )
      "
    />
    <div class="row m-0 p-0">
      <div
        class="col-lg-7 m-0 p-0"
        v-if="
          ![
            'Dashboard',
            'FundAccount',
            'Withdraw',
            'SetPin',
            'Payment',
          ].includes($route.name)
        "
      >
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./assets/secondBigScreen.png" class="lg-img" alt="" />
              <img src="./assets/first-imgGirl.png" class="sm-img" alt="" />
            </div>
            <div class="carousel-item">
              <img src="./assets/bigScreen.png" class="lg-img" alt="" />
              <img src="./assets/secondImg.png" class="sm-img" alt="" />
            </div>
            <div class="carousel-item">
              <img src="./assets/bigScreenII.png" class="lg-img" alt="" />

              <img src="./assets/thirdImg.png" class="sm-img" alt="" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!-- <div class="col-lg-5 m-auto"> -->

      <!-- </div> -->
    </div>
    <transition name="slide">
      <router-view />
    </transition>
    <!-- <HomePage /> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import HomePage from "./views/Home.vue";
import Header from "@/components/Header";

export default {
  components: {
    Header,
    // HomePage,
  },
  computed: {
    ...mapGetters(["toggleLight"]),
  },
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: all 0.5s ease;
  // overflow: hidden;
}
// #app {
// background-color: #fff;
// position: absolute;
// top: 0;
// left: 0;
// }
.backgroundDark {
  background-color: rgba(0, 0, 0, 0.9) !important;
}
.carousel-item {
  width: 100% !important;
  margin-right: -800px !important;
  overflow: hidden;
}
#app {
  overflow: hidden;
  .slide-enter-active,
  .slide-leave-active {
    transition: 0.8s ease all;
  }
  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(100px);
  }

  .lg-img {
    height: 89.3vh;
    width: 100%;
  }
  .sm-img {
    display: none;
  }
  .d-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 568px) and (max-width: 1024px) {
  #app {
    overflow: scroll !important;
    .d-grid {
      grid-template-columns: 1fr;
    }
    .lg-img {
      height: 60vh;
      width: 100% !important;
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

    .slide-enter-from,
    .slide-leave-to {
      transform: translateY(1700px);
    }
  }
}
@media (min-width: 200px) and (max-width: 375px) {
  #app {
    height: 100vh;
    .carousel-indicators {
      bottom: -40px !important;
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

    .slide-enter-from,
    .slide-leave-to {
      transform: translateY(1700px);
    }
  }
}
.h1,
.p {
  color: #ccc;
}
</style>
