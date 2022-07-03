const maximalNetworkRank = (n, roads) => {
    let edgeMap = Array(n)
        .fill(false)
        .map((_, i) => [i, calculateConnectedCount(roads, i)]);

    let max = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                break;
            }
            const connectedRoad = roads.find((road) => {
                const [from, to] = road;
                return (from === i && to === j) || (from === j && to === i);
            });

            let maxRoad = edgeMap[i][1] + edgeMap[j][1];

            if (connectedRoad) {
                maxRoad = maxRoad - 1;
            }

            if (maxRoad > max) {
                max = maxRoad;
            }
        }
    }
    return max;
};

const calculateConnectedCount = (roads, roadIndex) =>
    roads.reduce((total, road) => {
        const [from, to] = road;
        if (from === roadIndex || to === roadIndex) {
            return (total += 1);
        }
        return total;
    }, 0);
