const calculateNextIndexGenerator = (k) => (length, cur) => {
  let nextIndex = cur + ((k % length) - 1);
  nextIndex = nextIndex >= length ? nextIndex % length : nextIndex;
  return nextIndex < 0 ? length + nextIndex : nextIndex;
};

const dropPlayerGenerator = (k) => {
  const calculateNextIndex = calculateNextIndexGenerator(k);

  return (players, currentIndex) => {
    let targetIndex = calculateNextIndex(players.length, currentIndex);
    const newPlayers = players.filter((_, index) => index !== targetIndex);
    const nextIndex = targetIndex === newPlayers.length ? 0 : targetIndex;

    return { newPlayers, nextIndex };
  };
};

const isDone = (players) => players.length === 1;

function findTheWinner(n, k) {
  let players = Array.from({ length: n }, (_, index) => index + 1);
  let currentIndex = 0;

  const dropPlayer = dropPlayerGenerator(k);

  while (!isDone(players)) {
    const { newPlayers, nextIndex } = dropPlayer(players, currentIndex);
    players = newPlayers;
    currentIndex = nextIndex;
  }

  return Number(players[0]);
}
