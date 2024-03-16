import { gameController, playerGrid, computerGrid } from './gameController';
import { computerShips, playerShips, shipsController } from './shipsController';
import { audioObjects } from './soundsController';

export const playerGridDiv = document.querySelector('.player-grid');
export const computerGridDiv = document.querySelector('.computer-grid');

export const displayController = (() => {
	const startGameBtn = document.querySelector('#play-button');
	const mainContainer = document.querySelector('.main-container');
	const initiatorContainer = document.querySelector('.initiator');
	const gameHandler = document.querySelector('.game-handler');
	const resetBtn = document.querySelector('#reset-button');
	const randomizeBtn = document.querySelector('#random-ships-button');
	const orientationBtns = document.querySelectorAll('.orientation-buttons');
	const shipsContainer = document.querySelector('.ships-container');
	const computerGridContainter = document.querySelector(
		'.computer-grid-container'
	);
	const popUp = document.querySelector('.pop-up');
	const popUpText = document.querySelector('#pop-up-text');
	const playAgainBtn = document.querySelector('#play-again-button');

	startGameBtn.addEventListener('click', () => {
		initiatorContainer.style.display = 'none';
		initGameStart();
		audioObjects[4].play();
	});

	resetBtn.addEventListener('click', () => {
		gameController.clearGrid(playerGrid);
		playerGridDiv.innerHTML = '';
		gameController.createGrid(playerGrid);
		renderGrid(playerGrid, 'player-grid');
		Array.from(shipsContainer.querySelectorAll('.draggable')).forEach(
			(el) => {
				el.style.opacity = '1';
			}
		);
		shipsController.resetDraggables();
		audioObjects[2].play();
	});

	function setAnnounce(message) {
		if (!message) {
			console.error('Announce element or message is missing');
			return;
		}
		const announceTarget = document.querySelector('#announce');

		announceTarget.textContent = message;
		announceTarget.style.animation = 'none';
		void announceTarget.offsetWidth;
		announceTarget.style.animation = 'typing 3.5s';
	}

	function gameOver(message) {
		const announceWrapper = document.querySelector('.announcement-wrapper');
		shipsContainer.style.display = 'none';
		playerGridDiv.style.display = 'none';
		computerGridDiv.style.display = 'none';
		announceWrapper.style.opacity = '0';
		popUp.style.display = 'flex';
		popUpText.textContent = message;
		shipsController.resetShips(playerShips);
		shipsController.resetShips(computerShips);

		playAgainBtn.addEventListener('click', () => {
			resetBtn.disabled = false;
			randomizeBtn.disabled = false;
			orientationBtns.forEach((button) => {
				button.disabled = false;
			});
			popUp.style.display = 'none';
			shipsContainer.style.display = 'grid';
			playerGridDiv.style.display = 'grid';
			computerGridDiv.style.display = 'grid';
			announceWrapper.style.opacity = '1';
			computerGridContainter.style.display = 'none';
			reset();
			announceWrapper.style.opacity = '1';
			audioObjects[4].play();
		});
	}
	function tutorialStart() {
		setTimeout(() => {
			const announceWrapper = document.createElement('div');
			announceWrapper.classList.add('announcement-wrapper');
			mainContainer.appendChild(announceWrapper);

			setTimeout(() => {
				announceWrapper.style.transition = 'opacity 1.5s ease-in-out';
				announceWrapper.style.opacity = '1';
			}, 500);

			const announce = document.createElement('p');
			announce.id = 'announce';
			announceWrapper.appendChild(announce);

			setTimeout(() => {
				setTimeout(() => {
					setAnnounce(`It's time to place your flot.`);
				}, 1000);
				setTimeout(() => {
					setAnnounce(
						`You can choose random
				placement or drag-and-drop ships vertically or horizontally!`
					);
				}, 4000);
			}, 3000);
		}, 2000);

		setTimeout(() => {
			gameHandler.style.display = 'flex';
			setTimeout(() => {
				gameHandler.style.transition = 'opacity 1s ease-in-out';
				setTimeout(() => {
					gameHandler.style.opacity = '1';
				}, 100);
			}, 0);
		}, 13000);
	}

	async function initGameStart() {
		mainContainer.classList.add('active');

		tutorialStart();

		shipsContainer.classList.add('glow');

		await finishFlot();

		shipsContainer.classList.remove('glow');

		setTimeout(() => {
			computerGridContainter.style.display = 'flex';
			setTimeout(() => {
				computerGridContainter.style.transition =
					'opacity 1s ease-in-out';
				setTimeout(() => {
					computerGridContainter.style.opacity = '1';
					setTimeout(() => {
						setAnnounce(
							'Click on the right grid cells to make an attack on enemy waters'
						);
					}, 500);
				}, 100);
			}, 0);
		}, 1500);
		setTimeout(() => {
			gameController.gameStart();
		}, 2000);
	}

	async function finishFlot() {
		return new Promise((resolve) => {
			const checkConditions = () => {
				let draggable = shipsController.getDraggables();
				const randomize = shipsController.getRandomizeStatus();
				if (draggable < 5 && randomize === false) {
					setTimeout(checkConditions, 2000);
				} else {
					resetBtn.disabled = true;
					randomizeBtn.disabled = true;
					orientationBtns.forEach((button) => {
						button.disabled = true;
					});
					resolve();
				}
			};

			checkConditions();
		});
	}

	async function reset() {
		gameController.clearGrid(playerGrid);
		gameController.clearGrid(computerGrid);
		playerGridDiv.innerHTML = '';
		computerGrid.innerHTML = '';
		gameController.createGrid(playerGrid);
		gameController.createGrid(computerGrid);
		shipsController.createRandomShips(computerGrid, computerShips);
		renderGrid(playerGrid, 'player-grid');
		renderGrid(computerGrid, 'computer-grid');
		shipsController.resetDraggables();
		shipsController.resetRandomize();
		Array.from(shipsContainer.querySelectorAll('.draggable')).forEach(
			(el) => {
				el.style.opacity = '1';
			}
		);

		setAnnounce(`It's time to place your flot.`);
		setTimeout(() => {
			setAnnounce(
				`You can choose random
			placement or drag-and-drop ships vertically or horizontally!`
			);
		}, 2000);

		shipsContainer.classList.add('glow');

		await finishFlot();

		shipsContainer.classList.remove('glow');

		setTimeout(() => {
			computerGridContainter.style.display = 'flex';
			setTimeout(() => {
				computerGridContainter.style.transition =
					'opacity 1s ease-in-out';
				setTimeout(() => {
					computerGridContainter.style.opacity = '1';
					setTimeout(() => {
						setAnnounce(
							'Click on the right grid cells to make an attack on enemy waters'
						);
					}, 1000);
				}, 100);
			}, 0);
		}, 1500);

		gameController.gameStart();
	}

	function updateCellHits(grid, x, y, target) {
		if (grid[x][y].ship !== null) {
			audioObjects[1].play();
			target.classList.add('hit');
			target.dataset.hit = 'true';
			target.style.pointerEvents = 'none';
		} else {
			audioObjects[0].play();
			target.classList.add('miss');
			target.dataset.hit = 'true';
			target.style.pointerEvents = 'none';
		}
	}

	function renderGrid(grid, gridClass) {
		const gridElement = document.querySelector('.' + gridClass);
		gridElement.innerHTML = '';
		grid.forEach((row, rowIndex) => {
			row.forEach((col, colIndex) => {
				const newCell = document.createElement('div');
				newCell.classList.add('cell');
				if (gridClass === 'player-grid') {
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
				} else {
					gridElement.style.cursor =
						'url(./images/crosshair2.svg) 20 20, auto';
				}

				if (col.hit) {
					newCell.classList.add('hit');
				}
				newCell.setAttribute('data-row', rowIndex);
				newCell.setAttribute('data-col', colIndex);
				newCell.setAttribute('data-hit', col.hit);
				gridElement.appendChild(newCell);
			});
		});
	}

	function initiateRenderGrid() {
		renderGrid(playerGrid, 'player-grid');
		renderGrid(computerGrid, 'computer-grid');
	}

	return {
		renderGrid,
		initiateRenderGrid,
		updateCellHits,
		setAnnounce,
		gameOver,
	};
})();
