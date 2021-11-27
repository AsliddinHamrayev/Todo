<template>
  <div class="feature">
      <div class="container">
          <div class="featured-content">
              <div class="flex">
                  <button class="btn__task active">My Tasks</button>
                  <button class="btn__task">In-progress</button>
                  <button class="btn__task">Completed</button>
              </div>

              <div class="cards">
                  <div class="task-card">
                      <div class="card-header">
                          <img src="../assets/card-img.png" alt="" class="card__img">
                          <h2 class="card__title">Project 1</h2>
                      </div>

                      <h1 class="card__text">Front-end Development</h1>

                      <h4 class="card__date">October 20, 2020</h4>
                  </div>

                  <div class="task-card">
                      <div class="card-header">
                          <img src="../assets/card-img.png" alt="" class="card__img">
                          <h2 class="card__title">Project 1</h2>
                      </div>

                      <h1 class="card__text">Front-end Development</h1>

                      <h4 class="card__date">October 20, 2020</h4>
                  </div>

                  <div class="task-card">
                      <div class="card-header">
                          <img src="../assets/card-img.png" alt="" class="card__img">
                          <h2 class="card__title">Project 1</h2>
                      </div>

                      <h1 class="card__text">Front-end Development</h1>

                      <h4 class="card__date">October 20, 2020</h4>
                  </div>
              </div>
           
          </div>
      </div>
  </div>
</template>

<script>

export default {
    components: {
    },
}

</script>

<style>

.featured-content {
    margin-top: 50px;
}

.flex {
    display: flex;
    justify-content: space-between;
}

.btn__task {
    padding: 15px 30px;
    border: none;
    background-color: #E5EAFC;
    border-radius: 25px;
    cursor: pointer;
}

.active {
    background-color: #fff;
    color: #000;
    font-weight: 500;
}

.task-card {
    background: rgb(83,51,227);
    background: linear-gradient(0deg, rgba(83,51,227,1) 0%, rgba(115,146,215,1) 85%);
    max-width: 340px;
    border-radius: 10px;
    padding: 36px;
    color: #fff;
    margin-top: 32px;
}

.card__img {
    background-color:rgba(71, 11, 213, 0.631);
    border-radius: 12px;
}

.card-header {
    display: flex;
    gap: 20px;
    align-items: center;
}

.card__title {
    font-weight: 600;
font-size: 22.423px;
}

.card__text {
    font-weight: 600;
font-size: 33px;
line-height: 43px;
margin-top: 38px;
margin-bottom: 60px;
}

.card__date {
    font-weight: 300;
font-size: 18px;
}
</style>