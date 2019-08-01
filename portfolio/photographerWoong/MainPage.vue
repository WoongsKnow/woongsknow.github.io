<template>
  <div>
    <nav>ddlkist</nav>
    <h1 :class="colorClass">{{ title }}</h1>
    <button @click="testEmit">Change</button>
    <cookie-agree></cookie-agree>
  </div>
</template>

<script>
// import EventBus from './eventBus';
import CookieAgree from './components/CookieAgree';

export default {
  name: 'main-page',
  components: {
    CookieAgree
  },
  data() {
    return {
      title: 'Tesddt',
    }
  },
  methods: {

  },
  created() {
    
  }
}
</script>

<style scoped>
  
</style>