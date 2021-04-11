import { createI18n } from 'vue-i18n';
import enLocale from 'element-plus/lib/locale/lang/en';
import jaLocale from 'element-plus/lib/locale/lang/ja';
import zhCnLocale from 'element-plus/lib/locale/lang/zh-cn';
import zhTwLocale from 'element-plus/lib/locale/lang/zh-tw';

const messages = {
  [enLocale.name]: {
    el: enLocale.el,
    message: {
      hello: 'hello world',
    },
  },
  [jaLocale.name]: {
    el: jaLocale.el,
    message: {
      hello: 'おはよう世界。',
    },
  },
  [zhCnLocale.name]: {
    el: zhCnLocale.el,
    message: {
      hello: '你好，世界',
    },
  },
  [zhTwLocale.name]: {
    el: zhTwLocale.el,
    message: {
      hello: '你呷飽未，世界', // 呷飽太閒喔？
    },
  },
};

const i18n = createI18n({
  locale: jaLocale.name,
  fallbackLocale: enLocale.name,
  messages,
});

export default i18n;
