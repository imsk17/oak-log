import { Application, Router } from "../deps.ts";
import { New as logger } from "../mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (context) => (context.response.body = "Hello, World!"));

app.use(
  logger({
    format: "[${time} ${ip}] ${method} ${path} ${status}\n",
  }),
);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
