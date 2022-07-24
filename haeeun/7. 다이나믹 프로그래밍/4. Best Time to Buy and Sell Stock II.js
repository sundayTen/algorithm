var maxProfit = function (prices) {
  let answer = 0;
  let buy = prices.shift();

  prices.forEach((price) => {
    price > buy ? ((answer += price - buy), (buy = price)) : (buy = price);
  });

  console.log("answer", answer);
};

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([1, 2, 3, 4, 5]);
maxProfit([7, 6, 4, 3, 1]);
