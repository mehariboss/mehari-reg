export function createLogger(options = {}) {
  const { prefix = "LOG" } = options;

  return {
    log(message) {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [${prefix}] ${message}`);
    }
  };
}