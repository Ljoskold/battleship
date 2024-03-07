import { ship, Ship } from './shipsObjects.js';

export const gameController = (() => {
	const gridSize = 10;
	const grid = [];
	let allShipsDown = false;
	const ships = [];

	function createGrid() {
		for (let i = 0; i < gridSize; i++) {
			grid[i] = [];
			for (let j = 0; j < gridSize; j++) {
				grid[i][j] = { ship: null, hit: false };
			}
		}
	}

	function getGrid() {
		return grid;
	}

	function placeShip(ship, row, col, orientation) {
		if (orientation === 'horizontal') {
			for (let i = 0; i < ship.length; i++) {
				grid[row][col + i].ship = ship.name;
			}
		} else {
			for (let i = 0; i < ship.length; i++) {
				grid[row + i][col].ship = ship.name;
			}
		}
		ships.push(ship);
	}

	function makeAttack(row, col) {
		if (grid[row][col].hit === false) {
			grid[row][col].hit = true;
			checkAttack(row, col);
		} else {
			throw new Error();
		}
	}

	function checkAttack(row, col) {
		switch (grid[row][col].ship) {
			case 'carrier':
				carrier.hit();
				break;
			case 'battleship':
				battleship.hit();
				break;
			case 'cruiser':
				cruiser.hit();
				break;
			case 'submarine':
				submarine.hit();
				break;
			case 'destroyer':
				destroyer.hit();
				break;
		}
		checkWin();
	}

	function checkWin() {
		if (ships.every((ship) => ship.isSunk)) {
			allShipsDown = true;
		}
		return allShipsDown;
	}

	const carrier = ship.createCarrier();
	const battleship = ship.createBattleship();
	const cruiser = ship.createCruiser();
	const submarine = ship.createSubmarine();
	const destroyer = ship.createDestroyer();

	// createGrid();
	// placeShip(carrier, 0, 0, 'horizontal');
	// makeAttack(0, 0);

	return {
		createGrid,
		placeShip,
		makeAttack,
		checkAttack,
		checkWin,
		getGrid,
	};
})();
