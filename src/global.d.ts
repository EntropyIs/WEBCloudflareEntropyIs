import {} from 'hono'

declare module 'hono' {
    interface ContextRenderer {
        (
            conent: string | Promise<string>,
            props: {
                  db: D1Database
                , domain: string
                , title: string
            }
        ): Response | Promise<Response>
    }
}

export type Bindings = {
    DB: D1Database;
}