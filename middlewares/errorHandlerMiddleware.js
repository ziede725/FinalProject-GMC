const errorHandelerMiddleware = (err, req, res, next) => {
  //set status code

  const errorStatusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(errorStatusCode);
  res.json({
    status: errorStatusCode,
    success: false,
    message: err.message,
    err,
  });
};

module.exports = { errorHandelerMiddleware };
