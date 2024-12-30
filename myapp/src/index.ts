import { Hono } from "hono";

const app = new Hono();

async function authMiddleware(c: any, next: any) {
    if (c.req.header("Authorization")) {
        const initTime = new Date().getTime();
        await next();
        const totaltime = (new Date().getTime() - initTime) / 1000;
        console.log("total time is " + totaltime);
    } else {
        return c.text("dont have access");
    }
}

app.use(authMiddleware);

app.post("/", authMiddleware, async (c) => {
    //body, headers, query, middleware
    const body = await c.req.json();
    console.log(body);
    console.log(c.req.header("Authorization"));
    console.log(c.req.query("param"));

    return c.text("Hello Hono!");
});

app.get("/", (c) => {
    //body, headers, query, middleware
    // const body = await c.req.json();
    // console.log(body);
    // console.log(c.req.header("Authorization"));
    // console.log(c.req.query("param"));

    return c.text("Hello Hono!");
});

export default app;
