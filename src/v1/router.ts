import { Router } from "express";
import { versionEndpoints } from "./endpoints/version/versions.endpoints";
import { authenticate } from "./middlewares/security/authentication.middlewares";

export const routerV1 = Router();

routerV1.use(authenticate);

routerV1.use("/version", versionEndpoints);
