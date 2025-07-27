import WinnerModal from './components/WinnerModal';
import './styles/App.css';
import Board from './components/Board/Board';
import { useGamerLogic } from './hooks/useGamerLogic';

function App() {
	const { board, turn, winner, updateBoard, resetGame } = useGamerLogic();
	return (
		<main className="h-screen flex flex-col items-center justify-center bg-gray-900">
			<h1 className="text-white text-4xl mb-4">Tic Tac Toe</h1>
			<Board
				board={board}
				updateBoard={updateBoard}
				turn={turn}
				resetGame={resetGame}
			/>
			{winner && <WinnerModal winner={winner} resetGame={resetGame} />}
		</main>
	);
}

export default App;
