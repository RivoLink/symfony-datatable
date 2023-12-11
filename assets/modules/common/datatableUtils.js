function calculatePageNumbers(totalItems, size) {
    var pages = Math.ceil(totalItems / size);
    return pages;
}

function toggleOrder(columnOrder) {
    if (columnOrder === "ASC") {
        return "DESC";
    } else if (columnOrder === "DESC") {
        return "ASC";
    } 
    return "ASC";
}
  
export { calculatePageNumbers, toggleOrder };