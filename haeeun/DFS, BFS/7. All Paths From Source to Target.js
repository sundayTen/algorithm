var allPathsSourceTarget = function (graph) {
  const n = graph.length - 1;
  let answer = [];

  const search = (index, currentPath) => {
    let path = [...currentPath];
    path.push(index);
    graph[index].forEach((element) => {
      if (element === n) {
        path.push(element);
        answer.push([...path]);
        path.pop();
      } else {
        search(element, path);
      }
    });
  };

  search(0, []);
  return answer;
};
