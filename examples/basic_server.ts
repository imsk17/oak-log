import { Application } from "oak";
import { New } from "../mod.ts";

const app = new Application();

app.use(New({
  output: Deno.stdout,
}));

app.listen({ port: 8000 });
