var numWaterBottles = function (numBottles, numExchange) {
  let answer = numBottles;

  while (numBottles >= numExchange) {
    answer += Math.floor(numBottles / numExchange);
    numBottles =
      Math.floor(numBottles / numExchange) + (numBottles % numExchange);
  }

  console.log("answer", answer);
};

numWaterBottles(9, 3);
numWaterBottles(15, 4);
