import { getAsyncPage } from "../util";

const About = getAsyncPage("../views/About.vue");
const Home = getAsyncPage("../views/Home.vue");

export default [
    { path: "/", component: Home },
    { path: "/about", component: About }
]