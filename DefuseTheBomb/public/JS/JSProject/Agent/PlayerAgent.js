let dX = 0,
	dZ = 0;

let speed = 0.075;
let arenaBounde = 8.925;

export class PlayerListener {
	constructor() {
		this.delta = { x: 0, y: 0, z: 0 };
	}

	updateVector(position) {
		if (
			(position.x > arenaBounde && dX > 0) ||
			(position.x < -arenaBounde && dX < 0)
		) {
			dX = 0;
		}
		if (
			(position.z > arenaBounde && dZ > 0) ||
			(position.z < -arenaBounde && dZ < 0)
		) {
			dZ = 0;
		}
		this.delta.x = dX;
		this.delta.z = dZ;
	}

	resetPosition() {
		dX = 0;
		dZ = 0;
	}

	stop() {
		console.log("stop");
		dX = 0;
		dZ = 0;
		this.delta.x = 0;
		this.delta.z = 0;
	}
}

export function setPlayerControls(canvas) {
	window.addEventListener("keydown", onKeyDown, true);

	function onKeyDown(e) {
		if (e.keyCode === 87) {
			// W
			console.log("Weee");
			dZ = speed;
		}
		if (e.keyCode === 83) {
			// S
			dZ = -speed;
		}
		if (e.keyCode === 65) {
			// A
			dX = speed;
		}
		if (e.keyCode === 68) {
			// D
			dX = -speed;
		}
	}
}