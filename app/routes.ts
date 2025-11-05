import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("projekte", "routes/projekte.tsx"), 
    route("kontakt", "routes/kontakt.tsx"),


] satisfies RouteConfig;
