<template>
  <div class="create-box">
    <div class="content-top">
      <div class="header">
        <router-link to="tasks">
          <button class="header__btn">
            <i
              ><svg
                width="30"
                height="22"
                viewBox="0 0 30 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.35476 9.16667L12.6283 3.8784C13.3409 3.16378 13.3401 2.00702 12.6265 1.2934C11.9122 0.579076 10.754 0.579076 10.0397 1.2934L0.874083 10.459C0.575306 10.7578 0.575306 11.2422 0.874083 11.541L10.0397 20.7066C10.754 21.4209 11.9122 21.4209 12.6265 20.7066C13.3401 19.993 13.3409 18.8362 12.6283 18.1216L7.35476 12.8333H27.8331C28.8456 12.8333 29.6664 12.0125 29.6664 11C29.6664 9.98748 28.8456 9.16667 27.8331 9.16667H7.35476Z"
                  fill="white"
                />
              </svg>
            </i>
          </button>
        </router-link>

        <h1 class="header__title">Create a Task</h1>
        <button class="header__btn avtive">
          <i class="footer__icon"
            ><svg
              width="34"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="29.4716"
                y="34.2344"
                width="5.67857"
                height="16.0893"
                rx="2.83929"
                transform="rotate(-45 29.4716 34.2344)"
                fill="#D8DEF3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.1601 35.239C41.6282 28.771 41.6282 18.2842 35.1601 11.8161C28.6921 5.34804 18.2053 5.34804 11.7372 11.8161C5.26915 18.2842 5.26915 28.771 11.7372 35.239C18.2053 41.7071 28.6921 41.7071 35.1601 35.239ZM31.8139 31.8931C36.434 27.273 36.434 19.7825 31.8139 15.1624C27.1939 10.5424 19.7033 10.5424 15.0833 15.1624C10.4632 19.7825 10.4632 27.273 15.0833 31.8931C19.7033 36.5131 27.1939 36.5131 31.8139 31.8931Z"
                fill="#D8DEF3"
              />
            </svg>
          </i>
        </button>
      </div>
      <div class="form" @keypress.enter="AddNewNote">
        <h1 class="name__title">Name</h1>
        <input
          type="text"
          class="input__name"
          placeholder="Task name"
          v-model="NoteName"
        />
        <h1 class="name__title">Date</h1>
        <input
          type="number"
          class="input__name"
          placeholder="Date"
          v-model="NoteDate"
        />
      </div>
    </div>

    <div class="content-bottom">
      <div class="time-box">
        <div class="start-time">
          <h1 class="main__title">Start Time</h1>
          <h2 class="time__date">01:22pm</h2>
        </div>
        <div class="end-time">
          <h1 class="main__title">End Time</h1>
          <h2 class="time__date">03:22pm</h2>
        </div>
      </div>

      <h1 class="main__title">Description</h1>
      <p class="main__text">
        Lorem ipsum dolor sit amet, er adipiscing elit, sed dianummy nibh
        euismod dolor sit amet, er adipiscing elit, sed dianummy nibh euismod.
      </p>

      <h1 class="main__title">Category</h1>
      <div class="category-box">
        <button class="btn__category">Design</button>
        <button class="btn__category">Meeting</button>
        <button class="btn__category">Coding</button>
        <button class="btn__category">Watching</button>
        <button class="btn__category">Testing</button>
        <button class="btn__category">Quick call</button>
      </div>
      <button type="submit" class="btn__main" @click="AddNewNote">
        Create Task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      NoteName: "",
      NoteDate: "",
      notes: [],
    };
  },
  methods: {
    AddNewNote() {
      if (this.NoteName === "") {
        return;
      }
      console.log(this.NoteDate, this.NoteName);
      this.notes.push({
        Name: this.NoteName,
        Date: this.NoteDate,
      });

      this.NoteName = "";
      this.NoteDate = "";
    },

    RemoveNote(index) {
      this.notes.splice(index, 1);
    },
  },

  mounted() {
    const initNotes = localStorage.getItem("note");
    const notes = JSON.parse(initNotes ? initNotes : "[]");
    console.log(notes);
    this.notes = notes;
  },

  watch: {
    notes: {
      deep: true,
      handler() {
        const notes = this.notes;
        localStorage.setItem("note", JSON.stringify(notes));
      },
    },
  },
};
</script>

<style>
.create-box {
  height: 100vh;
  background: linear-gradient(177.23deg, #9c2cf3 -13.49%, #3a49f9 109.75%);
}

.content-top {
  padding: 30px 50px;
  color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.header__btn {
  background-color: transparent;
  border: none;
}

.header__btn path,
.header__btn rect {
  fill: #fff;
}

.header__title {
  font-weight: 600;
  font-size: 20px;
}

.task {
  color: #000;
}

.input__name {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #333;
  padding: 15px 0;
  outline: none;
  color: #fff;
}

.input__name::placeholder {
  color: #fff;
}

.name__title {
  font-weight: normal;
  font-size: 22.423px;
  margin-top: 20px;
}

.content-bottom {
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  padding: 30px 50px;
}

.time-box {
  display: flex;
  gap: 70px;
  border-bottom: 1px solid #bfc8e8;
  padding: 0 0 24px 0px;
}

.main__title {
  font-weight: normal;
  font-size: 22.423px;
  color: #bfc8e8;
  margin-bottom: 16px;
}

.time__date {
  font-weight: 600;
  font-size: 32px;
  color: #2e3a59;
}

.main__text {
  font-weight: 500;
  font-size: 24px;
  color: #2e3a59;
  padding: 0 0 24px 0;
  border-bottom: 1px solid #bfc8e8;
}

.category-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-around;
}

.btn__category {
  background-color: #e5eafc;
  box-shadow: 17px 26px 25px rgba(226, 226, 226, 0.25);
  border-radius: 75px;
  color: #000;
  font-weight: normal;
  font-size: 16px;
  border: none;
  width: 155px;
  height: 70px;
  cursor: pointer;
}

.btn__category:focus {
  background: linear-gradient(177.23deg, #9c2cf3 -13.49%, #3a49f9 109.75%);
  color: #fff;
}

.btn__main {
  text-align: center;
  background: linear-gradient(177.23deg, #9c2cf3 -13.49%, #3a49f9 109.75%);
  width: 100%;
  margin-top: 48px;
  padding: 25px 0;
  border-radius: 75px;
  border: none;
  font-weight: 600;
  font-size: 24px;
  color: #fff;
}

@media (max-width: 425px) {
  .main__title {
    font-size: 18px;
  }

  .time__date {
    font-size: 24px;
  }

  .header__title {
    font-size: 16px;
  }

  .btn__category {
    width: 126px;
    height: 56px;
  }
}

@media (max-width: 375px) {
  .main__text {
    font-size: 16px;
  }

  .btn__category {
    width: 130px;
    height: 50px;
  }

  .btn__main {
    font-size: 18px;
  }
}

@media (max-width: 320px) {
  .btn__category {
    width: 100px;
    font-size: 14px;
  }

  .main__title {
    font-size: 16px;
  }

  .time__date {
    font-size: 20px;
  }
}
</style>
