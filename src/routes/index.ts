import { Router } from "express";
import { health } from "../features/health/health.controller.ts";

const rootRouter = Router();


rootRouter.get('/health', health);

export default rootRouter;