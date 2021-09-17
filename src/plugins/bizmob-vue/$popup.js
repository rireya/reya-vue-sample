/**
 * Popup Handler
 */
export default {
  install: (app, options) => {
    app.mixin({

    });

    app.config.globalProperties.$popup = {
      // Popup Open
      openPopup(_opt, _data = {}) {
        console.log('open', _opt, _data);
      },

      // Popup Close
      closePopup(url) {
        console.log('openLink', url);
      },

      // Popup Remove
      removePopup(_opt, _data = {}) {
        console.log('replace', _opt, _data);
      }
    };
  }
};
