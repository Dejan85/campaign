import toursQuery from "../queries/tours";
import { nextHandler, tryCatch } from "../utils";

// new tours
export const newTours = tryCatch(async (req, res, next) => {
  const { name, duration, difficulty } = req.body;
  const rows = await toursQuery
    .newTour({
      name,
      duration,
      difficulty,
    })
    .catch((err) => next(err));

  if (!!rows) {
    return res.status(201).json({
      message: "The tour create successfully",
      data: { name, duration, difficulty },
    });
  }

  throw {
    statusCode: 400,
    message: `You cant create tour`,
  };
});

// get all tours
export const tours = tryCatch(async (req, res, next) => {
  const rows = await toursQuery.tours().catch((err) => next(err));

  if (!!rows.length) {
    return res.status(200).json({
      message: "You get all tours successfully",
      data: rows,
    });
  }

  throw {
    statusCode: 404,
    message: "There is no tours",
    data: [],
  };
});

// get tour
export const tour = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  const tour = await toursQuery.tour(id).catch((err) => next(err));
  if (!!tour?.length) {
    return res.status(200).json({
      message: "You find tour successfully",
      data: tour,
    });
  }

  throw {
    statusCode: 404,
    message: `You cant find any tour with id ${id}`,
    data: [],
  };
});

// update tour
export const updateTour = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  const { name, duration, difficulty } = req.body;
  const response = await toursQuery
    .updateTour({
      id,
      name,
      duration,
      difficulty,
    })
    .catch((err) => next(err));

  if (!!response?.affectedRows) {
    return res.status(201).json({
      message: "You updated tour successfully",
      data: { name, duration, difficulty },
    });
  }

  throw {
    statusCode: 404,
    message: `You cant find any tour with that id ${id}`,
  };
});

// delete tour
export const deleteTour = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  const response = await toursQuery.deleteTour(id).catch((err) => next(err));

  if (!!response.affectedRows) {
    return res.status(204).json({
      message: `You successfully deleted tour with id ${id}`,
      data: null,
    });
  }

  throw {
    statusCode: 404,
    message: `You cant find any tour with that ${id}`,
  };
});
