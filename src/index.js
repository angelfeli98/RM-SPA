"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles.css");
const router_1 = require("./app/router.js");
const routes_1 = require("./app/routes.js");
const router = new router_1.AppRouter(routes_1.routes);
