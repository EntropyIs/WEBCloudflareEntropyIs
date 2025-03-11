import { Hono } from "hono";
import { renderer } from "./routes/_renderer";
import index from "./routes";
import { Bindings } from "./global";

import { getDomainExternalLinks } from "./sql/external_link_data";


const app = new Hono<{Bindings: Bindings}>();

app.use(renderer)
app.route('/', index)


app.get("/query", async (c) => {
    try {
      let sites= await getDomainExternalLinks(c.env.DB, "entropyis")
      return c.json(sites);
    } catch (e) {
      return c.json({ err: e.message }, 500);
    }
  });


export default app;

