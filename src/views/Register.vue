<template>
  <div :class="{ separateDark: toggleLight }">
    <div class="carousel-side">
      <!-- <carousel-side-vue></carousel-side-vue> -->
    </div>
    <div id="register" :class="{ darkMode: toggleLight }">
      <div class="d-flex align-items-end justify-content-center px-3">
        <div class="card-body px-lg-3 text-black">
          <form @submit.prevent="onSubmit">
            <div class="d-flex align-items-center mb-3 pb-1">
              <!-- <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219"></i> -->
              <router-link to="/"
                ><img class="" src="../assets/e-wallet-logo.png" alt=""
              /></router-link>
              <h1 :class="{ h1: toggleLight }" class="d-none fw-bold">
                Register
              </h1>
            </div>

            <h5
              class="text-uppercase text-center mb-3"
              :class="{ h5: toggleLight }"
            >
              Create an account
            </h5>
            <div class="row p-0 m-0">
              <div class="col-sm-6 m-0 p-1">
                <div class="form-outline mb-3">
                  <input
                    type="text"
                    class="form-control form-control-lg rounded-0"
                    :class="{ inputss: toggleLight }"
                    v-model="firstName"
                  />
                  <label
                    class="form-label"
                    for="form2"
                    :class="{ label: toggleLight }"
                    >First name</label
                  >
                </div>
              </div>
              <div class="col-sm-6 m-0 p-1">
                <div class="form-outline mb-3">
                  <input
                    type="text"
                    class="form-control form-control-lg rounded-0"
                    :class="{ inputss: toggleLight }"
                    v-model="lastName"
                  />
                  <label
                    class="form-label"
                    for="form2"
                    :class="{ label: toggleLight }"
                    >Last name</label
                  >
                </div>
              </div>
            </div>

            <div class="form-outline mb-3">
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

            <div class="form-outline mb-3">
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

            <div class="pt-1 mb-4">
              <button
                class="btn btn-dark btn-lg w-100 rounded-0 btn-block"
                type="submit"
                :class="{ btnToggle: toggleLight }"
              >
                Register
              </button>
            </div>

            <router-link
              class="small text-muted"
              to="/forgotPassword"
              :class="{ h5: toggleLight }"
              >Forgot password?</router-link
            >
            <p class="pb-lg-2" :class="{ p: toggleLight }">
              Have an account already?
              <router-link
                to="/login"
                style="color: #393f81"
                :class="{ h5: toggleLight }"
                >Login here</router-link
              >
            </p>
          </form>
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
      firstName: "",
      lastName: "",
      password: "",
      email: "",
    };
  },
  components: {
    // CarouselSideVue
  },
  computed: {
    ...mapGetters(["toggleLight"]),
  },
  methods: {
    onSubmit() {
      const registerData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      console.log("register Information", registerData);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#register {
  overflow: hidden;
  margin: auto;
  background-color: #fff;
}
@media (min-width: 200px) and (max-width: 450px) {
  .carousel-side {
    display: none;
  }
  .separateDark {
    background-color: #000 !important;
  }
  #register {
    overflow: scroll;
    width: 100%;
    .card-body {
      h1 {
        display: block !important;
      }
      img {
        display: none;
      }
    }
  }
  #register .px-5 {
    padding: 0 10px !important;
  }
}
@media (min-width: 540px) and (max-width: 1024px) {
  #register {
    overflow: hidden;
    width: 100%;
    padding: 50px;
    height: 70.7vh;
    top: 87.8%;
  }
  form {
    padding-bottom: 40px;
  }
}
</style>
