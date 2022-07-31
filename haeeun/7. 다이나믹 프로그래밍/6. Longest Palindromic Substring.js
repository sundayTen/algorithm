var longestPalindrome = function (s) {
  var str = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      // 홀수대칭, 짝수대칭 대비
      var left = i;
      var right = left + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > str.length) {
        str = s.slice(left + 1, right);
      }
    }
  }

  console.log("str", str);
  return str;
};

longestPalindrome("babad");
longestPalindrome("cbbd");
longestPalindrome("adbeeba");
