"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tours_controller_1 = require("../controllers/tours.controller");
const router = express_1.default.Router();
router.param("id", (req, res, next, val) => {
    console.log("test", val);
    next();
});
router
    .get("/", tours_controller_1.tours)
    .get("/:id", tours_controller_1.tour)
    .post("/", tours_controller_1.newTours)
    .patch("/:id", tours_controller_1.updateTour)
    .delete("/:id", tours_controller_1.deleteTour);
exports.default = router;
