import Home from "../components/Home.vue";
import Login from "../components/Login.vue";

const routes = [{
        name: "home",
        path: "/",
        component: Home,
    },
    {
        name: "login",
        path: "/login",
        component: Login,
    }
];

export default routes;