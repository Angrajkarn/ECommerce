const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);
  
    // Check if the error has a status code
    const statusCode = err.statusCode || 500;
  
    // Send a response with the error message and status code
    res.status(statusCode).json({
      status: 'error',
      message: err.message || 'Internal Server Error',
      stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
  };
  
  module.exports = errorMiddleware;
  