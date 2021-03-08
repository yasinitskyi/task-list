<template>
  <nav class="navbar">
    <h3>
      <router-link to="/">My Task List</router-link>
    </h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/tasks">All tasks</router-link>
      </li>
      <li>
        <router-link to="/new">Create new task</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>