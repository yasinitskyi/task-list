import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      tasks: [],
      date: new Date(),
    }
  },
  mutations: {
    pushTask(state, payload) {
      state.tasks.push(payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, payload) {
      state.tasks.forEach((item, i) => {
        if(+item.id === payload) {
          const modifiedState = state.tasks;
          modifiedState.splice(i, 1);
          state.tasks = modifiedState;
          localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
      });
    },
    defaultTask(state, payload) {
      state.tasks = payload;
    },
    endTask(state, payload) {
      state.tasks.forEach((item, index) => {
        if(+item.id === payload) {
          const originArr = state.tasks;
          originArr[index].status.text = 'Done';
          originArr[index].status.type = 'primary';
          state.tasks = originArr;
          localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
      }); 
    }
  },
  actions: {
  },
  getters: {
    date(state) {
      return state.date;
    }
  },
  modules: {
  }
})
