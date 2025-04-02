import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export const routes = [
    {
        path: "/",
        component: Home,
        exact: false
    },
    {
        path: "/register",
        component: Register,
        exact: true,
    },
    {
        path: "/login",
        component: Login,
        exact: true
    },
    {
        path: "/dashboard",
        component: Dashboard,
        exact:false
    }

];