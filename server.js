import { createSiteApp } from "./app.js";

export { createSiteApp };

const args = process.argv.slice(2);
const cliPort =
  args.find((arg) => /^\d+$/.test(arg)) ||
  (args.includes("--port") ? args[args.indexOf("--port") + 1] : null);

// Em painéis como Hostinger (lsnode/Passenger), process.env.PORT pode ser numérico ou socket gerenciado
const PORT = process.env.PORT || (cliPort ? Number(cliPort) : 3008);

const app = createSiteApp();

if (process.env.CRIATIVOOS_NO_LISTEN !== "1") {
  app.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`CRIATIVOOS | SITE OFICIAL & APRESENTAÇÕES NÍVEL ÔMEGA`);
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
    console.log(`======================================================\n`);
  });
}

export default app;
