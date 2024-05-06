import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";

import { authRouter } from "./routes/auth.route";
import { dashboardRouter } from "./routes/dashboard.route";
import { pagesRouter } from "./routes/pages.route";
import { notesRouter } from "./routes/dashboard/notes.route";

import "@kitajs/html/register";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .use(dashboardRouter)
  .use(authRouter)
  .use(pagesRouter)
  .use(notesRouter)
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
