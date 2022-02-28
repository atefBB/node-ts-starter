import { RequestHandler, Response } from "express";

export const indexController: RequestHandler = (_, response: Response) => {
    response.send("Hola!");
};
