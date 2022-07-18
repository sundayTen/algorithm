const maxArea = (height) => {
  return height.reduce((max, originalHeight, originalIndex, originalArray) => {
    const calculated = originalArray
      .filter((_, i) => i < originalIndex)
      .map((_, targetIndex) => {
        if (originalIndex - targetIndex < 0) return 0;
        const WIDTH = originalIndex - targetIndex;
        const HEIGHT = Math.min(originalHeight, originalArray[targetIndex]);

        return WIDTH * HEIGHT;
      });

    return maxMath.max(...calculated) > max ? Math.max(...calculated) : max;
  }, 0);
};
