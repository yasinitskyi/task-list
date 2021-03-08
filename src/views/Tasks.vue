<template>
  <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Number of tasks: {{tasks.length}}</h3>
    <div class="card" v-for="task in tasks" :key="task.title">
      <h2 class="card-title">
        {{task.title}}
        <AppStatus :type="task.status" />
      </h2>
      <p>{{task.text.length > 100 ? `${task.text.slice(0, 99)}...` : task.text}}</p>
      <p>
        <strong>
          <small>
            {{new Date().toLocaleDateString('ko-KR')}}
          </small>
        </strong>
      </p>
      <router-link :to="'/task/' + task.id">
        <button class="btn primary">Show</button>
      </router-link>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus},
  computed: {
    tasks() {
      return this.$store.state.tasks
    },
  },
  created() {
    if(localStorage.getItem('tasks')) {
      this.$store.commit('defaultTask', JSON.parse(localStorage.getItem('tasks')))
    } else {
      return
    }
  }
}
</script>
