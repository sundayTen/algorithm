var generate = function (numRows) {
  let answer = [];
  let rowArr = [1];

  for (let i = 0; i < numRows; i++) {
    answer.push([...rowArr]); // [[1], [1,1]]
    let tempRowArr = [...rowArr];

    for (let j = 0; j < rowArr.length; j++) {
      if (rowArr.length > 1 && j > 0) {
        tempRowArr[j] = rowArr[j - 1] + rowArr[j];
      }
    }

    tempRowArr.push(1);
    rowArr = [...tempRowArr];
  }

  console.log("answer", answer);
};

generate(5);
generate(1);
