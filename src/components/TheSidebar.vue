<template>
  <div id="sidebar" class="shadow-sm" :class="{ sidebar: sidebarToggle }">
    <div class="brand px-3 d-flex justify-content-between">
      <img src="../assets/e-wallet-logo.png" style="width: 150px" alt="" />
      <div @click="toggleSidebar" class="align-items-center d-flex">
        <i class="fas fa-angle-left mx-2 my-auto"></i>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="content d-inline-flex align-items-center my-3">
        <div class="avatar">
          <h1 class="text-light m-auto fw-bolder">HY</h1>
        </div>
        <div class="text-box ms-3">
          <h1 class="fw-bold m-0">Habeeb Yusuph</h1>
          <p>Phemmyhy@gmail.com</p>
          <h4>NGN 178.89</h4>
        </div>
      </div>
    </div>

    <div class="nav-container mt-5">
      <ul class="list-unstyled d-grid m-0 px-5">
        <router-link
          tag="li"
          to="/fund_account"
          class="px-5 p-y-2 text-dark"
          active-class="active"
        >
          <span class="material-icons"> account_balance_wallet </span>
          <span>Fund Account</span>
        </router-link>
        <router-link
          tag="li"
          to="/withdraw"
          class="px-5 p-y-2 text-dark"
          active-class="active"
        >
          <!-- <i class="fab fa-payments"></i> -->
          <span class="material-icons"> currency_exchange </span>
          <span> Withdraw </span>
        </router-link>

        <router-link
          tag="li"
          to="payment"
          class="px-5 p-y-2 text-dark"
          active-class="active"
        >
          <span class="material-icons"> payments </span>
          <span>Payments</span>
        </router-link>
        <router-link
          tag="li"
          to="/set_pin"
          class="px-5 p-y-2 text-dark"
          active-class="active"
        >
          <span class="material-icons"> pin </span>
          <span> Set Pins </span>
        </router-link>
        <a class="px-5 p-y-2 text-dark" @click="logoutToggle">
          <span class="material-icons"> logout </span>
          <span> Logout </span>
        </a>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["SIDEBAR_TOGGLE"]),
    toggleSidebar() {
      this.SIDEBAR_TOGGLE();
      console.log("sidebar toggle ");
    },
  },
  computed: {
    ...mapState(["sidebarToggle"]),
  },
};
</script>
<style lang="scss" scoped>
#sidebar {
  height: 100vh;
  width: 40%;
  position: fixed;
  background-color: #fff;
  // padding: 0 20px;
  z-index: 1;
  transition: 200ms ease;
  box-shadow: 0 38px 0 0 20px rgb(235 234 242 / 58%);
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #000;
    display: flex;
    place-content: center;
  }
  .nav-container {
    ul {
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      align-items: center;
      a {
        border: 2px solid #ccc;
        margin: 10px;
        height: 100px;
        width: 40px;
        margin: 20px auto;
        display: grid;
        // place-items: center;
        justify-content: space-evenly;
        color: #ccc;
        align-items: center;
        text-decoration: none;
        border-radius: 15px;
        &:hover {
          border-color: #fd7e14;
          .material-icons,
          span {
            color: #fd7e14;
          }
        }
        .material-icons {
          color: gray;
        }
      }
      a.active {
        border-color: #fd7e14;
        background-color: #ccc;
        .material-icons,
        span {
          color: #fd7e14;
        }
      }
    }
  }
}

@media (min-width: 200px) and (max-width: 450px) {
  #sidebar {
    // margin-left: -40%;
    transform: translateX(-500px);
    z-index: 1111;
    width: 80%;
    .brand {
      background-color: rgb(253, 251, 251);
      padding: 15px 10px !important;
    }
    .avatar {
      width: 75px;
      height: 70px;
    }
    .content {
      padding: 0 15px;
    }

    .text-box {
      h1 {
        font-size: 1.3rem;
      }
      h4 {
        font-size: 1rem;
      }
    }
    .nav-container {
      display: none !important;
    }
  }
  .sidebar {
    transform: translateX(0) !important;
  }
}

@media (min-width: 750px) and (max-width: 1150px) {
  #sidebar {
    // margin-left: -40%;
    transform: translateX(-800px);
    z-index: 1111;
    width: 50%;
    .brand {
      background-color: rgb(253, 251, 251);
      padding: 15px 10px !important;
    }
    .avatar {
      width: 75px;
      height: 70px;
    }
    .content {
      padding: 0 15px;
    }

    .text-box {
      h1 {
        font-size: 1.3rem;
      }
      h4 {
        font-size: 1rem;
      }
    }
    .nav-container {
      display: none !important;
    }
  }
  .sidebar {
    transform: translateX(0) !important;
  }
}
@media (min-width: 451px) and (max-width: 750px) {
  #sidebar {
    width: 60%;
    .brand {
      background-color: rgb(253, 251, 251);
      padding: 15px 10px !important;
    }
    .avatar {
      width: 75px;
      height: 70px;
    }
    .content {
      padding: 0 10px;
    }

    .text-box {
      h1 {
        font-size: 1.3rem;
      }
      h4 {
        font-size: 1rem;
      }
    }
    .nav-container {
      display: none !important;
    }
  }
  .sidebar {
    transform: translateX(0) !important;
  }
}
</style>
