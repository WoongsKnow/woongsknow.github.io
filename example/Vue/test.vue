<template>
  <div>
    <h1 :class="colorClass">{{ title }}</h1>

    <span v-for="a of arr" :key="a.id">
      {{ a }}
    </span>
    <div v-for="(value, key, index) in user" :key="key">
      {{ index }}. {{ key }}: {{ value }}
    </div>
    <!-- <button @click="testEmit"></button> -->
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
      user: {
        firstName: 'John',
        lastName: 'Locke',
        age: 30
      }
    }
  },
  created() {
    console.log('inner Created');
  },
  mounted() {
    console.log('inner mounted');
  },
  comfiled() {
    console.log('confiled');
  },
  methods: {
    changeData() {
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