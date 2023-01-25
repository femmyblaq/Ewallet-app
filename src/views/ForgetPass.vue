<template>
  <div id="forgotPass" :class="{ darkMode: toggleLight }">
    <div class="d-flex align-items-end justify-content-center">
      <div class="card-body p-4 p-lg-4 text-black">
        <Form @submit.prevent="onSubmit" :validation-schema="schema">
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

          <div class="pt-1 mb-4" @click="rmCarousel">
            <button
              class="btn btn-dark btn-lg btn-block rounded-0 w-100"
              type="submit"
              :class="{ btnToggle: toggleLight }"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as yup from "yup";
import { Form, Field } from "vee-validate";
export default {
  components: { Form, Field },
  data() {
    return {};
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
  methods: {},
};
</script>
