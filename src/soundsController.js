import cannonHit from './audio/cannon_hit.mp3';
import cannonAttack from './audio/cannon_attack.mp3';
import startClick from './audio/startClick.mp3';
import menuClick from './audio/menu_click.mp3';
import victory from './audio/victory.mp3';
import defeat from './audio/defeat.mp3';

const cannonAttackSound = new Audio(cannonAttack);
const cannonHitSound = new Audio(cannonHit);
const menuClickSound = new Audio(menuClick);
const defeatSound = new Audio(defeat);
const startClickSound = new Audio(startClick);
const victorySound = new Audio(victory);

export const audioObjects = [
	cannonAttackSound,
	cannonHitSound,
	menuClickSound,
	defeatSound,
	startClickSound,
	victorySound,
];

let soundBtn = document.querySelector('.sound-button');

soundBtn.addEventListener('click', () => {
	toggleMute();
	soundBtn.classList.toggle('off');
});

function toggleMute() {
	audioObjects.forEach((audio) => {
		audio.muted = !audio.muted;
	});
}
