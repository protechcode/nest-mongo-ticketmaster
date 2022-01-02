import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import UserLogin from '@/pages/Login/UserLogin'
// Core import ErrorPage from '@/pages/Error/Error';
import Eventos from '@/pages/Eventos/Eventos';
import AddNewEvent from './pages/Eventos/AddNewEvent.vue';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

// Maps
import GoogleMapPage from '@/pages/Maps/Google';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';

// Charts
import ChartsPage from '@/pages/Charts/Charts';

// Ui import IconsPage from '@/pages/Icons/Icons';

import NotificationsPage from '@/pages/Notifications/Notifications';

// Users
import CRUDUser from './pages/User/CRUDUser.vue';
import UserProfile from './components/Tiketmaster/UserProfile.vue'


//Register
import RegisterPage from '@/pages/Register/Register.vue';
import EditEvent from './pages/Eventos/EditEvent.vue'

//Tiketmaster Home in vue
import Home from './components/Tiketmaster/Home.vue';
import ApiCall from './components/Tiketmaster/ApiCall.vue';








Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/profile',
      name: 'Profile',
      component: UserProfile,

    }, 
    {
      path: '/api',
      name: 'ApiCall',
      component: ApiCall,

    }, 
    {
      path: '/ticket',
      name: 'Home',
      component: Home,

    },  
    {
      path: '/userlogin',
      name: 'UserLogin',
      component: UserLogin,
    },
    {
      path: '/adminlogin',
      name: 'Login',
      component: Login,
    },
    {
      path: '/newevent',
      name: 'AddNewEvent',
      component: AddNewEvent,
    },
    {
      path: '/editevent',
      name: 'EditEvent',
      component: EditEvent,
    },
    {
      path: '/eventos',
      name: 'Eventos',
      component: Eventos,
    },
    {
      path: '/user',
      name: 'CRUDUser',
      component:CRUDUser
    },

    /* { 
      path: '/register2',
      name: 'Register',
      component: Register,
    }, */
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
        
        
        
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'components/charts',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'tables',
          name: 'TablesBasicPage',
          component: TablesBasicPage,
        },
        {
          path: 'components/maps',
          name: 'GoogleMapPage',
          component: GoogleMapPage,
        },
      ] ,
    },
  ],
});
