import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { Footer } from "./componants/footer";

declare module 'hono' {
    interface ContextRenderer {
        (
            conent: string | Promise<string>,
            props: { title: string },
        ): Response
    }
}

interface Env {
    Variables: {

    };
    Bindings: {
        DB: D1Database;
    }
}

const app = new Hono();

app.get('/', (c) => {
    return c.render(
      "<div><ul><li>Eating sushi</li><li>Watching baseball games</li></ul></div>",
      {
        title: 'My favorites',
      }
    )
  })

export default app;

