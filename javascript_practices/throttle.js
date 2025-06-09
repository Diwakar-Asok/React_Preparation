// throttle helper function

// Limit function execution to once at a give interval of time.
const throttle = (func, limit) => {
  let inThrottle = false;

  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
