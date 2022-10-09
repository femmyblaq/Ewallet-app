<template>
  <div id="theBottom" class="shadow-sm">
    <ul
      class="list-unstyled d-flex m-0 justify-content-between align-items-center px-5"
    >
      <router-link
        tag="li"
        to="/fund_account"
        class="px-5 p-y-2 text-dark"
        active-class="active"
      >
        <span class="material-icons"> account_balance_wallet </span>
        <!-- <span>Fund Account</span> -->
      </router-link>
      <router-link
        tag="li"
        to="/withdraw"
        class="px-5 p-y-2 text-dark"
        active-class="active"
      >
        <!-- <i class="fab fa-payments"></i> -->
        <span class="material-icons"> currency_exchange </span>
        <!-- <span> Withdraw </span> -->
      </router-link>

      <router-link
        tag="li"
        to="payment"
        class="px-5 p-y-2 text-dark"
        active-class="active"
      >
        <span class="material-icons"> payments </span>
        <!-- <span>Payments</span> -->
      </router-link>
      <router-link
        tag="li"
        to="/set_pin"
        class="px-5 p-y-2 text-dark"
        active-class="active"
      >
        <span class="material-icons"> pin </span>
        <!-- <span> Set Pins </span> -->
      </router-link>
      <a class="px-5 p-y-2 text-dark" @click="logoutToggle">
        <span class="material-icons"> logout </span>
        <!-- <span> Logout </span> -->
      </a>
    </ul>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["LOGOUT_TOGGLE"]),
    logoutToggle() {
      this.LOGOUT_TOGGLE();
    },
  },
};
</script>
<style lang="scss" scoped>
#theBottom {
  height: 30px;
  width: 60%;
  position: absolute;
  right: 0;
  bottom: 15px;
  z-index: 1111;
  border-top: 1px solid #ccc;
  ul a {
    // background-color: aqua;
    cursor: pointer;
  }
  ul a:hover {
    border-top: 3px solid #fd7e14;
  }
  ul a.active {
    border-top: 3px solid #fd7e14;
    background-color: #ccc;
  }

  .material-symbols-outlined {
    font-size: 50px;
  }
}
@media (min-width: 200px) and (max-width: 850px) {
  #theBottom {
    width: 100%;
    height: 40px !important;
    z-index: 1;

    ul {
      padding: 0 !important;
      a {
        padding: 10px 20px !important;
      }
    }
  }
  .material-icons {
    font-size: 2rem !important;
  }
}
</style>
