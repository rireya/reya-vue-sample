import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { $app, $msg, $native, $network, $page, $popup } from '@/plugins/bizmob-vue';

import '@/native';

const app = createApp(App);

/** 주요 Plugin 추가 */
app.use(router);
app.use(store);

/** 전역 Plugin 추가 */
app.use($app);
app.use($msg);
app.use($native);
app.use($network);
app.use($page);
app.use($popup);

window.vm = app.mount('#app');
