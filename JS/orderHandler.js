export function buyItem(item) {
    localStorage.setItem('selectedItem', JSON.stringify(item));
    window.location.href = 'order.html';
}