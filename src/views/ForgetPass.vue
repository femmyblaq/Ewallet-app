<template>
  <div id="forgotpass">
    <div class="d-flex align-items-end justify-content-center px-5">
      <div class="card-body p-4 p-lg-5 text-black">
        <form>
          <div class="d-flex align-items-center mb-3 pb-1">
            <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219"></i>
            <router-link to="/"
              ><img src="../assets/e-wallet-logo.png" alt=""
            /></router-link>
          </div>

          <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
            Forgot password
          </h5>

          <div class="form-outline mb-4">
            <input
              type="email"
              id="form2"
              class="form-control form-control-lg rounded-0"
            />
            <label class="form-label" for="form2">Email address</label>
          </div>

          <div class="pt-1 mb-4">
            <button
              class="btn btn-dark btn-lg btn-block rounded-0 w-100"
              type="button"
            >
              Submit
            </button>
          </div>

          <!-- <a class="small text-muted" href="#!">Forgot password?</a>
            <p class="pb-lg-2" style="color: #393f81">
              Don't have an account?
              <router-link to="/forgotpass" style="color: #393f81"
                >Register here</router-link
              >
            </p> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#forgotpass {
  overflow: hidden;
}
@media (min-width: 200px) and (max-width: 450px) {
  #forgotpass .px-5 {
    padding: 0 10px !important;
  }
}
</style>
