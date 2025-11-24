import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("api/locales/:lng/:ns", "./routes/locales.ts"),
    route("projekte", "routes/projekte.tsx"), 
    route("kontakt", "routes/kontakt.tsx"),
    route("set-locale", "./routes/set-locale.tsx"),
    route("*", "./routes/not-found.tsx"),

] satisfies RouteConfig;
