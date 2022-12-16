import { lazy } from "react";


const routes = [
  {
    path: "/",
    name: "app1",
    url: "http://localhost:3001/remoteEntry.js",
    scope: "app1",
    module: "./App",
  },
  {
    path: "/app2",
    name: "app2",
    url: "http://localhost:3002/remoteEntry.js",
    scope: "app2",
    module: "./App",
  },
];
console.log("routes", routes);

export default routes;
