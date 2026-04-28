let data = [];

export function insert(item) {
    if (!item) {
        throw new Error("Item is required");
    }
    data.push(item);
}

export function getAll() {
    return data;
}