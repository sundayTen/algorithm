const exchange = (bottles, unit) => [parseInt(bottles / unit), bottles % unit];

const numWaterBottles = (numBottles, numExchange) => {
    let empty = numBottles;
    let drunk = numBottles;

    do {
        const [water, emptyBottle] = exchange(empty, numExchange);
        drunk += water;
        empty = emptyBottle + water;
    } while (empty >= numExchange);

    return drunk;
};
