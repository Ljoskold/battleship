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
	createCarrier() {
		return new Ship('carrier', 5, 5);
	}
	createBattleship() {
		return new Ship('battleship', 4, 4);
	}
	createCruiser() {
		return new Ship('cruiser', 3, 3);
	}
	createSubmarine() {
		return new Ship('submarine', 3, 3);
	}
	createDestroyer() {
		return new Ship('destroyer', 2, 2);
	}
}
export const ship = new Ship();
// export const carrier = new Ship(5, 5);
// export const battleship = new Ship(4, 4);
// export const cruiser = new Ship(3, 3);
// export const submarine = new Ship(3, 3);
// export const destroyer = new Ship(2, 2);
