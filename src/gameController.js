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
import { audioObjects } from './soundsController';

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
		checkAttack(
			row,
			col,
			computerGrid,
			computerShips,
			computerStatuses,
			'.computer-grid'
		);
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
		checkAttack(
			row,
			col,
			playerGrid,
			playerShips,
			playerStatuses,
			'.player-grid'
		);

		return { row, col };
	}

	function getRandomCoordinates() {
		const row = Math.floor(Math.random() * gridSize);
		const col = Math.floor(Math.random() * gridSize);

		return { row, col };
	}

	const computerStatuses = [[], [], [], [], []];
	const playerStatuses = [[], [], [], [], []];

	function checkAttack(row, col, grid, ships, statuses, gridDiv) {
		switch (grid[row][col].ship) {
			case 'carrier':
				ships[0].hit();
				statuses[0].push([row, col]);
				if (ships[0].isSunk) {
					statuses[0].forEach((pair) => {
						let cell = document.querySelector(
							`${gridDiv} [data-row="${pair[0]}"][data-col="${pair[1]}"]`
						);
						cell.classList.remove('carrier');
						cell.classList.remove('hit');
						cell.classList.add('destroyed');
						setTimeout(() => {
							statuses[0].forEach((pair) => {
								let cell = document.querySelector(
									`${gridDiv} [data-row="${pair[0]}"][data-col="${pair[1]}"]`
								);
								cell.classList.remove('carrier');
								cell.classList.remove('hit');
								cell.classList.remove('destroyed');
								cell.classList.add('sunken');
							});
						}, 1000);
					});
				}
				break;

			case 'battleship':
				ships[1].hit();
				statuses[1].push([row, col]);
				if (ships[1].isSunk) {
					statuses[1].forEach((pair) => {
						let cell = document.querySelector(
							`${gridDiv} [data-row="${pair[0]}"][data-col="${pair[1]}"]`
						);
						cell.classList.remove('battleship');
						cell.classList.remove('hit');
						cell.classList.add('destroyed');
					});
					setTimeout(() => {
						statuses[1].forEach((pair) => {
							let cell = document.querySelector(
								`${gridDiv} [data-row="${pair[0]}"][data-col="${pair[1]}"]`
							);
							cell.classList.remove('battleship');
							cell.classList.remove('hit');
							cell.classList.remove('destroyed');
							cell.classList.add('sunken');
						});
					}, 1000);
				}
				break;

			case 'cruiser':
				ships[2].hit();
				statuses[2].push([row, col]);
				if (ships[2].isSunk) {
					statuses[2].forEach((pair) => {
						let cell = document.querySelector(
							`${gridDiv} [data-row="${pair[0]}"][data-col="${pair[1]}"]`
						);
						cell.classList.remove('cruiser');
						cell.classList.remove('hit');
						cell.classList.add('destroyed');
					});
					setTimeout(() => {
						statuses[2].forEach((pair) => {
							let cell = document.querySelector(
								`${gridDiv} [data-row="${pair[0]}"][data-col="${pair[1]}"]`
							);
							cell.classList.remove('cruiser');
							cell.classList.remove('hit');
							cell.classList.remove('destroyed');
							cell.classList.add('sunken');
						});
					}, 1000);
				}
				break;

			case 'submarine':
				ships[3].hit();
				statuses[3].push([row, col]);
				if (ships[3].isSunk) {
					statuses[3].forEach((pair) => {
						let cell = document.querySelector(
							`${gridDiv} [data-row="${pair[0]}"][data-col="${pair[1]}"]`
						);
						cell.classList.remove('submarine');
						cell.classList.remove('hit');
						cell.classList.add('destroyed');
					});
					setTimeout(() => {
						statuses[3].forEach((pair) => {
							let cell = document.querySelector(
								`${gridDiv} [data-row="${pair[0]}"][data-col="${pair[1]}"]`
							);
							cell.classList.remove('submarine');
							cell.classList.remove('hit');
							cell.classList.remove('destroyed');
							cell.classList.add('sunken');
						});
					}, 1000);
				}
				break;

			case 'destroyer':
				ships[4].hit();
				statuses[4].push([row, col]);
				if (ships[4].isSunk) {
					statuses[4].forEach((pair) => {
						let cell = document.querySelector(
							`${gridDiv} [data-row="${pair[0]}"][data-col="${pair[1]}"]`
						);
						cell.classList.remove('destroyer');
						cell.classList.remove('hit');
						cell.classList.add('destroyed');
					});
					setTimeout(() => {
						statuses[4].forEach((pair) => {
							let cell = document.querySelector(
								`${gridDiv} [data-row="${pair[0]}"][data-col="${pair[1]}"]`
							);
							cell.classList.remove('destroyer');
							cell.classList.remove('hit');
							cell.classList.remove('destroyed');
							cell.classList.add('sunken');
						});
					}, 1000);
				}
				break;
		}
	}

	function checkWin() {
		if (playerShips.every((ship) => ship.isSunk)) {
			setTimeout(() => {
				displayController.gameOver('You have lost :(');
				audioObjects[3].play();
				playerGridDiv.classList.remove('glow');
				computerGridDiv.classList.remove('glow');
			}, 1500);
			return true;
		} else if (computerShips.every((ship) => ship.isSunk)) {
			setTimeout(() => {
				displayController.gameOver('You have won :)');
				audioObjects[5].play();
				computerGridDiv.classList.remove('glow');
				playerGridDiv.classList.remove('glow');
			}, 1500);
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

				setTimeout(() => {
					computerGridDiv.style.pointerEvents = 'auto';
				}, 200);
			}, 1350);

			await waitForPlayerAttack();
			if (checkWin()) {
				gameOver = true;
				break;
			}
			computerGridDiv.classList.remove('glow');
			computerGridDiv.style.pointerEvents = 'none';

			displayController.setAnnounce('Recieving attack, get ready!');
			setTimeout(() => {
				playerGridDiv.classList.add('glow');
			}, 1350);

			await new Promise((resolve) => setTimeout(resolve, 1700));

			makeComputerAttack();
			if (checkWin()) {
				gameOver = true;
				break;
			}
			playerGridDiv.classList.remove('glow');
			setTimeout(() => {
				displayController.setAnnounce('Attack!');
			}, 1350);
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
