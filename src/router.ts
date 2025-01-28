import { createRouter, createWebHashHistory } from 'vue-router'

import Learn from './pages/LearnPage.vue'
import Admin from './pages/AdminPage.vue'
import Settings from './pages/SettingsPage.vue'
import NotFound from './pages/NotFoundPage.vue'
import About from './pages/AboutPage.vue'

const routes = [
  { path: '/', component: Learn },
  { path: '/admin', component: Admin },
  { path: '/about', component: About },
  { path: '/settings', component: Settings },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
