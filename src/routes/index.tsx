import { Hono } from "hono"
import { Bindings } from "../global";


const index = new Hono<{Bindings: Bindings}>();

index.get('/', async (c) => {
  try {
    return c.render(
      <div> hello world</div>, 
      {
        db: c.env.DB,
        domain: 'entropyis',
        title: 'Entropy Is',
      }
    )
  }
  catch (e) {
    return c.json({err: "There is an error"}, 500);
  }
})

export default index
