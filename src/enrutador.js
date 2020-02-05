import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Error404 from './components/Error404.vue';
import Projects from './components/Projects.vue';
import Achievements from './components/Achievements.vue';
import Certifications from './components/Certifications.vue';
import Languages from './components/Languages.vue';
import i18n from './i18n';

Vue.use(VueRouter);
const rutas = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
 {
  path: '/:lang',
  component: {
    render (c) { return c('router-view') }
  },
  children: [
    {
      path: 'blog',
      name: 'about',
      component: Profile
    },
    {
      path: 'proyectos',
      name: 'projects',
      component: Projects
    },
    {
      path: 'logros',
      name: 'achievements',
      component: Achievements
    },
    {
      path: 'certificaciones',
      name: 'certifications',
      component: Certifications
    },
    {
      path: 'idiomas',
      name: 'Languages',
      component: Languages
    },
    {
      path: '/',
      name: 'Inicio',
      component: Home
    },
    {
      path:'*',
      component: Error404
    }
  ]
},
{
  path:'*',
  component: Error404
}
];

export default  new VueRouter(
  {
    routes: rutas,
    mode:'history',
    base: process.env.BASE_URL,
  }
)
