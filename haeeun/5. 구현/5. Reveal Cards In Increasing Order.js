var deckRevealedIncreasing = function (deck) {
  let answer = [];

  while (deck.length !== 0) {
    let max = Math.max(...deck);

    //max 값 deck 에서 제거
    let maxRemovedArr = deck.filter((element) => element !== max);
    deck = maxRemovedArr;

    //맨 끝에 있는 값 맨 앞에 넣어주기
    if (answer.length > 0) {
      let bottom = answer.pop();
      answer.unshift(bottom);
    }

    //최대값 맨 앞에 넣어주기
    answer.unshift(max);
  }

  console.log("answer", answer);
};

deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]);
deckRevealedIncreasing([1, 1000]);
