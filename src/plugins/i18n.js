import VueI18n from 'vue-i18n'
import Vue from 'vue'
import zhTW from '@/common/lang/zh-tw/index'
Vue.use(VueI18n)
const messages = {
    'zh-TW': zhTW,
}
export const i18n = new VueI18n({
    locale: 'zh-TW',
    messages
})
function i18nPlugin(i18NLocale) {
    i18n.locale = i18NLocale
}
export default i18nPlugin