import { NotFoundHandler } from "hono";

const handler: NotFoundHandler = (c) => {
    return c.render(<h1>404: Page Not Found</h1>)
}

export default handler