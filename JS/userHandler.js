export function userAdd(user) {
    localStorage.setItem('user', JSON.stringify(user));
}