import { getAuthHandler, getHomeHandler } from "../controllers/handler.js";
import fastifyAuth from "@fastify/auth";
import { getAuthenticate } from "../middleware/authenticate.js";

export default async (app, opts) => {
  app.after(function () {
    app.route({
      method: "GET",
      url: "/home",
      handler: getHomeHandler,
    });

    app.route({
      method: "GET",
      url: "/auth",
      preHandler: app.auth([app.authenticate]),
      handler: getAuthHandler,
    });
  });
};
