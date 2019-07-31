<template>
  <div>
    <h1 :class="colorClass">{{ title }}</h1>
    <span v-for="a in arr" :key="a.id">
      {{ a }}
    </span>
    <button @click="testEmit">Change</button>
  </div>
  
</template>

<script>
import EventBus from './eventBus';
export default {
  name: 'test-page',
  data() {
    return {
      colorClass: 'red',
      title: 'Tesddt',
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  },
  methods: {
    changeData() {
      // var arr = [];
      // arr = this.arr.slice();
      // arr[3] = 333;
      // this.arr = arr;
      this.$set(this.arr, 3, 333);
    },
    testEmit() {
      EventBus.$emit('clickTd');
    },
  },
  created() {
    EventBus.$on('clickTd', this.changeData);
  }
}
</script>

<style scoped>
  
</style>