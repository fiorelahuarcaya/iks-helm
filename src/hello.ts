import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

// Determine the host based on an environment variable
const host = process.env.HOST || "localhost";
const port = process.env.PORT || "8080";

// Run the server!
try {
  await fastify.listen({ port: 8080, host });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
