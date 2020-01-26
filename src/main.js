import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import enrutador from './enrutador';
import i18n from './i18n'
Vue.use(Element);

Vue.config.productionTip = false

// use beforeEach route guard to set the language
enrutador.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'es'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})
new Vue({
  render: h => h(App),
  router: enrutador,
  i18n
}).$mount('#app')
