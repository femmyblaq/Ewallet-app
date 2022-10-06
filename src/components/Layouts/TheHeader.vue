<template>
  <div id="theHeader" class="shadow-sm d-flex align-items-center">
    <div @click="toggleSidebar"><i class="fas fa-bars"></i></div>
    <h5 class="ms-2 mb-0">Dashboard</h5>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["SIDEBAR_TOGGLE"]),
    toggleSidebar() {
      this.SIDEBAR_TOGGLE();
      console.log("sidebar toggle ");
    },
  },
};
</script>
<style lang="scss" scoped>
#theHeader {
  height: 70px;
  width: 60%;
  position: absolute;
  right: 0;
  z-index: 111;
  background-color: #fff;
  // border: 1px solid #0f0;
}
@media (min-width: 200px) and (max-width: 850px) {
  #theHeader {
    width: 100%;
    padding: 10px 10px;
  }
}
</style>
