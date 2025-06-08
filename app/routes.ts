import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/coming-soon.tsx"),
  route("dev-home", "routes/home.tsx"),
  route("dev-about", "routes/about.tsx"),
  route("dev-contact-us", "routes/contact-us.tsx"),
] satisfies RouteConfig;
