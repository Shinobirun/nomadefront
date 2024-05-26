import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './assets/css/variables.css';

// Import Bootstrap and BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(App);

// Make BootstrapVue available throughout your project
app.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
app.use(IconsPlugin);

app.use(store).use(router).mount('#app');