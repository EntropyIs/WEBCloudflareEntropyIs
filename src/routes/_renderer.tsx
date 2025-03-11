import {} from "hono"
import { jsxRenderer } from "hono/jsx-renderer"
import { Footer, FooterProps } from "../componants/footer"

export const renderer = jsxRenderer(({children, db, domain, title}) => {
    const footer_props : FooterProps = { db, domain }
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
                <Footer props={footer_props} />
            </body>
        </html>
    )
})