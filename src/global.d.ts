import {} from 'hono'

declare module 'hono' {
    interface ContextRenderer {
        (
            conent: string | Promise<string>,
            props: { title: string },
        ): Response | Promise<Response>
    }

    interface Env {
        Variables: {

        };
        Bindings: {
            DB: D1Database;
        }
    }
}