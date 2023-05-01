import { Suspense, lazy } from 'react';
import Header from '../components/Layout/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Layout/Footer/Footer';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ForgetPassword from '../components/Auth/ForgetPassword';
import ResetPassword from '../components/Auth/ResetPassword';
import Subscribe from '../components/Payments/Subscribe';
import PaymentSuccess from '../components/Payments/PaymentSuccess';
import PaymentFail from '../components/Payments/PaymentFail';
import NotFound from '../components/Layout/Notfound/NotFound';
import Profile from '../components/Profile/Profile';
import ChangePassword from '../components/Profile/ChangePassword';
import UpdateProfile from '../components/Profile/UpdateProfile';
import Dashbord from '../components/Admin/Dashbord/Dashbord';
import CreateCourse from '../components/Admin/CreateCourse/CreateCourse';
import Users from '../components/Admin/Users/Users';
import AdminCourses from '../components/Admin/AdminCourses/AdminCourses';

const Home = lazy(() => import('../components/Home'));
const Courses = lazy(() => import('../components/Courses'));
const Contact = lazy(() => import('../components/Contact'));
const Request = lazy(() => import('../components/Request'));
const About = lazy(() => import('../components/About'));
const CoursePage = lazy(() => import('../components/CoursePage'));

export const mainRoutes = [
  {
    element: <AppLayout />,
    path: '/',
    children: [
      {
        element: (
          <Suspense fallback={<h1>loading... </h1>}>
            <Home />
          </Suspense>
        ),
        path: '/',
      },
      {
        path: '/courses',
        element: (
          <Suspense fallback={<h1>loading... </h1>}>
            <Courses />
          </Suspense>
        ),
      },
      {
        path: '/courses/:id',
        element: (
          <Suspense fallback={<h1>loading.........</h1>}>
            <CoursePage />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<h1>loading... </h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/request',
        element: (
          <Suspense fallback={<h1>loading.........</h1>}>
            <Request />
          </Suspense>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/changepassword',
        element: <ChangePassword />,
      },
      {
        path: '/updateprofile',
        element: <UpdateProfile />,
      },
      {
        path: '/forgetpassword',
        element: <ForgetPassword />,
      },
      {
        path: '/resetpassword/:token',
        element: <ResetPassword />,
      },
      {
        path: '/subscribe',
        element: <Subscribe />,
      },
      {
        path: '/paymentsuccess',
        element: <PaymentSuccess />,
      },
      {
        path: '/paymentfail',
        element: <PaymentFail />,
      },
      //Admin Routes
      {
        path: '/admin/dashboard',
        element: <Dashbord />,
      },
      {
        path: '/admin/createcourse',
        element: <CreateCourse />,
      },
      {
        path: '/admin/courses',
        element: <AdminCourses />,
      },
      {
        path: '/admin/users',
        element: <Users />,
      },

      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
