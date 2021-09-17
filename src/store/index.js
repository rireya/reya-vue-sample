import { createStore } from 'vuex';
import modules from './modules/_register';

export default createStore({
  state: () => ({
    count: 0
  }),

  modules: {
    ...modules
  }
});
