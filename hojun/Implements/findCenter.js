/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = (edges) => {
    const map = edges.reduce((acc, edge) => {
        const [from, to] = edge;
        if (acc[from] === undefined) {
            acc[from] = 0;
        }
        if (acc[to] === undefined) {
            acc[to] = 0;
        }
        acc[from]++;
        acc[to]++;
        return acc;
    }, {});

    return Object.entries(map).find((obj) => obj[1] === edges.length)[0];
};

findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
]);
