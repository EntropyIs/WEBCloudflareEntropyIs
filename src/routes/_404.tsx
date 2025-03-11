import { NotFoundHandler } from "hono";

const handler: NotFoundHandler = (c) => {
    return c.render(
        <h1>404: Page Not Found</h1>,
        {
            db: c.env.DB,
            domain: 'entropyis',
            title: '404: Page Not Found CUSTOM',
        }
    )
}

export default handler