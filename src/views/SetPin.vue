<template>
  <div id="setpin" class="shadow-sm">
    <form @submit.prevent="onSubmit">
      <h3>Set Pin Code</h3>
      <div class="my-4 form-outline">
        <div class="otp-field">
          <input type="number" maxlength="1" />
          <input type="number" maxlength="1" />
          <input type="number" maxlength="1" />
          <input type="number" maxlength="1" />
        </div>
        <label class="form-label d-flex justify-content-center" for="form2"
          >Enter pin</label
        >
      </div>
      <div class="my-4 form-outline">
        <div class="otp-field">
          <input type="number" maxlength="1" />
          <input type="number" maxlength="1" />
          <input type="number" maxlength="1" />
          <input type="number" maxlength="1" />
        </div>
        <label class="form-label d-flex justify-content-center" for="form2"
          >Comfirm pin</label
        >
      </div>

      <div class="pt-1 mb-4">
        <button
          class="btn btn-dark btn-lg btn-block rounded-0 w-100"
          type="button"
          @click="onSubmit"
        >
          Set Pin
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      set_pin: null,
      confirm_pin: null,
    };
  },
  methods: {
    onSubmit() {
      const pinData = {
        set_pin: this.set_pin,
        confirm_pin: this.confirm_pin,
      };

      console.log(pinData);
    },
  },
};
</script>
<style lang="scss" scoped>
#setpin {
  width: 60%;
  //   height: 80%;

  margin: auto;
  padding: 40px;
  background-color: rgb(7, 197, 181);

  .otp-field {
    width: 70%;
    border: 2px solid #fd7e14;
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    // align-items: center;
    // height: 100%;
  }

  .otp-field input::-webkit-outer-spin-button,
  .otp-field input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  .otp-field input {
    width: 44px;
    font-size: 18px;
    padding: 18px;
    text-align: center;
    border-radius: 5px;
    height: 44px;
    margin: 4px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: rgba(100, 100, 100, 0.2);
    color: #f00;
    outline: none;
    transition: all 0.1s;
  }

  .otp-field input:focus {
    border: 2px solid #fd7e14;
    box-shadow: 0 0 2px 2px #fd7e14;
  }

  .disabled {
    opacity: 0.5;
  }
}
@media (min-width: 200px) and (max-width: 450px) {
  #setpin {
    width: 90%;
  }
}
@media (min-width: 650px) and (max-width: 1150px) {
  #setpin {
    width: 90%;
  }
}
</style>
