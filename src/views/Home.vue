<template>
  <div id="home" class="ms-auto">
    <!-- v-if="!['Login', 'Register', 'ForgotPassword'].includes($route.name)" -->

    <div class="welcome px-2">
      <!-- <Login /> -->
      <h1 class="text-center" :class="{ h1: toggleLight }">Welcome!</h1>
      <p class="my-4" :class="{ p: toggleLight }">
        In order to use this platform, you have to Login your details and if you
        don't have an account already, click on register and begin one time.
      </p>
      <router-link
        tag="button"
        class="btn w-100 btn-danger py-2 mt-2 rounded-0"
        to="/login"
        >Login</router-link
      >
      <router-link
        tag="button"
        class="btn w-100 btn-danger py-2 mt-2 rounded-0"
        to="/register"
        >Register</router-link
      >
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["toggleLight"]),
  },
  components: {},
};
</script>

<style lang="scss">
#home {
  width: 40%;
  // height: 92.2vh;
  position: absolute;
  top: 35%;
  // transform: translateY(-10%);
  right: 0;
  margin: auto;
}
.welcome .btn-danger {
  background-color: rgb(206, 105, 10);
}
@media (min-width: 376px) and (max-width: 476px) {
  #home {
    padding: 10px;
    width: 100% !important;
    top: 92% !important;
    .welcome {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: auto !important;
    }
    a {
      margin: 0 5px !important;
      width: 95% !important;
    }
    h1,
    p {
      display: none;
    }
  }
}
@media (min-width: 200px) and (max-width: 375px) {
  #home {
    // margin: auto 0 0 0 !important;
    padding: 10px;
    // height: 100%;
    width: 100% !important;
    top: 88% !important;
    .welcome {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: auto !important;
      // .btn {
      //   margin-right: 50px !important;
      // }
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
</style>
