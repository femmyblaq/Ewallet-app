<template>
  <div>
    <!-- <CarouselSideVue /> -->
    <div id="home">
      <!-- v-if="!['Login', 'Register', 'ForgotPassword'].includes($route.name)" -->
      <div class="home d-flex justify-content-center">
        <div class="welcome">
          <!-- <Login /> -->
          <h1 class="text-center fw-bold" :class="{ h1: toggleLight }">
            Welcome!
          </h1>
          <p class="my-4" :class="{ p: toggleLight }">
            In order to use this platform, you have to Login your details and if
            you don't have an account already, click on register and begin one
            time.
          </p>
          <div class="grid">
            <div @click="rmCarousel">
              <router-link
                tag="button"
                class="btn w-100 fst btn-danger py-2 mt-2 rounded-0"
                to="/login"
                >Login</router-link
              >
            </div>
            <router-link
              tag="button"
              class="btn w-100 snd btn-danger py-2 mt-2 rounded-0"
              to="/register"
              >Register</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import CarouselSideVue from "../components/CarouselSide.vue";
export default {
  data() {
    return {
      clearCarousel: false,
    };
  },
  computed: {
    ...mapGetters(["toggleLight"]),
  },
  components: {
    // CarouselSideVue
  },
  rmCarousel() {
    this.clearCarousel = !this.clearCarousel;
  },
};
</script>

<style lang="scss">
#home {
  // width: 50%;
  height: calc(100vh - 70px);
  border: 2px solid #f00;

  .home {
    height: 100%;
    border: 2px solid #ff0;

    .welcome {
      border: 1px solid #f0f;
      margin: auto 30px;
    }
  }
}
.welcome .btn-danger {
  background-color: rgb(206, 105, 10);
}
@media (min-width: 376px) and (max-width: 476px) {
  #home {
    height: 10vh;
    .home {
      display: block !important;
      padding: 20px;
      align-items: end;
      width: 100%;
      margin-top: 50px;
    }
    .welcome {
      margin: 0 !important;
      .grid {
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        align-items: flex-end;
        justify-content: end;
      }
    }
    a {
      margin: 0 5px !important;
      width: 95% !important;
    }
    // a:nth-child(2) {
    //   margin-top: 30px !important;
    //   margin-left: 10px !important;
    // }
    h1,
    p {
      display: none;
    }
    // .btn {
    //   margin: 0;
    // }
  }
}
@media (min-width: 200px) and (max-width: 375px) {
  #home {
    height: 10vh;
    .home {
      display: block !important;
      padding: 0 20px;
      align-items: end;
      width: 100%;
      margin-top: 50px;
    }
    .welcome {
      margin: 0 !important;
      .grid {
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        align-items: flex-end;
        justify-content: end;
      }
    }
    a {
      margin: 0 5px !important;
      width: 95% !important;
    }
    // a:nth-child(2) {
    //   margin-top: 30px !important;
    //   margin-left: 10px !important;
    // }
    h1,
    p {
      display: none;
    }
    // .btn {
    //   margin: 0;
    // }
  }
}
@media (min-width: 568px) and (max-width: 1024px) {
  #home {
    height: calc(50vh - 70px);
    .home {
      margin: auto !important;
      // transform: translateY(-50%);
      // padding: 30px;
      width: 70%;
      height: 100%;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      margin-top: auto !important;
      .fst {
        margin-right: 10px !important;
      }
      .snd {
        margin-left: 10px !important;
      }
    }
  }
}
</style>
