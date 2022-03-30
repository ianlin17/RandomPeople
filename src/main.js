import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../index.css'
import List from './components/List.vue'
import Card from './components/Card.vue'
import Main from './components/Main.vue'
import Switch from './components/Switch.vue'
import Select from './components/Select.vue'
import Pagi from './components/Pagi.vue'
createApp(App).use(ElementPlus).component('List', List).component('Card', Card).component('Main', Main).component('Select', Select)
.component('Pagi', Pagi).component('Switch', Switch).mount('#app');