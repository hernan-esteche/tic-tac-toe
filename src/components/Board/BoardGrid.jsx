import Square from './Square';

const BoardGrid = ({ board, updateBoard }) => {
	return (
		<div className="grid grid-cols-3 gap-2">
			{board.map((square, index) => (
				<Square
					key={`square-${index}-${board[index]}`}
					index={index}
					updateBoard={updateBoard}
				>
					{square}
				</Square>
			))}
		</div>
	);
};

export default BoardGrid;
