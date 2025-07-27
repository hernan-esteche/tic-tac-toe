import confetti from 'canvas-confetti';
import { useState } from 'react';
import { INITIAL_BOARD, TURNS } from '../constants/constants';
import checkWinner from '../logic/checkWinner';

export function useGamerLogic() {
	const [board, setBoard] = useState(
		() => JSON.parse(localStorage.getItem('board')) || INITIAL_BOARD,
	);
	const [turn, setTurn] = useState(
		() => localStorage.getItem('turn') || TURNS.X,
	);
	const [winner, setWinner] = useState(
		() => localStorage.getItem('winner') || null,
	);

	const resetGame = () => {
		setBoard(INITIAL_BOARD);
		setTurn(TURNS.X);
		setWinner(null);
		localStorage.removeItem('board');
		localStorage.removeItem('turn');
		localStorage.removeItem('winner');
	};

	const updateBoard = (index) => {
		if (board[index] || winner) return;

		const newBoard = [...board];
		newBoard[index] = turn;
		setBoard(newBoard);

		localStorage.setItem('board', JSON.stringify(newBoard));
		localStorage.setItem('turn', turn);

		const newWinner = checkWinner(newBoard);
		if (newWinner) {
			confetti();
			setWinner(newWinner);
			localStorage.setItem('winner', newWinner);
		} else if (!newBoard.includes(null)) {
			setWinner('Empate');
			localStorage.setItem('winner', 'Empate');
		} else {
			setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
		}
	};
	return { board, turn, winner, updateBoard, resetGame };
}
