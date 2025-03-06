import { Hono } from "hono";
import { showRoutes } from "hono/dev";

const app = new Hono();

showRoutes(app)

export default app;

