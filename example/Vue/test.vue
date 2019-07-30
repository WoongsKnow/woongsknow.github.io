<template>
  <div>
    <h1 :class="colorClass">{{ title }}</h1>
    <span v-for="a in arr" :key="a.id">
      {{ a }} ff
    </span>
  </div>
  
</template>

<script>
export default {
  name: 'test-page',
  data() {
    return {
      colorClass: 'red',
      title: 'Test',
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  }
}
</script>

<style scoped>
  .red {
    color: red;
  }
  .green {
    color: green;
  }
</style>