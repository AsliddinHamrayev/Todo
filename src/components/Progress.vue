<template>
  <main>
      <div class="container">
          <div class="progress-content">
              <div class="task-box">
                  <div class="card-task">
                      <img src="../assets/10.png" class="task__img" alt="">
                      <div class="task-text-box">
                          <h1 class="task-text__title">Design Changes</h1>
                          <h4 class="task-text__description">2 days ago</h4>
                      </div>
                  </div>

                  <div class="card-task">
                      <img src="../assets/10.png" class="task__img" alt="">
                      <div class="task-text-box">
                          <h1 class="task-text__title">Design Changes</h1>
                          <h4 class="task-text__description">2 days ago</h4>
                      </div>
                  </div>
              </div>
              
          </div>
      </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>

.task__img {
    background: rgb(83,51,227);
    background: linear-gradient(0deg, rgba(83,51,227,1) 0%, rgba(115,146,215,1) 85%);
    padding: 10px;
    border-radius: 10px;
}

.task-text__title {
    font-weight: 600;
font-size: 22.423px;
color: #242736;
}

.task-text__description {
    font-weight: normal;
font-size: 16.4809px;
color: #AEAEB3;
}

.card-task {
    display: flex;
    background-color: #fff;
    align-items: center;
    gap: 25px;
    padding: 26px;
    border-radius: 15px;
    margin-top: 15px;
}

</style>