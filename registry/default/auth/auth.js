let users = [];

export function initAuthentication(options) {
    if (!options || !options.users) {
        throw new Error("Users are required");
    }
    users = options.users;
}

export function login(username, password) {
    const user = users.find(
        (u) => u.username === username && u.password === password
    );
    return user ? username + "-token" : null;
}