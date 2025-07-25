import { Hono, Next } from 'hono'
import { Context } from 'hono/jsx';

const app = new Hono();

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  } else {
    return c.text("You dont have acces");
  }
})

app.get("/", async (c) => {
    const body = await c.req.json();
    console.log(body);
    console.log(c.req.header("Authorization"));
    console.log(c.req.query("param"));
    return c.json({
        message: "hello",
    });
});

export default app;
