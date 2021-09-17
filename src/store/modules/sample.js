/**
 * Sample Store
 */
export default {
  namespaced: true,

  /*****************************/
  /* state                     */
  /*****************************/
  state: () => ({
    count: 0
  }),

  /*****************************/
  /* mutations                 */
  /*****************************/
  mutations: {
    increment(state) {
      state.count++;
    }
  },

  /*****************************/
  /* getters                   */
  /*****************************/
  getters: {
    count(state, getters, rootState) {
      return state.count;
    }
  },

  /*****************************/
  /* actions                   */
  /*****************************/
  actions: {
    incrementCount(state, commit, rootState) {
      commit('increment');
    }
  }
}