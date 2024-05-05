// Define a middleware function to log time
const Time = (req, res, next) => {
  console.log('Time:', new Date());
  next(); // Call next to pass control to the next middleware function
};

  // Exports
  module.exports = Time