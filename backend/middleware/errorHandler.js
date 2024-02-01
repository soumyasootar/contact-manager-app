const {
  VALIDATION_ERROR,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  SERVER_ERROR,
} = require("../constant");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case VALIDATION_ERROR:
      res.json({
        title: "VALIDATION ERROR",
        message: err.message,
        stackTrack: err.stack,
      });

      break;
    case NOT_FOUND:
      res.json({
        title: "NOT FOUND ERROR",
        message: err.message,
        stackTrack: err.stack,
      });

      break;
    case UNAUTHORIZED:
      res.json({
        title: "UNAUTHORIZED ERROR",
        message: err.message,
        stackTrack: err.stack,
      });
      break;
    case FORBIDDEN:
      res.json({
        title: "FORBIDDEN ERROR",
        message: err.message,
        stackTrack: err.stack,
      });
      break;
    case SERVER_ERROR:
      res.json({
        title: "SERVER ERROR",
        message: err.message,
        stackTrack: err.stack,
      });
      break;

    default:
      break;
  }
  res.json({ message: err.message, stackTrack: err.stack });
};

module.exports = errorHandler;
