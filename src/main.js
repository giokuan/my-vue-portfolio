import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import VueSmoothScroll from 'vue3-smooth-scroll';
import { createRouter, createWebHistory } from 'vue-router';

import About from './components/About.vue';
import Stacks from './components/Stacks.vue';
import Projects from './components/Projects.vue';
import Contact from './components/contact.vue';

const app = createApp(App);

const routes = [
  { path: '/', component: App},
  { path: '/about', component: About },
  { path: '/stacks', component: Stacks },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(VueSmoothScroll);
app.use(router);
app.mount('#app');
