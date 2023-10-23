import React from 'react';
import {
    createBrowserRouter,
    redirect,
} from "react-router-dom";
import { AuthProvider } from "./auth";
import LayoutPage from "../Layout/Layout";
import HomePage from '../Pages/Public/HomePage';
import { protectedLoader } from './protectedLoader';
import { loginLoader } from './loginLoader';
import LoginPage from '../Pages/Login/LoginPage';
import loginAction from '../Pages/Login/loginAction';
import DashboardPage from '../Pages/Dashboard/DashboardPage';
import Page404 from '../Pages/errors/404Page';

const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        loader: protectedLoader,
        Component: LayoutPage,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "/dashboard",
                loader: protectedLoader,
                Component: DashboardPage,
            }
        ],
    },
    {
        path: "/login",
        action: loginAction,
        loader: loginLoader,
        Component: LoginPage,
    },
    {
        path: "/logout",
        async action() {
            // We signout in a "resource route" that we can hit from a fetcher.Form
            await AuthProvider.signout();
            return redirect("/");
        },
    },
    {
        path: "*",
        Component: Page404
    }
]);

export default router;