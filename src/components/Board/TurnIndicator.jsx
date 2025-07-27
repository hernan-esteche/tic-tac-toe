import { TURNS } from '../../constants/constants';
import Square from './Square';

const TurnIndicator = ({ turn }) => {
	return (
		<section className="flex text-white text-2xl mt-4">
			<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
			<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
		</section>
	);
};

export default TurnIndicator;
