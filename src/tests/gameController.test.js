import { gameController } from '../gameController';
import { Ship, ship } from '../shipsObjects';

describe('gameController', () => {
	const carrier = ship.createCarrier();

	beforeEach(() => {
		gameController.createGrid();
		gameController.placeShip(carrier, 0, 0, 'horizontal');
	});

	test('Ship gets hits', () => {
		gameController.makeAttack(0, 0);
		expect(gameController.getGrid()[0][0].hit).toBe(true);
	});
	test('Reject attack to the same area', () => {
		gameController.makeAttack(0, 0);
		expect(() => gameController.makeAttack(0, 0)).toThrow();
	});
});
