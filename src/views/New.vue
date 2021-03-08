<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Create New Task</h1>
    <div class="form-control">
      <label for="title">Name of the Task</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Deadline</label>
      <input type="date" id="date" v-model="date" :min="dateToString">
    </div>

    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" v-model="text"></textarea>
    </div>

    <button class="btn primary" type="submit" :disabled="!validation">Create</button>
  </form>
</template>


<script>
  export default {
    data() {
      return {
        title: '',
        date: null,
        text: '',
      }
    },
    computed: {
      validation() {
        return this.title && this.date && this.text !== ''
      },
      dateToString() {
        let originDate = this.$store.getters.date
        const day = originDate.getDate() < 10 ? '0' + originDate.getDate() : originDate.getDate()
        const month = originDate.getMonth() < 10 ? '0' + (originDate.getMonth() + 1) : (originDate.getMonth() + 1)
        originDate = `${originDate.getFullYear()}-${month}-${day}`
        return originDate
      }
    },
    methods: {
      createTask() {
        if(this.validation) {
          const form = {
            title: this.title,
            id: String(Math.round(Math.random() + (Math.random() * 100) - 2)),
            date: this.date,
            text: this.text,
            status: {
              text: 'In process',
              type: 'warning'
            },
          }
          this.$store.commit('pushTask', form)
          this.title =''
          this.date = null
          this.text = ''
        }
      }
    }
  }
</script>