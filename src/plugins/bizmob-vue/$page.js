/**
 * Page Handler
 */
export default {
  install: (app, options) => {
    app.mixin({

    });

    app.config.globalProperties.$page = {
      // Page Open
      open(_opt, _data = {}) {
        console.log('open', _opt, _data);

        console.log(app);
      },

      // Page Open with url link
      openLink(url) {
        console.log('openLink', url);
      },

      // Page Replace Open
      replace(_opt, _data = {}) {
        console.log('replace', _opt, _data);
      },

      // Page Close
      close(_opt = {}) {

      }
    };
  }
};
