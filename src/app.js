import {fastify} from "fastify"
import { getAuthenticate } from "./middleware/authenticate.js"
import fastifyAuth from "@fastify/auth"

export const build = (opts = {}) => {
    const app = fastify(opts)
    app.decorate('authenticate', getAuthenticate)
    app.register(fastifyAuth)  // Plugin de gestion d'authentifications (oui, au pluriel)
    app.register(import("./plugins/jwt.js"))
    app.register(import("./routes/routes.js"))

    return app
}