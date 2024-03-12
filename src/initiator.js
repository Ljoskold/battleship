import './styles.css';
import './gameHandler.css';

import './displayController';
import './gameController';
import './shipsController';
import { displayController } from './displayController';
import { gameController } from './gameController';

gameController.initiateGameWithRandomShips();
displayController.initiateRenderGrid();
// gameController.game();
