import fastifyJwt from "@fastify/jwt";
import fp from "fastify-plugin";
import { readFileSync } from "fs";

export default fp(async function (app, opts) {
  app.register(fastifyJwt, {
    secret: { public: readFileSync("./.ssl/public.key") },
    verify: {
      algorithms: ["ES256"],
    },
  });
});
