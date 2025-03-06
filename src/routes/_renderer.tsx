import { jsxRenderer, useRequestContext } from "hono/jsx-renderer";
import { Footer } from "../componants/footer";

export default jsxRenderer((children, title) => {
    return (
        <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
            </head>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    )
})