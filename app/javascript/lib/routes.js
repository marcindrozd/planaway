import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

const routes = [
  {
    title: 'SignIn',
    path: '/sign_in',
    component: SignIn,
  },
  {
    title: 'SignUp',
    path: '/sign_up',
    component: SignUp,
  },
  // {
  //   title: 'Blog',
  //   path: '/blog',
  //   exact: true
  //   component: Blog
  // },
];

export default routes;
