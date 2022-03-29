import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/scss/style.scss"
import "./assets/css/style.min.css"
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js"


createApp(App).use(router).mount('#app')
