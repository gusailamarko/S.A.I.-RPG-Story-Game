import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/", 'routes/home.tsx'),
    route("/create", 'routes/creation.tsx'),
    route("/profile", 'routes/profile.tsx')
] satisfies RouteConfig;
