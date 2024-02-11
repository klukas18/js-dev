// EXAM Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck at random. Based on cards on our hand the program should tell us what is the best poker set. Reference: https://pl.wikipedia.org/wiki/Poker#Starsze%C5%84stwo_uk%C5%82ad%C3%B3w_kart

const ranks = [
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'J',
	'Q',
	'K',
	'A',
];
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

// 1. Create a deck of cards
let deck = [];
for (let suit of suits) {
	for (let rank of ranks) {
		deck.push({ rank, suit });
	}
}

// 2. Shuffle the deck
deck.sort(() => Math.random() - 0.5);
let hand = deck.slice(0, 5);

console.log(hand);

// Sort the hand by rank
hand.sort((a, b) => ranks.indexOf(a.rank) - ranks.indexOf(b.rank));

console.log(hand);

// Check for each poker hand
function checkHand(hand) {
	// Check for a flush (all cards have the same suit)
	if (hand.every((card) => card.suit === hand[0].suit)) {
		// Check for a straight flush (all cards are in sequential rank)
		if (
			hand.every(
				(card, i) =>
					i === 0 || card.rank === ranks[ranks.indexOf(hand[i - 1].rank) + 1]
			)
		) {
			return 'Straight Flush';
		}
		return 'Flush';
	}

	// Check for a straight (all cards are in sequential rank)
	if (
		hand.every(
			(card, i) =>
				i === 0 || card.rank === ranks[ranks.indexOf(hand[i - 1].rank) + 1]
		)
	) {
		return 'Straight';
	}

	// Count the occurrences of each rank
	let counts = hand.reduce(
		(counts, card) => ({
			...counts,
			[card.rank]: (counts[card.rank] || 0) + 1,
		}),
		{}
	);

	// Check for four of a kind, three of a kind, and pairs
	let fours = Object.values(counts).filter((count) => count === 4).length;
	let threes = Object.values(counts).filter((count) => count === 3).length;
	let pairs = Object.values(counts).filter((count) => count === 2).length;

	if (fours === 1) return 'Four of a Kind';
	if (threes === 1 && pairs === 1) return 'Full House';
	if (threes === 1) return 'Three of a Kind';
	if (pairs === 2) return 'Two Pair';
	if (pairs === 1) return 'One Pair';

	// If no other hand matched, return high card
	return 'High Card';
}

console.log(checkHand(hand));
