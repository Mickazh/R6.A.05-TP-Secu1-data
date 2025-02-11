const {build} = await import( "./app.js")

export const app = build({logger: true})

const start = async () => {
    try {
        await app.listen({port: 4000})
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
start()