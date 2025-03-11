import {} from "hono"
import { jsxRenderer } from "hono/jsx-renderer";
import { Footer } from "../componants/footer";
import { Context } from 'hono/jsx';

export const renderer = jsxRenderer(({children, db, domain, title}) => {
    return (
        <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel='icon' type="image/png" href="favicon.ico" />
                <title>{title}</title>
            </head>
            <body>
                {children}
                <Footer props={db, domain} />
            </body>
        </html>
    )
})