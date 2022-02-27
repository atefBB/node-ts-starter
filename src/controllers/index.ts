import { RequestHandler } from "express";

// @ts-ignore
export const indexController: RequestHandler = (request, response) => {
    response.send("Hola!");
};
