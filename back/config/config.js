import { json, urlencoded } from "express";
import morgan from "morgan";

const configExpress = (app) => {
    app.use(json());
    app.use(morgan("dev"));
    app.use(urlencoded({extended: false}));
}

export default configExpress;
