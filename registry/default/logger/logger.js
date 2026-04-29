export function createLogger(options = {}) {
  const { prefix = "LOG" } = options;

  return {
    log(message) {
      console.log(`[${prefix}] ${message}`);
    }
  };
}