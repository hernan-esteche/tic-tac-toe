// Constants for the game
// TURNS represents the two players in the game
// INITIAL_BOARD is the initial state of the Tic Tac Toe board, filled with null values
// WINNER_COMBINATIONS contains all possible winning combinations

export const TURNS = {
	X: '❌',
	O: '⭕',
};

export const INITIAL_BOARD = Array(9).fill(null);

export const WINNER_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
