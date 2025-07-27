const WinnerModal = ({ winner, resetGame }) => {
	return (
		<div className="fixed inset-0 bg-black/70 flex items-center justify-center">
			<div className="bg-white p-6 rounded-lg shadow-lg text-center">
				<h2 className="text-2xl font-bold mb-2">
					{winner === 'Empate' ? '¡Empate!' : `Ganó ${winner}`}
				</h2>
				<button
					type="button"
					className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
					onClick={resetGame}
				>
					Volver a jugar
				</button>
			</div>
		</div>
	);
};

export default WinnerModal;
