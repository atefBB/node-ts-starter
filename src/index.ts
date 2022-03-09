import express, { Application, json, urlencoded } from "express";

import "dotenv/config";

import "./modulesAliasConfig";

import registerRouter from "@routes/index";

const app: Application = express();

app.use(json());

app.use(urlencoded({ extended: false }));
registerRouter(app);

app.use(cors());
app.use(urlencoded({ extended: false }));
registerRouter(app);

const HOST = process.env.HOST ?? "localhost";
const PORT = process.env.PORT ?? 5100;

app.listen(PORT, () =>
    console.log(`Server listening on http://${HOST}:${PORT}`)
);
