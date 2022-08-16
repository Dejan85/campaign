"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errors_1 = require("../middleware/errors");
const tours_routers_1 = __importDefault(require("./tours.routers"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const router = express_1.default.Router();
router.use("/auth", auth_routes_1.default);
router.use("/tours", tours_routers_1.default);
// router.all("*", routeNotFound);
router.use(errors_1.globalErrorHandler);
exports.default = router;
