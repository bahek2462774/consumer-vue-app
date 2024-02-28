import isDiaboloLib from 'is-diabolo-lib/vue-plugin'

import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'

const app = createApp(App)
app.use(isDiaboloLib)
app.mount('#app')
