function isSafe(board, row, col, num) {
	// Check the row
	for (let x = 0; x <= 8; x++) {
		if (board[row][x] == num) {
			return false;
		}
	}
	// Check the column
	for (let x = 0; x <= 8; x++) {
		if (board[x][col] == num) {
			return false;
		}
	}
	// Check the 3x3 box
	let startRow = row - (row % 3);
	let startCol = col - (col % 3);
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[i + startRow][j + startCol] == num) {
				return false;
			}
		}
	}
	return true;
}

function findEmpty(board) {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] == 0) {
				return [i, j];
			}
		}
	}
	return [-1, -1];
}

function solveSudoku(board) {
	let emptySpot = findEmpty(board);
	let row = emptySpot[0];
	let col = emptySpot[1];

	// Base case: If no empty spot, the board is solved
	if (row == -1) {
		return true;
	}

	for (let num = 1; num <= 9; num++) {
		if (isSafe(board, row, col, num)) {
			board[row][col] = num;
			if (solveSudoku(board)) {
				return true;
			}
			board[row][col] = 0; // undo the move
		}
	}
	return false; // trigger backtracking
}

window.onload = function () {
	// Add input event listener to each cell
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			let cell = document.getElementById(`cell-${i}-${j}`);
			if (cell) {
				cell.addEventListener('input', function () {
					let value = parseInt(cell.value, 10);

					// Check for numbers less than 1 or greater than 9
					if (value < 1 || value > 9) {
						// If an invalid number is found, clear the input and show an alert
						cell.value = '';
						alert('Only numbers between 1 and 9 are allowed');
						return;
					}

					// Check for duplicates in the current row and column
					for (let k = 0; k < 9; k++) {
						if (
							(k != j &&
								document.getElementById(`cell-${i}-${k}`).value ==
									cell.value) ||
							(k != i &&
								document.getElementById(`cell-${k}-${j}`).value == cell.value)
						) {
							// If a duplicate is found, clear the input and show an alert
							cell.value = '';
							alert(
								'Negatives and duplicate numbers in the same row or column are not allowed'
							);
							return;
						}
					}
				});
			}
		}
	}

	document
		.getElementById('solve-button')
		.addEventListener('click', function () {
			// Read board state from inputs
			let board = [];
			for (let i = 0; i < 9; i++) {
				let row = [];
				for (let j = 0; j < 9; j++) {
					let cell = document.getElementById(`cell-${i}-${j}`);
					let value = cell ? cell.value : '';
					row.push(value ? parseInt(value, 10) : 0);
				}
				board.push(row);
			}

			// Solve the board
			if (solveSudoku(board)) {
				// Update inputs with solved board state
				for (let i = 0; i < 9; i++) {
					for (let j = 0; j < 9; j++) {
						let cell = document.getElementById(`cell-${i}-${j}`);
						if (cell) {
							cell.value = board[i][j];
						}
					}
				}
			} else {
				alert('This puzzle cannot be solved');
			}
		});
};
