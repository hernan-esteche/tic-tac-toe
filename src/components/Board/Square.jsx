const Square = ({ children, isSelected, updateBoard, index }) => {
	const squareClass = isSelected ? 'bg-blue-500 ' : 'bg-gray-700 ';
	return (
		<button
			type="button"
			className={`size-24 flex items-center justify-center text-white text-2xl ${squareClass}`}
			onClick={() => updateBoard(index)}
		>
			{children}
		</button>
	);
};

export default Square;
