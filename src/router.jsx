import {createBrowserRouter} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import App from "./App";

import Main from "./pages/main/Main";
import Auth from "./pages/auth/Auth";
import Locker from "./pages/lockerInfo/Locker";
import Log from "./pages/lockerLog/Log";    
import Loading from "./pages/loading/Loading";  
import NotFoundError from "./pages/errors/NotFound";



const LazyLoading = lazy(() => import("./pages/loading/Loading"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Main />
            },
            {
                path: "loading",
                element: (
                    <Suspense fallback={<Loading />}>
                        <LazyLoading />
                    </Suspense>
                )
            },
            {
                path: "auth",
                element: <Auth />
            },
            {
                path: "main",
                element: <Main />
            },
            {
                path: "user",
                element: <User />
            },
            {
                path: "log",
                element: <Log />
            },
            {
                path: "locker",
                element: <Locker />
            }
        
        ],
        errorElement: <NotFoundError />
    }
]);

export default router;
