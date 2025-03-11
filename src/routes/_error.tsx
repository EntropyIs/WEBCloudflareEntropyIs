import { ErrorHandler } from "hono";

const handler: ErrorHandler = (e, c) => {
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