import { createRouter, createWebHistory } from 'vue-router'
import Top from "@/pages/Top/Top";
import LaunchLayout from "@/layouts/LaunchLayout/LaunchLayout";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import Element from "@/pages/Elements.vue"

const routes = [
  {
    path: '/',
    component: LaunchLayout,
    children: [
      {
        path: '',
        name: 'Top',
        component: Top,
      }
    ]
  },
  {
    path: '/elements',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Elements',
        component: Element,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router