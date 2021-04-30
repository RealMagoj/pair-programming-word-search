const transpose = function(matrix) {
    const columns = matrix[0].length, rows = matrix.length;
    const grid = [];
    for (let x = 0; x < columns; x++) {
        const innerGrid = [];
        for (let y = 0; y < rows; y++) {
        innerGrid.push(matrix[y][x]);
        }
        grid.push(innerGrid);
    }
    return grid;
}

const wordSearch = (letters, word) => {
    if (letters.length > 0) {
        const horizontalJoin = letters.map(ls => ls.join(''))
        const verticalJoin = transpose(letters).map(ls => ls.join(''));
        for (l of horizontalJoin) {
            if (l.includes(word)) return true
        }
        for (l of verticalJoin) {
            if (l.includes(word)) return true
        }
    }
    return false;
}

module.exports = wordSearch