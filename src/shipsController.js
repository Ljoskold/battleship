import {
	playerGridDiv,
	computerGridDiv,
	displayController,
} from './displayController';
import { playerGrid, computerGrid, gameController } from './gameController';

export class Ship {
	constructor(name, length, hp) {
		this.name = name;
		this.length = length;
		this.hp = hp;
		this.isSunk = false;
	}

	hit() {
		this.hp--;
		if (this.hp === 0) {
			this.isSunk = true;
		}
	}
	static createCarrier() {
		return new Ship('carrier', 5, 5);
	}

	static createBattleship() {
		return new Ship('battleship', 4, 4);
	}

	static createCruiser() {
		return new Ship('cruiser', 3, 3);
	}

	static createSubmarine() {
		return new Ship('submarine', 3, 3);
	}

	static createDestroyer() {
		return new Ship('destroyer', 2, 2);
	}
}

export const playerShips = [
	Ship.createCarrier(),
	Ship.createBattleship(),
	Ship.createCruiser(),
	Ship.createSubmarine(),
	Ship.createDestroyer(),
];

export const computerShips = [
	Ship.createCarrier(),
	Ship.createBattleship(),
	Ship.createCruiser(),
	Ship.createSubmarine(),
	Ship.createDestroyer(),
];

export const shipsController = (() => {
	function playerSelfShipPlacement(ship, row, col, orientation, grid) {
		if (canPlaceShip(ship, row, col, orientation, grid)) {
			placeShip(ship, row, col, orientation, grid);
			return true;
		} else {
			return false;
		}
	}

	function placeShip(shipType, row, col, orientation, grid) {
		const shipSize = shipType.length;
		for (let i = 0; i < shipSize; i++) {
			if (orientation === 'horizontal') {
				if (grid[row] && grid[row][col + i]) {
					grid[row][col + i].ship = shipType.name;
				} else {
					console.log('Invalid cell:', row, col + i);
				}
			} else if (orientation === 'vertical') {
				if (grid[row + i] && grid[row + i][col]) {
					grid[row + i][col].ship = shipType.name;
				} else {
					console.log('Invalid cell:', row + i, col);
				}
			}
		}
	}

	function canPlaceShip(ship, row, col, orientation, grid) {
		const gridSize = grid.length;
		const shipSize = ship.length;

		if (orientation === 'horizontal' && col + shipSize > gridSize) {
			return false;
		} else if (orientation === 'vertical' && row + shipSize > gridSize) {
			return false;
		}

		for (let i = -1; i <= shipSize; i++) {
			for (let j = -1; j <= 1; j++) {
				if (
					orientation === 'horizontal' &&
					grid[row + j] &&
					grid[row + j][col + i] &&
					grid[row + j][col + i].ship !== null
				) {
					return false;
				} else if (
					orientation === 'vertical' &&
					grid[row + i] &&
					grid[row + i][col + j] &&
					grid[row + i][col + j].ship !== null
				) {
					return false;
				}
			}
		}

		return true;
	}

	function createRandomShips(grid, ships) {
		ships.forEach((ship) => {
			let random;
			let placed = false;
			while (!placed) {
				random = gameController.getRandomCoordinates();
				const orientation =
					Math.random() < 0.5 ? 'horizontal' : 'vertical';
				if (
					canPlaceShip(
						ship,
						random.row,
						random.col,
						orientation,
						grid
					)
				) {
					placeShip(ship, random.row, random.col, orientation, grid);
					placed = true;
				}
			}
		});
	}
	let radnomizeBtnClicked = false;

	function getRandomizeStatus() {
		return radnomizeBtnClicked;
	}

	const randomShipsBtn = document.querySelector('#random-ships-button');
	randomShipsBtn.addEventListener('click', () => {
		playerGrid.innerHTML = '';
		gameController.createGrid(playerGrid);
		createRandomShips(playerGrid, playerShips);
		displayController.renderGrid(playerGrid, 'player-grid');
		radnomizeBtnClicked = true;
	});

	let dragged = null;
	let draggedElement = null;
	let shipDragged = 0;

	const draggables = document.querySelectorAll('.draggable');

	function getDraggables() {
		if (shipDragged < 5) {
			return false;
		}
		return true;
	}

	draggables.forEach((draggable) => {
		draggable.addEventListener('dragstart', (e) => {
			draggedElement = e.target;

			if (e.target.classList.contains('draggable')) {
				switch (true) {
					case e.target.classList.contains('ship-carrier'):
						dragged = playerShips[0];
						break;
					case e.target.classList.contains('ship-battleship'):
						dragged = playerShips[1];
						break;
					case e.target.classList.contains('ship-cruiser'):
						dragged = playerShips[2];
						break;
					case e.target.classList.contains('ship-submarine'):
						dragged = playerShips[3];
						break;
					case e.target.classList.contains('ship-destroyer'):
						dragged = playerShips[4];
						break;
				}
			}
		});
	});

	const playerGridDiv = document.querySelector('.player-grid');
	const computerGridDiv = document.querySelector('.computer-grid');

	playerGridDiv.addEventListener('dragover', (e) => {
		e.preventDefault();
		const cell = e.target.closest('.cell');
		if (cell) {
			const row = parseInt(cell.dataset.row);
			const col = parseInt(cell.dataset.col);
			const orientation = document.querySelector('.chosen').id;
			const shipLength = dragged.length;

			document.querySelectorAll('.cell').forEach((c) => {
				c.style.border = '';
			});

			let validPlacement = canPlaceShip(
				dragged,
				row,
				col,
				orientation,
				playerGrid
			);

			if (validPlacement) {
				if (orientation === 'vertical') {
					for (let i = 0; i < shipLength; i++) {
						const nextCell = document.querySelector(
							`[data-row="${row + i}"][data-col="${col}"]`
						);
						if (nextCell) {
							nextCell.style.border = '2px solid green';
						}
					}
				} else {
					for (let i = 0; i < shipLength; i++) {
						const nextCell = document.querySelector(
							`[data-row="${row}"][data-col="${col + i}"]`
						);
						if (nextCell) {
							nextCell.style.border = '2px solid green';
						}
					}
				}
			} else {
				if (orientation === 'vertical') {
					for (let i = 0; i < shipLength; i++) {
						const nextCell = document.querySelector(
							`[data-row="${row + i}"][data-col="${col}"]`
						);
						if (nextCell) {
							nextCell.style.border = '2px solid red';
						}
					}
				} else {
					for (let i = 0; i < shipLength; i++) {
						const nextCell = document.querySelector(
							`[data-row="${row}"][data-col="${col + i}"]`
						);
						if (nextCell) {
							nextCell.style.border = '2px solid red';
						}
					}
				}
			}
		}
	});

	playerGridDiv.addEventListener('dragleave', (e) => {
		const cell = e.target.closest('.cell');
		if (cell) {
			cell.style.border = '';
		}
	});

	playerGridDiv.addEventListener('drop', (e) => {
		e.preventDefault();
		let orientation = document.querySelector('.chosen').id;
		const cell = e.target.closest('.cell');
		if (cell) {
			if (
				playerSelfShipPlacement(
					dragged,
					parseInt(cell.dataset.row),
					parseInt(cell.dataset.col),
					orientation,
					playerGrid
				)
			) {
				shipDragged++;
				draggedElement.parentNode.removeChild(draggedElement);
			}
		}

		displayController.renderGrid(playerGrid, 'player-grid');
	});

	const orientationBtns = document.querySelectorAll('.orientation-buttons');

	orientationBtns.forEach((button) => {
		button.addEventListener('click', () => {
			orientationBtns.forEach((btn) => btn.classList.remove('chosen'));
			button.classList.add('chosen');
		});
	});

	return { createRandomShips, getDraggables, getRandomizeStatus };
})();
