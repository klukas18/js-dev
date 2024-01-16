// EXAM Scale riddle. With 8 balls, ex.  [1,2,1,1,1,1,1,1] get position of the “heavy” ball. Indexes are to be chosen at random. Use weights comparison only two times.

balls = [1, 1, 1, 1, 1, 1, 2, 1];

function findHeavyBall(balls) {
	// divide balls into 3 groups
	let groupA = balls.slice(0, 3);
	let groupB = balls.slice(3, 6);
	let groupC = balls.slice(6, 8);

	// sum weight of two first groups
	let sumGroupA = groupA.reduce((a, b) => a + b, 0);
	let sumGroupB = groupB.reduce((a, b) => a + b, 0);

	let heavyGroup;
	let startIndex;

	if (sumGroupA === sumGroupB) {
		// The heavy ball is in group C
		heavyGroup = groupC;
		startIndex = 6;
	} else {
		// The heavy ball is in group A or B
		heavyGroup = sumGroupA > sumGroupB ? groupA : groupB;
		startIndex = heavyGroup === groupA ? 0 : 3;
	}

	if (heavyGroup[0] === heavyGroup[1]) {
		// The heavy ball is the one left out
		return startIndex + 2;
	} else {
		// The heavy ball is one of the first two
		return startIndex + (heavyGroup[0] > heavyGroup[1] ? 0 : 1);
	}
}

console.log(findHeavyBall(balls));
