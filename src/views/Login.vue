<template>
  <div>
    <div class="carousel-side">
      <!-- <CarouselSideVue /> -->
    </div>
    <div id="login">
      <div class="d-flex align-items-end justify-content-center">
        <div class="card-body p-4 p-lg-4 text-black">
          <Form @submit="onSubmit" :validation-schema="schema">
            <div class="d-flex align-items-center mb-3">
              <!-- <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219"></i> -->
              <router-link to="/"
                ><img src="../assets/e-wallet-logo.png" alt=""
              /></router-link>
              <h1 :class="{ h1: toggleLight }" class="d-none fw-bold">Login</h1>
            </div>

            <h5
              class="fw-normal mb-3"
              style="letter-spacing: 1px"
              :class="{ h5: toggleLight }"
            >
              Sign into your account
            </h5>

            <div class="form-outline mb-4">
              <!-- <ErrorMessage name="email" /> -->
              <Field
                name="email"
                v-model="email"
                :rules="rules"
                v-slot="{ field, errorMessage, meta }"
              >
                <span class="text-success" v-if="meta.valid && meta.touched"
                  >✅ Field is valid</span
                >
                <span>{{ errorMessage }}</span>
                <input
                  type="email"
                  v-bind="field"
                  class="form-control form-control-lg rounded-0"
                  :class="{ inputss: toggleLight, err: !meta.valid }"
                />
              </Field>
              <label
                class="form-label"
                for="email"
                :class="{ label: toggleLight }"
                >Email</label
              >
            </div>

            <div class="form-outline mb-4">
              <Field
                name="password"
                v-model="password"
                :rules="rules"
                v-slot="{ field, errorMessage, meta }"
              >
                <span class="text-success" v-if="meta.valid && meta.touched">
                  ✅ Password is valid</span
                >
                <span>{{ errorMessage }}</span>
                <input
                  type="password"
                  v-bind="field"
                  class="form-control form-control-lg rounded-0"
                  :class="{ inputss: toggleLight, err: !meta.valid }"
                />
              </Field>
              <label
                class="form-label"
                for="password"
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
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as yup from "yup";
import { Form, Field } from "vee-validate";
import axios from "axios";

export default {
  data() {
    return {};
  },

  components: {
    // CarouselSideVue,
    Form,
    Field,
  },
  computed: {
    schema() {
      return yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      });
    },
    ...mapGetters(["toggleLight"]),
  },
  methods: {
    onSubmit() {
      const loginInfo = {
        email: this.email,
        password: this.password,
      };
      console.log("Login Information", loginInfo);
      axios
        .post("https://e-wallet-system.up.railway.app/register", loginInfo)
        .then((res) => {
          console.log("Response", res);
        })
        .catch((err) => console.log("Error", err));
    },
    ...mapActions(["isMobileMethod"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#login {
  // width: 50%;
  // height: 89.4vh;
  // overflow: hidden;
  // position: absolute;
  // top: 70px;
  // right: 0;
  // background-color: #fff;
  &::-webkit-scrollbar {
    display: none;
  }
  form span {
    color: #f00;
  }
  .err:focus {
    box-shadow: 0 0 0 0.25rem rgba(249, 51, 24, 0.25);
    border-color: #f00;
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
    // width: 100%;
    // height: 89.8vh;
    // overflow: hidden;
    // top: 70px;

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
