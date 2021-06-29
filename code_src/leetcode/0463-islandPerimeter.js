/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let height = grid.length
    let width = grid[0].length
    let res = 0

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if(grid[i][j] === 1) {
                res = res + 4
                if(i > 0 && grid[i - 1][j]) res--
                if(i < height - 1 && grid[i + 1][j]) res--
                if(j > 0 && grid[i][j - 1]) res--
                if(j < width - 1 && grid[i][j + 1]) res--
            }
        }
    }
    return res
};