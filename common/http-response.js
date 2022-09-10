const httpStatus = require("http-status-codes").StatusCodes;

responseBody = (status, data, message = null) => {
  return {
    status: status,
    data: data,
    message: message,
  };
};

const httpResponse = {
  errorHandler(response, error, message = "Error occured") {
    response
      .status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR)
      .send(
        responseBody(
          "error",
          error.data ? error.data : null,
          error.message || error
        )
      );
  },

  successHandler(response, data, message) {
    response.status(httpStatus.OK).send(responseBody("success", data, message));
  },
  unAuthorized(response, error) {
    response
      .status(error.statusCode || httpStatus.UNAUTHORIZED)
      .send(responseBody("unauthorized", null, error.message || error));
  },
};

module.exports = httpResponse;
