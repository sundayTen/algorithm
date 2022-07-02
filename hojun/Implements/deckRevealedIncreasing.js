const deckRevealedIncreasing = (deck) => {
    const sortedDeck = [...deck].sort((a, b) => a - b);
    const remainIndexes = deck.map((_, index) => index);
    const popOrder = [];

    while (popOrder.length < deck.length) {
        popOrder.push(remainIndexes.shift());
        remainIndexes.push(remainIndexes.shift());
    }

    const answer = Array(deck.length).fill(-1);
    popOrder.forEach((ans, index) => (answer[ans] = sortedDeck[index]));
    return answer;
};
