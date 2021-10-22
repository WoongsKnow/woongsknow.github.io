Vue.component('star', {
  template: 
  '<div>' + 
  '<i v-for="n in score1"class="fas fa-star"></i>' + 
  '<i v-if="score1 < 5" v-for="n in (5 - score1)"class="far fa-star">ㅑㅑㅑ</i>' + 
  '</div>',
  props: {
    score: Number,
  },
  data: {
    isHarf: false,
  },
  computed: {
    score1() {
      let score = this.score - Math.floor(this.score);
      if (this.score > 0.7) {
        return Math.ceil(this.score); 
      } else if (this.score < 0.3) {
        return Math.floor(this.score); 
      } else {
        this.isHarf = true;
        return Math.floor(this.score); 
      }
      return Math.round(this.score);
    },
  },
  mounted() {
    console.log('mounted', this.score); 
  }
});