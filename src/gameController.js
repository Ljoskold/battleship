import {
	displayController,
	playerGridDiv,
	computerGridDiv,
} from './displayController.js';
import {
	shipsController,
	computerShips,
	playerShips,
} from './shipsController.js';
import cannonFireAudio from './audio/cannon_attack.mp3';

export let playerGrid = [];
export let computerGrid = [];

export const gameController = (() => {
	const gridSize = 10;

	let mySound = new Audio(cannonFireAudio);

	function createGrid(grid) {
		for (let i = 0; i < gridSize; i++) {
			grid[i] = [];
			for (let j = 0; j < gridSize; j++) {
				grid[i][j] = { ship: null, hit: false };
			}
		}
	}
	function clearGrid(grid) {
		grid = [];
	}

	function makeAttack(row, col, grid) {
		console.log('Computer ships');
		console.log(computerShips);
		if (grid[row][col].hit === false) {
			grid[row][col].hit = true;
			checkAttack(row, col, computerGrid, computerShips);
			mySound.play().catch((error) => {
				console.error('Failed to play audio:', error);
			});
			checkWin();
		} else {
			throw new Error();
		}
	}

	function makeComputerAttack() {
		const randomCoordinates = getRandomCoordinates();
		const { row, col } = randomCoordinates;
		if (!playerGrid[row][col].hit) {
			playerGrid[row][col].hit = true;
			let cell = document.querySelector(
				`[data-row="${row}"][data-col="${col}"]`
			);
			displayController.updateCellHits(playerGrid, row, col, cell);
			checkAttack(row, col, playerGrid, playerShips);
			mySound.play().catch((error) => {
				console.error('Failed to play audio:', error);
			});
			checkWin();
			return { row, col };
		} else {
			return makeComputerAttack(playerGrid);
		}
	}

	function getRandomCoordinates() {
		const row = Math.floor(Math.random() * gridSize);
		const col = Math.floor(Math.random() * gridSize);

		return { row, col };
	}

	function checkAttack(row, col, grid, ships) {
		switch (grid[row][col].ship) {
			case 'carrier':
				ships[0].hit();
				break;
			case 'battleship':
				ships[1].hit();
				break;
			case 'cruiser':
				ships[2].hit();
				break;
			case 'submarine':
				ships[3].hit();
				break;
			case 'destroyer':
				ships[4].hit();
				break;
		}
	}

	function checkWin() {
		if (playerShips.every((ship) => ship.isSunk)) {
			console.log('Computer has won!');
			return true;
		} else if (computerShips.every((ship) => ship.isSunk)) {
			console.log('You have won');
			return true;
		}
		return false;
	}

	function initiateGameWithRandomShips() {
		createGrid(playerGrid);
		createGrid(computerGrid);
		shipsController.createRandomShips(computerGrid, computerShips);
	}
	function game() {
		while (!checkWin()) {
			makeAttack(row, col, computerGrid);
			makeComputerAttack();
		}
	}

	return {
		createGrid,
		makeAttack,
		checkAttack,
		checkWin,
		getRandomCoordinates,
		initiateGameWithRandomShips,
		makeComputerAttack,
		clearGrid,
	};
})();
