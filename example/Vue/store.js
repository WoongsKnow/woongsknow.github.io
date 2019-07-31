import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    title: '',
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }, // vue의 data 속성과 비슷
  getters: {

  }, // vue의 computed와 비슷
  mutations: {
    SET_ARR(state) {
      
    },
    SET_TITLE(state, title) {
      state:title = title;
    },
  }, // state를 수정할 때 사용. 동기적으로. state를 수정할때 반드시 이것으로 가능
  actions: {

  }, // 비동기를 사용할 때 , 여러 뮤테이션을 연달아 실행할 때.
});