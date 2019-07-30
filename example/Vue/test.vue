<template>
  <div>
    <h1>{{ title }}</h1>
    <span v-for="a in arr" :key="a.id">
      {{ a }}
    </span>
  </div>
  
</template>

<script>
export default {
  name: 'test-page',
  data() {
    return {
      title: '테스트',
      arr: [1, 2, 3, 4, 5],
    }
  }
}
</script>

<style scope>
  
</style>