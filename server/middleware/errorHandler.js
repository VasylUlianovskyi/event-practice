module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  const status = err.status ?? 500;
  const title = err.message ?? 'Server Error';
  res.status(status).send({ errors: [{ status, title }] });
};
