import { Router } from "express";

import { indexController } from "@controllers/index";

const indexRouter = Router();

indexRouter.get("/", indexController);

export default indexRouter;
