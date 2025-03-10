import { Hono } from "hono";
import { renderer } from "./routes/_renderer";
import index from "./routes";

const app = new Hono();

app.use(renderer)
app.route('/', index)

export default app;

