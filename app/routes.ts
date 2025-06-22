import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("coming-soon", "routes/coming-soon.tsx"),
  route("services", "routes/services.tsx"),
  route("about", "routes/about.tsx"),
  route("contact-us", "routes/contact-us.tsx"),
] satisfies RouteConfig;
