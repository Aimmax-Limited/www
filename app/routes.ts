import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/coming-soon.tsx"),
  route("dev-home", "routes/home.tsx"),
  route("dev-about", "routes/about.tsx"),
  route("dev-contactUs", "routes/contactUs.tsx")
] satisfies RouteConfig;
