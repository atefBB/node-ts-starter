import express from "express";

import { indexController } from "@controllers/index";

const exampleRouter = express.Router();

/**
 * @swagger
 * /exampleRouter:
 *   get:
 *     summary: Returns a message
 *     tags: [ExampleTags]
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 *
 */
exampleRouter.route("/exampleRouter").get(indexController);

export { exampleRouter };
