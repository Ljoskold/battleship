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
import victory from './audio/victory.mp3';
import defeat from './audio/defeat.mp3';

export let playerGrid = [];
export let computerGrid = [];

export const gameController = (() => {
	const gridSize = 10;

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
		if (grid[row][col].hit) {
			return;
		}

		grid[row][col].hit = true;
		checkAttack(row, col, computerGrid, computerShips);
	}

	function makeComputerAttack() {
		let row, col;
		do {
			const randomCoordinates = getRandomCoordinates();
			row = randomCoordinates.row;
			col = randomCoordinates.col;
		} while (playerGrid[row][col].hit);

		playerGrid[row][col].hit = true;
		let cell = document.querySelector(
			`[data-row="${row}"][data-col="${col}"]`
		);
		displayController.updateCellHits(playerGrid, row, col, cell);
		checkAttack(row, col, playerGrid, playerShips);

		return { row, col };
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

	let victorySound = new Audio(victory);
	let defeatSound = new Audio(defeat);

	function checkWin() {
		if (playerShips.every((ship) => ship.isSunk)) {
			displayController.gameOver('You have lost :(');
			defeatSound.play();
			playerGridDiv.classList.remove('glow');
			computerGridDiv.classList.remove('glow');
			return true;
		} else if (computerShips.every((ship) => ship.isSunk)) {
			displayController.gameOver('You have won :)');
			victorySound.play();
			computerGridDiv.classList.remove('glow');
			playerGridDiv.classList.remove('glow');
			return true;
		}
		return false;
	}

	function initiateGameWithRandomShips() {
		createGrid(playerGrid);
		createGrid(computerGrid);
		shipsController.createRandomShips(computerGrid, computerShips);
	}

	async function gameStart() {
		let gameOver = false;

		while (!gameOver) {
			setTimeout(() => {
				computerGridDiv.classList.add('glow');
			}, 900);

			await waitForPlayerAttack();
			if (checkWin()) {
				gameOver = true;
				break;
			}
			computerGridDiv.classList.remove('glow');

			playerGridDiv.classList.add('glow');
			await new Promise((resolve) => setTimeout(resolve, 1700));
			makeComputerAttack();
			if (checkWin()) {
				gameOver = true;
				break;
			}
			playerGridDiv.classList.remove('glow');
		}
	}
	function waitForPlayerAttack() {
		return new Promise((resolve) => {
			computerGridDiv.addEventListener('click', function (event) {
				const cell = event.target;
				if (cell.classList.contains('cell')) {
					const row = cell.dataset.row;
					const col = cell.dataset.col;
					gameController.makeAttack(row, col, computerGrid);
					displayController.updateCellHits(
						computerGrid,
						row,
						col,
						cell
					);
					resolve();
				}
			});
		});
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
		gameStart,
	};
})();
