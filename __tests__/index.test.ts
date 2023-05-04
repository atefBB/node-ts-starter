import { HOST, PORT } from "@root";
import request from "supertest";

describe("app", () => {
    it("should return 200 OK status", async () => {
        const response = await request(`http://${HOST}:${PORT}`).get("/");
        expect(response.status).toBe(200);
    });
});
