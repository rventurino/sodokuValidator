function validSolution(board) {
  let helperArray = [];
  //iterate through all arrays
  for (let i = 0; i < 9; i++) {
    helperArray = [];
    for (let j = 0; j < 9; j++) {
      if (helperArray.includes(board[i][j])) {
        return false;
      } else {
        helperArray.push(board[i][j]);
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    helperArray = [];
    for (let j = 0; j < 9; j++) {
      if (helperArray.includes(board[j][i])) {
        return false;
      } else {
        helperArray.push(board[j][i]);
      }
    }
  }

  //Check subgrids
  //iterate through 9 grids
  for (let i = 0; i < 9; i++) {
    helperArray = [];
    //iterate through three rows
    for (let j = 0; j < 3; j++) {
      //iterate through each row
      for (let k = 0; k < 3; k++) {
        if (helperArray.includes(board[j][k])) {
          return false;
        } else {
          helperArray.push(board[j][k]);
        }
      }
    }
  }
  return true;
}
console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
