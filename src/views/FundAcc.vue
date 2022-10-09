<template>
  <div>
    <div id="funding" class="shadow-sm">
      <form>
        <h3>Fund Wallet</h3>
        <div class="form-outline my-4">
          <input
            type="number"
            id="form2"
            class="form-control form-control-lg rounded-0"
          />
          <label class="form-label" for="form2">#Amount</label>
        </div>

        <div class="form-outline my-4">
          <input
            type="number"
            id="form2"
            class="form-control form-control-lg rounded-0"
          />
          <label class="form-label" for="form2">#Email</label>
        </div>

        <div class="pt-1 mb-4">
          <button
            class="btn btn-dark btn-lg btn-block rounded-0 w-100"
            type="button"
          >
            Fund Account
          </button>
        </div>
      </form>
    </div>
    <div class="transaction shadow-sm mt-3 text-center">
      <p class="text-secondary">Transaction History</p>
    </div>
    <!-- <ModalVue /> -->
  </div>
</template>
<script>
// import ModalVue from "../components/Modal.vue";
export default {
  components: {
    // ModalVue,
  },
};
</script>
<style lang="scss" scoped>
#funding {
  width: 60%;
  height: 60%;
  margin: auto;
  padding: 40px;
  background-color: #fff;
  position: relative;
}
.transaction {
  width: 60%;
  height: 60%;
  margin: auto;
  padding: 0 40px;
  position: relative;
  background-color: #fff;
}
@media (min-width: 200px) and (max-width: 450px) {
  #funding {
    width: 90%;
  }
  .transaction {
    width: 90%;
  }
}
</style>
