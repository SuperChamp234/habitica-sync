import i18n from "i18next";
import enUsTrans from "./i18n/en-us.json";
import zhCnTrans from "./i18n/zh-cn.json";
import { initReactI18next } from 'react-i18next';

const lang = window.localStorage.getItem('language');

i18n.use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enUsTrans,
      },
      zh: {
        translation: zhCnTrans,
      },
    },
    fallbackLng: lang,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n;