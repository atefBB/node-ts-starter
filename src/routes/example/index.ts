import express from "express";

import { exampleRouter } from "./exampleRouter";

export const router = express.Router().use(exampleRouter);
