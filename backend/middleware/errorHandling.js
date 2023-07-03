const errorHandler = (error, request, response, next) => {
  if (error.name === 'ValidationError') {
    response.status(400).json({ message: error.message });
  } else if (error.name === 'MongoError' && error.code === 11000) {
    const duplicateField = Object.keys(error.keyValue)[0];
    const errorMessage = `The ${duplicateField} is already taken. Please choose a different one.`;
    response.status(400).json({ error: errorMessage });
  } else {
    console.error(error);
    response.status(500).json({ message: 'An unexpected error occurred' });
  }
};

module.exports = errorHandler;