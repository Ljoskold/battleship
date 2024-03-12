import { ship } from 'battleship/src/shipsObjects.js';

describe('Ship object', () => {
	let carrier;
	beforeEach(() => {
		carrier = ship.createCarrier();
	});

	test('Ship is destroyed', () => {
		for (let i = 0; i < 5; i++) {
			carrier.hit();
		}
		expect(carrier.isSunk).toBe(true);
	});
	test('get hits', () => {
		carrier.hit();
		expect(carrier.hp).toBe(4);
	});
	test('show correct name', () => {
		expect(carrier.name).toBe('carrier');
	});
});
