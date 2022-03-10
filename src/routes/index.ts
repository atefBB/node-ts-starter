import path from "path";
import { Application } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import { PORT, HOST } from "@root";

import { router } from "@routes/example";

export default (app: Application) => {
    const options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Start Node API",
                version: "1.0.0",
                description:
                    "This page is dedicated to the route list in the application",
            },
            servers: [
                {
                    url: `http://${HOST}:${PORT}/api/v1`,
                },
            ],
        },
        apis: [
            `${__dirname}/*/*${path.extname(path.basename(__filename))}`,
            `${__dirname}/*/*/*${path.extname(path.basename(__filename))}`,
        ],
    };

    const specs = swaggerJsDoc(options);

    app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(specs));

    app.get("/", (_, res) => {
        res.json({ message: "API Running ! " });
    });

    app.use("/api/v1", [router]);
};
