import { Hono } from "hono";
import { renderer } from "./routes/_renderer";
import index from "./routes";
import { Bindings } from "./global";

import { getAllSites } from "./sql/site_data";


const app = new Hono<{Bindings: Bindings}>();

app.use(renderer)
app.route('/', index)


app.get("/query", async (c) => {
    try {
      let sites= await getAllSites(c.env.DB)
      return c.json(sites);
    } catch (e) {
      return c.json({ err: e.message }, 500);
    }
  });


export default app;

