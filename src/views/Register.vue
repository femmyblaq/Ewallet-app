<template>
  <div>
    <div class="carousel-side">
      <!-- <carousel-side-vue></carousel-side-vue> -->
    </div>
    <div id="register">
      <div class="d-flex align-items-end justify-content-center px-3">
        <div class="card-body px-lg-3 text-black">
          <VeeForm>
            <form @submit.prevent="onSubmit" :validation-schema="schema">
              <div class="d-flex align-items-center pb-1">
                <!-- <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219"></i> -->
                <router-link to="/"
                  ><img class="" src="../assets/e-wallet-logo.png" alt=""
                /></router-link>
                <h1 :class="{ h1: toggleLight }" class="d-none fw-bold">
                  Register
                </h1>
              </div>

              <h5
                class="text-uppercase text-center"
                :class="{ h5: toggleLight }"
              >
                Create an account
              </h5>
              <div class="row p-0 m-0">
                <div class="col-sm-6 m-0 p-1">
                  <div class="form-outline mb-4">
                    <!-- <ErrorMessage name="email" /> -->
                    <Field
                      name="firstName"
                      :rules="rules"
                      v-slot="{ field, errorMessage, meta }"
                    >
                      <span
                        class="text-success"
                        v-if="meta.valid && meta.touched"
                      >
                        Field is valid</span
                      >
                      <span v-show="!meta.valid">{{ errorMessage }}</span>
                      <input
                        type="text"
                        v-model="firstName"
                        v-bind="field"
                        class="form-control form-control-lg rounded-0"
                        :class="{ inputss: toggleLight, err: !meta.valid }"
                      />
                    </Field>
                    <label
                      class="form-label"
                      for="firstName"
                      :class="{ label: toggleLight }"
                      >Frist Name</label
                    >
                  </div>
                </div>
                <div class="col-sm-6 m-0 p-1">
                  <div class="form-outline mb-4">
                    <!-- <ErrorMessage name="email" /> -->
                    <Field
                      name="lastName"
                      :rules="rules"
                      v-slot="{ field, errorMessage, meta }"
                    >
                      <span
                        class="text-success"
                        v-if="meta.valid && meta.touched"
                      >
                        Field is valid</span
                      >
                      <span v-show="!meta.valid">{{ errorMessage }}</span>
                      <input
                        type="text"
                        v-model="lastName"
                        v-bind="field"
                        class="form-control form-control-lg rounded-0"
                        :class="{ inputss: toggleLight, err: !meta.valid }"
                      />
                    </Field>
                    <label
                      class="form-label"
                      for="lastName"
                      :class="{ label: toggleLight }"
                      >Last Name</label
                    >
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <!-- <ErrorMessage name="email" /> -->
                <Field
                  name="email"
                  :rules="rules"
                  v-slot="{ field, errorMessage, meta }"
                >
                  <span class="text-success" v-if="meta.valid && meta.touched">
                    Field is valid</span
                  >
                  <span v-show="!meta.valid">{{ errorMessage }}</span>
                  <input
                    type="email"
                    v-model="email"
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
                  :rules="rules"
                  v-slot="{ field, errorMessage, meta }"
                >
                  <span class="text-success" v-if="meta.valid && meta.touched">
                    Password is valid</span
                  >
                  <span v-show="!meta.valid">{{ errorMessage }}</span>
                  <input
                    type="password"
                    v-model="password"
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

              <div class="pt-1">
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
          </VeeForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as yup from "yup";
import { Form as VeeForm, Field } from "vee-validate";
import axios from "axios";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      mobileView: false,
    };
  },
  computed: {
    schema() {
      return yup.object({
        firstName: yup.string().required().min(3),
        lastName: yup.string().required().min(3),
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      });
    },
    ...mapGetters(["toggleLight"]),
  },
  components: {
    // CarouselSideVue,
    VeeForm,
    Field,
  },
  methods: {
    onSubmit() {
      const registerData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      // alert(JSON.stringify(values, null, 4));
      console.log("register Information", registerData);
      axios
        .post("https://e-wallet-system.up.railway.app/register", registerData)
        .then((res) => {
          console.log("Response", res);
        })
        .catch((err) => console.log("Error", err));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
form {
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
  span {
    color: #f00;
  }
  .form-control-lg {
    min-height: calc(1.3rem + (0.8rem + 2px)) !important;
    padding: 0.2rem 0.5rem !important;
    font-size: 1rem !important;
    border-radius: 0.3rem;
  }
}
.err:focus {
  box-shadow: 0 0 0 0.25rem rgba(249, 51, 24, 0.25);
  border-color: #f00;
}
// .form-outline {
//   height: 120px;
// }
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
  form {
    padding-bottom: 40px;
  }
}
</style>
