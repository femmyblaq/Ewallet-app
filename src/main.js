import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios";
import Vuelidate from "vee-validate";

// axios.defaults.baseURL = "https://e-wallet-system.up.railway.app/";

createApp(App).use(Vuelidate).use(store).use(router).mount("#app");

// const inputs = document.querySelectorAll(".otp-field index");
// inputs.forEach((input, index) => {
//   input.dataset.index = index;
//   input.addEventListener("paste", handleOnPasteOtp);
//   input.addEventListener("keyup", handleOtp);
// });
// // console.log(data);

// function handleOnPasteOtp(e) {
//   const data = e.clipboardData.getData("text");
//   console.log("from my clipbord data", data);
//   const value = data.split("");
//   if (value.length == inputs.length) {
//     inputs.forEach((input, index) => (input.value = value[index]));

//     submit();
//   }
// }

// function handleOtp(e) {
//   const input = e.target;
//   let value = input.value;
//   input.value = "";
//   input.value = value ? value[0] : "";

//   let fieldIndex = input.dataset.index;
//   if (value.length > 0 && fieldIndex < inputs.length - 1) {
//     input.nextElementSibling.focus();
//   }

//   if (e.key == "Backspace" && fieldIndex > 0) {
//     input.previousElementSibling.focus();
//   }
//   if (fieldIndex == inputs.length - 1) {
//     submit();
//   }
// }

// function submit() {
//   let otp = "";
//   inputs.forEach((input) => {
//     otp += input.value;
//     input.disabled = true;
//     input.classList.add("disabled");
//   });
//   console.log(otp);
// }
