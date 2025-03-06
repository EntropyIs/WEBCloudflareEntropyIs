interface ContextRenderer {
    (
        conent: string | Promise<string>,
        props: { title: string },
    );
}

interface Env {
    Variables: {

    };
    Bindings: {
        DB: D1Database;
    }
}

