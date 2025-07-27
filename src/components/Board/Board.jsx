import BoardGrid from './BoardGrid';
import TurnIndicator from './TurnIndicator';

const Board = ({ board, updateBoard, turn, resetGame }) => {
	return (
		<main className="flex flex-col items-center justify-center">
			<h2 className="text-white text-lg mb-4">Turno de: {turn}</h2>

			<BoardGrid board={board} updateBoard={updateBoard} />
			<TurnIndicator turn={turn} />

			<button
				type="button"
				className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
				onClick={resetGame}
			>
				Volver a jugar
			</button>
		</main>
	);
};

export default Board;
