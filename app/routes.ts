import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [

  index("routes/home.tsx"),
  route("coming-soon", "routes/coming-soon.tsx"),
  route("dev-services", "routes/services.tsx"),
  route("dev-about", "routes/about.tsx"),
  route("dev-contactUs", "routes/contactUs.tsx"),
] satisfies RouteConfig;
