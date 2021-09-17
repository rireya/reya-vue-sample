/**
 * Message Handler
 */
export default {
  install: (app, options) => {
    const test = 'foo';

    app.config.globalProperties.$msg = {
      alert(_opt, _btn = null) {
        console.log(test);
      },

      confirm(_opt) {

      },

      toast(_text) {

      }
    };
  }
};
