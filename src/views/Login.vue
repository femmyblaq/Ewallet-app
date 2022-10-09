<template>
  <div>
    <div class="carousel-side">
      <!-- <CarouselSideVue /> -->
    </div>
    <div id="login" :class="{ darkMode: toggleLight }">
      <div class="d-flex align-items-end justify-content-center">
        <div class="card-body p-4 p-lg-5 text-black">
          <form @submit.prevent="onSubmit">
            <div class="d-flex align-items-center mb-3 pb-1">
              <!-- <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219"></i> -->
              <router-link to="/"
                ><img src="../assets/e-wallet-logo.png" alt=""
              /></router-link>
              <h1 :class="{ h1: toggleLight }" class="d-none fw-bold">Login</h1>
            </div>

            <h5
              class="fw-normal mb-3 pb-3"
              style="letter-spacing: 1px"
              :class="{ h5: toggleLight }"
            >
              Sign into your account
            </h5>

            <div class="form-outline mb-4">
              <input
                type="email"
                id="form2"
                class="form-control form-control-lg rounded-0"
                :class="{ inputss: toggleLight }"
                v-model="email"
              />
              <label
                class="form-label"
                for="form2"
                :class="{ label: toggleLight }"
                >Email address</label
              >
            </div>

            <div class="form-outline mb-4">
              <input
                type="password"
                id="form"
                class="form-control form-control-lg rounded-0"
                :class="{ inputss: toggleLight }"
                v-model="password"
              />
              <label
                class="form-label"
                for="form"
                :class="{ label: toggleLight }"
                >Password</label
              >
            </div>

            <div class="pt-1 mb-4" @click="rmCarousel">
              <button
                class="btn btn-dark btn-lg btn-block rounded-0 w-100"
                type="submit"
                :class="{ btnToggle: toggleLight }"
              >
                Login
              </button>
            </div>

            <router-link
              class="small text-muted"
              :class="{ h5: toggleLight }"
              to="/forgotPassword"
              >Forgot password?</router-link
            >
            <p
              class="pb-lg-2"
              style="color: #393f81"
              :class="{ p: toggleLight }"
            >
              Don't have an account?
              <router-link
                to="/register"
                :class="{ h5: toggleLight }"
                style="color: #393f81"
                >Register here</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import CarouselSideVue from "../components/CarouselSide.vue";

export default {
  data() {
    return {
      password: "",
      email: "",
    };
  },
  created() {
    document.addEventListener("resize", this.isMobileMethod);
    console.log("mobile view ", this.isMobileMethod);
  },
  components: {
    // CarouselSideVue,
  },
  computed: {
    ...mapGetters(["toggleLight"]),
  },
  methods: {
    onSubmit() {
      const loginInfo = {
        email: this.email,
        password: this.password,
      };
      console.log("Login Information", loginInfo);
    },
    ...mapActions(["isMobileMethod"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#login {
  // margin: auto;
  background-color: #fff;
  &::-webkit-scrollbar {
    display: none;
  }
}
.h5,
.label {
  color: #ccc !important;
}
.p {
  color: #f40 !important;
}
.inputss {
  background-color: #333 !important;
  border: 1px solid #606163;
}
.btnToggle {
  background-color: #f21 !important;
}
.btnToggle:hover {
  background-color: #f40;
}
@media (min-width: 200px) and (max-width: 450px) {
  .carousel-side {
    display: none;
  }
  #login {
    width: 100%;
    height: 89.8vh;
    overflow: hidden;
    // border: 1px solid #fff;
    top: 70px;

    z-index: 11111 !important;
    .card-body {
      h1 {
        display: block !important;
      }
      img {
        display: none;
      }
    }
  }
  #login .px-5 {
    padding: 0 10px !important;
  }
}
@media (min-width: 540px) and (max-width: 1024px) {
  // #login {
  //   overflow: hidden;
  //   width: 100%;
  //   padding: 50px;
  //   height: 60vh;
  //   top: 84.8%;
  // }
}
</style>
