import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import i18n from './i18n';

const app = createApp(App);
app.use(i18n);
app.use(ElementPlus, {
  i18n: i18n.global.t,
});
app.mount('#app');
