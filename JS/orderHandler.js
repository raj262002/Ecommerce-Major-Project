export function buyItem(item) {
    localStorage.setItem('selectedItem', JSON.stringify(item));
}