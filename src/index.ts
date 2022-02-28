import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import "module-alias/register";
import "dotenv/config";

import indexRouter from "@routes/index";

const app: express.Application = express();

app.use(json());

app.use("/", indexRouter);

app.use(
    (
        error: Error,
        // @ts-ignore
        request: Request,
        response: Response,
        // @ts-ignore
        next: NextFunction
    ) => {
        response.status(500).json({ message: error.message });
    }
);

const HOST = process.env.HOST ?? "localhost";
const PORT = process.env.PORT ?? 5100;

app.listen(PORT, () =>
    console.log(`Server listening on http://${HOST}:${PORT}`)
);
