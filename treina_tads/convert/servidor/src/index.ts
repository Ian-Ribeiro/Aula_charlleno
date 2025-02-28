import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { cors } from 'hono/cors';


const app = new Hono();

// Cria um Midleware para servir arquivos estáticos
app.use("/api/*", cors());

// Serve os arquivos estáticos da pasta jsons
app.use("/api/json/*", serveStatic({root: "./json"}));

// Pega o arquivo moedas.json e retorna como resposta JSON
app.get("/api/moedas", (c) => {
  return c.json(require("./jsons/moedas.json"))
})

app.get("/api/nomes", (c) => {
  return c.json(require("./jsons/nomes.json"))
})

app.get("api/*",(c) => {
  return c.html("<h1> Api do Gordin do Job! vulgo José Vitor </h1>")
})
export default {
  port: 8000,
  fetch: app.fetch
}
