import express from "express";
import {
  newTours,
  tours,
  tour,
  updateTour,
  deleteTour,
} from "../controllers/tours.controller";
const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log("test", val);
  next();
});

router
  .get("/", tours)
  .get("/:id", tour)
  .post("/", newTours)
  .patch("/:id", updateTour)
  .delete("/:id", deleteTour);

export default router;
