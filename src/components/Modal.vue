<template>
  <div id="modal">
    <div class="modal-inner p-4 shadow m-auto">
      <p class="text-center">
        Are you sure you want to log out? Your changes will not be saved?
      </p>
      <div
        class="buttons d-flex mt-3 justify-content-center align-items-center"
      >
        <div class="btn btn-danger w-25 mx-2">Yes</div>
        <div @click="logoutToggle" class="btn btn-secondary mx-2 px-4">
          Cancel
        </div>
      </div>
    </div>
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
#modal {
  // background: rgba(255, 255, 255, 0.5);
  // opacity: 25%;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // width: 100%;
  // height: 100%;
  // z-index: 1111;
  // margin: auto;
  .modal-inner {
    width: 400px;
    // height: 200px;
    padding: 50px 20px !important;
    border-radius: 10px;
    background-color: #fff;
    z-index: 1111;
    backdrop-filter: blur(5px);
    // border: 2px solid #f00;
    position: absolute;
    // transform: translateY(-50%);
  }
}
@media (min-width: 200px) and (max-width: 450px) {
  #modal {
    .modal-inner {
      width: 90%;
    }
  }
}
</style>
