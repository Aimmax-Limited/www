import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/coming-soon.tsx"),
  route("dev-home", "routes/home.tsx"),
  route("dev-about", "routes/about.tsx"),
  route("dev-contactUs", "routes/contactUs.tsx"),
  route("dev-contactUs-two", "routes/contactUs-two.tsx")
] satisfies RouteConfig;
