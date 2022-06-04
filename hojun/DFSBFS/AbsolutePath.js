// class Path {
//   constructor(path) {
//     this.path = path;
//     this.left = null;
//     this.right = null;
//   }

//   addLeft(path) {
//     this.left = path;
//   }

//   addRight(path) {
//     this.right = path;
//   }
// }

// const paths = [];

// const createPath = (chunks) => chunk.split("\t")[-1];

// const makePath = (chunk, index, array) => {
//   if (chunk === "dir") {
//     paths.push(new Path(chunk));
//     return;
//   }

//   const target = chunk.split("\t").length;

//   paths.push(new Path(createPath(chunk)));
// };

// const lengthLongestPath = function (input) {
//   let parent = "dir";
//   input.split("\n").forEach((chunk) => {
//     if (chunk === "dir") {
//       paths.push(new Path(chunk));
//       return;
//     }
//     const reducedChunk = chunk.split("\t");
//     paths.push(new Path(reducedChunk[reducedChunk.length - 1]));

//     const foundPath = paths.find((node) => node.path === parent);
//     if (foundPath) {
//     }
//   });

//   return 0;
// };

const isEmpty = (chunks) => {
  return (
    chunks.length > 0 &&
    chunks.map((chunk) => chunk.split("\t")).every((t) => t.length === 1)
  );
};

const isValidPath = (path) => {
  return path.includes(".");
};

const findPathLength = (string) => {
  const splittedString = string.split("\n");
  let parentChunk = [];

  if (isEmpty(splittedString)) {
    return Math.max(
      ...splittedString.map((chunk) => {
        if (isValidPath(chunk)) {
          return chunk.length;
        }
        return 0;
      })
    );
  }

  const data = string
    .split("\n")
    .filter((chunk) => chunk !== "")
    .map((chunk) => chunk.split("\t"))
    .filter((chunk) => chunk.length > 1)
    .map((chunks, index, array) => {
      const len = chunks.length;

      if (len === 2) {
        parentChunk = [splittedString[0], chunks[len - 1]];
        return [splittedString[0], chunks[len - 1]];
      }

      const calculatedChunk = [...parentChunk, chunks[len - 1]];

      if (array[index + 1] && array[index + 1].length > len) {
        parentChunk = calculatedChunk;
      }

      return calculatedChunk;
    })
    .map((chunks) => {
      const fullPath = chunks.join("/");
      if (isValidPath(fullPath)) {
        return fullPath.length;
      }
      return 0;
    });

  return Math.max(...data);
};

const splitArray = (data) =>
  data
    .split("\n")
    .map((d, index) => (d.includes("\t") ? null : index))
    .filter((d) => d !== null);

const lengthLongestPath = (input) => {
  return splitArray(input).map((item, index, array) =>
    findPathLength(
      input
        .split("\n")
        .slice(item, array[index + 1])
        .join("\n")
    )
  );
};
