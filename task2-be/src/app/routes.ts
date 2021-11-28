import express, { Express, json } from "express";
import cors from "cors";

import morgan from "morgan";

import userController from "../controllers/users.controller";

export const routers = (app: Express) => {
    app.use(json());
    app.use(cors({ origin: "*", credentials: true }));
    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    //main routers

    app.use("/api/user", userController);
};
