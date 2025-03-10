import { Hono } from "hono"

const index = new Hono()

index.get('/', (c) => {
    return c.render(
      <div> hello world</div>,
      {
        title: 'Entropy Is',
      }
    )
})

export default index
