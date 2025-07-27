import { WINNER_COMBINATIONS } from '../constants/constants';

const checkWinner = (newBoard) => {
	for (const combination of WINNER_COMBINATIONS) {
		const [a, b, c] = combination;
		if (
			newBoard[a] &&
			newBoard[a] === newBoard[b] &&
			newBoard[a] === newBoard[c]
		) {
			return newBoard[a];
		}
	}
	return null;
};

export default checkWinner;
