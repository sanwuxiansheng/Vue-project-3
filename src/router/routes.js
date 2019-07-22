// 引入路由
import Msite from '../pages/Msite';
// import Order from '../pages/Order';
// import Profile from '../pages/Profile';
// import Search from '../pages/Search';
// import Login from '../pages/Login';
// import Shop from '../pages/Shop';
// import Goods from '../pages/Shop/Goods';
// import Info from '../pages/Shop/Info';
// import Ratings from '../pages/Shop/Ratings';
import UserInfo from '../pages/UserInfo';


// 组建按需加载
const Order = () => import('../pages/Order');
const Profile = () => import('../pages/Profile');
const Search = () => import('../pages/Search');
const Login = () => import('../pages/Login');
const Shop = () => import('../pages/Shop');
const Goods = () => import('../pages/Shop/Goods');
const Info = () => import('../pages/Shop/Info');
const Ratings = () => import('../pages/Shop/Ratings');
// 向外暴露
export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/goods',
        component: Goods
      },
      {
        path: '/shop/info',
        component: Info
      },
      {
        path: '/shop/ratings',
        component: Ratings
      },
      {
        path: '/shop',
        redirect: '/shop/goods'
      }
    ]
  },
  {
    path: '/userInfo',
    component: UserInfo
  },
  {
    path: '/',
    redirect: '/msite'
  }
]