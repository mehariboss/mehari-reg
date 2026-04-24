let config;

export function initTable(options) {
  if (!options || !options.columns) {
    throw new Error("Columns required");
  }
  config = options;
}

export function process(data, options = {}) {
  if (!config) {
    throw new Error("Table not initialized");
  }

  let result = [...data];

  if (options.sort) {
    const { field, direction = "asc" } = options.sort;

    result.sort((a, b) => {
      if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
      if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  return result;
}