import { gameController, playerGrid, computerGrid } from './gameController';

export const playerGridDiv = document.querySelector('.player-grid');
export const computerGridDiv = document.querySelector('.computer-grid');

export const displayController = (() => {
	const startGameBtn = document.querySelector('#get-name-button');
	const mainContainer = document.querySelector('.main-container');
	const initiatorContainer = document.querySelector('.initiator');
	const gameHandler = document.querySelector('.game-handler');
	const resetBtn = document.querySelector('#reset-button');

	const compAttackBtn = document.querySelector('#comp-attack-button');

	startGameBtn.addEventListener('click', () => {
		initiatorContainer.style.display = 'none';
		mainContainer.classList.add('active');
		gameHandler.style.display = 'flex';
	});

	resetBtn.addEventListener('click', () => {
		gameController.clearGrid(playerGrid);
		playerGridDiv.innerHTML = '';
		gameController.createGrid(playerGrid);
		renderGrid(playerGrid, 'player-grid');
	});

	compAttackBtn.addEventListener('click', () => {
		let attack = gameController.makeComputerAttack(playerGrid);
		let cell = document.querySelector(
			`[data-row="${attack.row}"][data-col="${attack.col}"]`
		);
		updateCellHits(playerGrid, attack.row, attack.col, cell);
	});

	// function renderPlayer2Attack() {
	// 	let attack = gameController.makeComputerAttack(playerGrid);
	// 	let cell = document.querySelector(
	// 		`[data-row="${attack.row}"][data-col="${attack.col}"]`
	// 	);
	// 	updateCellHits(playerGrid, attack.row, attack.col, cell);
	// }

	// playerGrid.addEventListener('click', function (event) {
	// 	const cell = event.target;
	// 	if (cell.classList.contains('cells')) {
	// 		const row = cell.dataset.row;
	// 		const col = cell.dataset.col;

	// 		updateCellHits(playerGrid, row, col, cell);
	// 	}
	// });

	computerGridDiv.addEventListener('click', function (event) {
		const cell = event.target;
		if (cell.classList.contains('cell')) {
			const row = cell.dataset.row;
			const col = cell.dataset.col;
			gameController.makeAttack(row, col, computerGrid);
			updateCellHits(computerGrid, row, col, cell);
		}
		gameController.makeComputerAttack();
	});

	function updateCellHits(grid, x, y, target) {
		if (grid[x][y].ship !== null) {
			target.style.backgroundColor = 'black';
			target.dataset.hit = 'true';
		} else {
			target.style.backgroundColor = 'lightblue';
			target.dataset.hit = 'true';
		}
	}

	function renderGrid(grid, gridClass) {
		let total = 0;
		const gridElement = document.querySelector('.' + gridClass);
		gridElement.innerHTML = '';
		grid.forEach((row, rowIndex) => {
			row.forEach((col, colIndex) => {
				const newCell = document.createElement('div');
				newCell.classList.add('cell');
				if (
					gridClass === 'player-grid' ||
					gridClass === 'computer-grid'
				) {
					if (col.ship !== null) {
						switch (col.ship) {
							case 'carrier':
								newCell.classList.add('carrier');
								break;
							case 'battleship':
								newCell.classList.add('battleship');
								break;
							case 'cruiser':
								newCell.classList.add('cruiser');
								break;
							case 'submarine':
								newCell.classList.add('submarine');
								break;
							case 'destroyer':
								newCell.classList.add('destroyer');
								break;
						}
					}
					newCell.setAttribute('data-ship', col.ship);
				}

				if (col.hit) {
					newCell.classList.add('hit');
				}
				newCell.setAttribute('data-row', rowIndex);
				newCell.setAttribute('data-col', colIndex);
				newCell.setAttribute('data-hit', col.hit);
				gridElement.appendChild(newCell);
				total++;
			});
		});
		// console.log(total);
	}

	function initiateRenderGrid() {
		renderGrid(playerGrid, 'player-grid');
		renderGrid(computerGrid, 'computer-grid');
	}

	return {
		renderGrid,
		initiateRenderGrid,
		// renderPlayer2Attack,
		updateCellHits,
		// computerGrid,
	};
})();
