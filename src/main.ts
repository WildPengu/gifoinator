import { createApp } from 'vue'
import { store } from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(fas)

createApp(App)
  .use(store)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
