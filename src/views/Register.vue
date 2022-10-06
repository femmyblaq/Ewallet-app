<template>
  <div id="register" :class="{ darkMode: toggleLight }">
    <div class="d-flex align-items-end justify-content-center px-3">
      <div class="card-body px-lg-3 text-black">
        <form @submit.prevent="onSubmit">
          <div class="d-flex align-items-center mb-3 pb-1">
            <!-- <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219"></i> -->
            <router-link to="/"
              ><img src="../assets/e-wallet-logo.png" alt=""
            /></router-link>
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
            <label class="form-label" for="form" :class="{ label: toggleLight }"
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
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
    };
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
  width: 41.7%;
  height: 89vh;
  position: absolute;
  top: 37.3%;
  // bottom: 0;
  transform: translateY(-30%);
  right: 0;
  margin: auto;
}
@media (min-width: 200px) and (max-width: 450px) {
  #register {
    width: 100%;
  }
  #register .px-5 {
    padding: 0 10px !important;
  }
}
</style>
