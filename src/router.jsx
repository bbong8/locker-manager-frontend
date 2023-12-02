import { createBrowserRouter } from "react-router-dom";
import React, {lazy, Suspense} from "react";
import App from "./App";

import Main from "./pages/main/Main.jsx";
import Auth from "./pages/auth/Auth.jsx";
import Locker from "./pages/locker/Locker.jsx";
import Log from "./pages/lockerLog/Log.jsx";
import User from "./pages/userInfo/User.jsx";
import Loading from "./pages/loading/Loading.jsx";

const LazyAuth = lazy(() => import("./pages/auth/Auth.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/main", element: <Main /> },
      { path: "", 
        element: (
          <Suspense fallback={<Loading />}>
            <LazyAuth/>
          </Suspense>
        ) },
      { path: "/locker", element: <Locker /> },
      { path: "/log", element: <Log /> },
      { path: "/user", element: <User /> },
    ],
  }

]);

export default router;
