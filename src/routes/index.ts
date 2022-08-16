import express from "express";
import { globalErrorHandler, routeNotFound } from "../middleware/errors";
import tours from "./tours.routers";
import auth from "./auth.routes";
const router = express.Router();

router.use("/auth", auth);
router.use("/tours", tours);
// router.all("*", routeNotFound);
router.use(globalErrorHandler);

export default router;
