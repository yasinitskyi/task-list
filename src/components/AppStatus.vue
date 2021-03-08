<template>
  <span class="badge" :class="type.type">{{type.text}}</span>
</template>

<script>
export default {
  props: ['type']
}
</script>