import { Router } from "express";
import { ErrandController } from "../controllers/errands.controller";

export const ErrandRoutes = () => {
    const app = Router({
        mergeParams: true
    })
    app.post("/create-recado/:userId",  new ErrandController().criarRecado);
   


    return app
}