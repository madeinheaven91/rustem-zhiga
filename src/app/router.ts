import { createRouter, createWebHistory } from "vue-router";
import Index from '@/pages/index'
import News from '@/pages/news'
import Art from '@/pages/art'
import Bio from '@/pages/bio'
import Contacts from '@/pages/contacts'

const routes = [
  { path: "/", component: Index, },
  { path: "/news", component: News, },
  { path: "/art", component: Art, },
  { path: "/bio", component: Bio, },
  { path: "/contacts", component: Contacts, },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
