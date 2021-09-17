/**
 * Server Request Handler
 */
export default {
  install: (app, options) => {
    app.config.globalProperties.$network = {
      // 전문통신 요청
      async request(_arg) {

      },

      // 로그인 요청
      async requestLogin(_arg) {

      },

      // 응답 값 확인
      responseChecker(_res) {

      }
    };
  }
};
