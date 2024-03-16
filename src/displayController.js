import { gameController, playerGrid, computerGrid } from './gameController';
import { computerShips, playerShips, shipsController } from './shipsController';
import cannonHit from './audio/cannon_hit.mp3';
import cannonFireAudio from './audio/cannon_attack.mp3';
import startClick from './audio/startClick.mp3';
import configClick from './audio/configClick.mp3';

export const playerGridDiv = document.querySelector('.player-grid');
export const computerGridDiv = document.querySelector('.computer-grid');

export const displayController = (() => {
	const startGameBtn = document.querySelector('#play-button');
	const mainContainer = document.querySelector('.main-container');
	const initiatorContainer = document.querySelector('.initiator');
	const gameHandler = document.querySelector('.game-handler');
	const resetBtn = document.querySelector('#reset-button');
	const shipsContainer = document.querySelector('.ships-container');
	const compAttackBtn = document.querySelector('#comp-attack-button');
	const computerGridContainter = document.querySelector(
		'.computer-grid-container'
	);
	const popUp = document.querySelector('.pop-up');
	const popUpText = document.querySelector('#pop-up-text');
	const playAgainBtn = document.querySelector('#play-again-button');

	let shipIsHit = new Audio(cannonHit);
	let shoot = new Audio(cannonFireAudio);
	let startButton = new Audio(startClick);
	let menuClick = new Audio(configClick);

	startGameBtn.addEventListener('click', () => {
		initiatorContainer.style.display = 'none';
		initGameStart();
		startButton.play();
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
		menuClick.play();
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
			popUp.style.display = 'none';
			shipsContainer.style.display = 'grid';
			playerGridDiv.style.display = 'grid';
			computerGridDiv.style.display = 'grid';
			announceWrapper.style.opacity = '1';
			computerGridContainter.style.display = 'none';
			reset();
			announceWrapper.style.opacity = '1';
			startButton.play();
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
				setAnnounce(
					`It's time to place your flot. You can choose random
				placement or place ships vertically or horizontally!`
				);
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
		}, 10000);
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
					}, 1000); // Delay setting the announce message after rendering computerGrid
				}, 100);
			}, 0);
		}, 1500);

		gameController.gameStart();
	}

	async function finishFlot() {
		return new Promise((resolve) => {
			const checkConditions = () => {
				let draggable = shipsController.getDraggables();
				const randomize = shipsController.getRandomizeStatus();
				if (draggable < 5 && randomize === false) {
					setTimeout(checkConditions, 2000);
				} else {
					console.log('flot is done');
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

		setAnnounce(
			`It's time to place your flot. You can choose random
		placement or place ships vertically or horizontally!`
		);

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
			target.style.backgroundColor = 'rgb(138, 171, 182)';
			target.classList.add('hit');
			target.dataset.hit = 'true';
			shipIsHit.play();
			target.style.pointerEvents = 'none';
		} else {
			target.classList.add('miss');
			target.dataset.hit = 'true';
			shoot.play();
			target.style.pointerEvents = 'none';
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
						'url(./images/crosshair-bold-svgrepo-com.svg) 20 20, auto';
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
		gameOver,
	};
})();
