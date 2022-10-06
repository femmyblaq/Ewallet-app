<template>
  <div id="dashboard" :class="{ mainDark: toggleLight }">
    <Sidebar> </Sidebar>
    <TheHeader />
    <div class="main" :class="{ mainDark: toggleLight }">
      <router-view />
      <transition name="logout">
        <Modal v-show="logoutToggle" />
      </transition>
    </div>

    <!-- <TheBottom /> -->
  </div>
</template>

<script>
import Sidebar from "../components/TheSidebar.vue";
import TheHeader from "../components/Layouts/TheHeader.vue";
// import TheBottom from "../components/Layouts/TheBottom.vue";
import Modal from "../components/Modal.vue";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    Sidebar,
    TheHeader,
    // TheBottom,
    Modal,
  },
  computed: {
    ...mapState(["logoutToggle"]),
    ...mapGetters(["toggleLight"]),
  },
};
</script>
<style lang="scss" scoped>
.mainDark {
  background-color: rgba(0, 0, 0, 0.9) !important;
}
#dashboard {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  // overflow: hidden;

  .main {
    // position: relative;
    // border: 1px solid #f00;
    position: absolute;
    height: auto;
    width: 60%;
    z-index: -1;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fffbf6;
  }
  .logout-enter-active,
  .logout-leave-active {
    transition: 0.8s ease all;
  }
  .logout-enter-from,
  .logout-leave-to {
    transform: translateX(700px);
  }
}
@media (min-width: 200px) and (max-width: 850px) {
  #dashboard {
    .main {
      width: 100%;
    }
  }
}
</style>

<!-- Yusuph Phemmyhy@gmail.com -->
