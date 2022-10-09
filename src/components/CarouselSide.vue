<template>
  <div id="carousel-side">
    <div class="row m-0 p-0">
      <div class="col-lg-6 m-0 p-0">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/first-imgGirl.png" class="lg-img" alt="" />
              <img src="../assets/first-imgGirl.png" class="sm-img" alt="" />
            </div>
            <div class="carousel-item">
              <img src="../assets/bigScreen.png" class="lg-img" alt="" />
              <img src="../assets/secondImg.png" class="sm-img" alt="" />
            </div>
            <div class="carousel-item">
              <img src="../assets/bigScreenII.png" class="lg-img" alt="" />

              <img src="../assets/thirdImg.png" class="sm-img" alt="" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!-- <div class="col-lg-5 m-auto"> -->

      <!-- </div> -->
    </div>
  </div>
</template>
