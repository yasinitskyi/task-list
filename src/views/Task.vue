<template>
  <div class="card" v-if="task">
    <div><h2>{{task.title.toUpperCase()}}</h2></div>
    <p><strong>Task ID</strong>: {{task.id}}</p>
    <p><strong>Status</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Deadline</strong>: {{ new Date().toLocaleDateString() }}</p>
    <p><strong>Task</strong>:  {{task.text}}</p>
    <div>
      <button class="btn primary" v-if="task.status.text === 'In process'" @click="endTask">End Task</button>
      <button class="btn danger" @click="deleteTask">Delete Task</button>
      <button class="btn" @click="pushRoute">Back to tasks</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с ID {{$route.params.id}} нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus},
  data() {
    return {
    }
  },
  computed: {
    task() {
      return this.$store.state.tasks.find((e)=> +e.id === (+this.$route.params.id));
    }
  },
  methods: {
    pushRoute() {
      this.$router.push("/tasks");
    },
    deleteTask() {
      this.$store.commit('deleteTask', +this.$route.params.id);
      this.pushRoute();
    },
    endTask() {
      this.$store.commit('endTask', +this.$route.params.id);
      this.pushRoute();
    }
  }
}
</script>

<style scoped>

</style>