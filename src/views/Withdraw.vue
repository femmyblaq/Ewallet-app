<template>
  <div id="withdraw" class="shadow-sm">
    <form>
      <h3>Withdraw</h3>
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
        <label class="form-label" for="form2">Bank code</label>
      </div>
      <div class="form-outline my-4">
        <input
          type="number"
          id="form2"
          class="form-control form-control-lg rounded-0"
        />
        <label class="form-label" for="form2">Account Number</label>
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
</template>

<style lang="scss" scoped>
#withdraw {
  width: 60%;
  //   height: 80%;
  margin: auto;
  padding: 40px;
  background-color: #fff;
}
@media (min-width: 200px) and (max-width: 450px) {
  #withdraw {
    width: 90%;
  }
}
</style>
