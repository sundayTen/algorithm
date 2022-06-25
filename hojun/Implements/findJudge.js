const findJudge = (n, trust) => {
  if (n === 1) return 1;

  const target = groupByTarget(trust);
  const judge = getJudge(target, n);

  if (!judge) {
    return -1;
  }

  const isJudgeTrustSomeone = checkJudgeTrustSomeone(trust, judge);
  if (isJudgeTrustSomeone) {
    return -1;
  }

  return judge[0];
};

const groupByTarget = (trust) =>
  trust
    .map((trustElement) => trustElement[1])
    .reduce((acc, cur) => {
      if (acc[cur] === undefined) {
        acc[cur] = 0;
      }
      acc[cur] = acc[cur] + 1;
      return acc;
    }, {});

const getJudge = (target, n) =>
  Object.entries(target).find((targetElement) => targetElement[1] == n - 1);

const checkJudgeTrustSomeone = (trust, judge) =>
  trust.find((targetElement) => targetElement[0] === Number(judge[0]));
