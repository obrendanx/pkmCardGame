const errorHandler = (error, request, response, next) => {
    if (error.name === 'ValidationError') {
      response.status(400).json({ message: error.message });
    } else if (error.name === 'MongoError') {
      response.status(409).json({ message: error.message });
    } else {
      console.error(error);
      response.status(500).json({ message: 'An unexpected error occurred' });
    }
  };
  
  module.exports = errorHandler;