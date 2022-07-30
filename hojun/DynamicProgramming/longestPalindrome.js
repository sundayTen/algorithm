const isPalindrome = (target) => {
  const L = target.length;
  for (let i = 0; i < L / 2; i++) {
    if (target[i] !== target[L - i - 1]) return false;
  }
  return true;
};

// console.log(isPalindrome("adfa"));

const checkPalindromeByLength = (s, unit) => {
  const targets = [];
  let answer = undefined;

  for (let i = 0; i <= s.length - unit; i++) {
    targets.push(s.slice(i, i + unit));
  }

  targets.some((target) => {
    if (isPalindrome(target)) {
      answer = target;
      return true;
    }
  });

  return answer;
};

const longestPalindrome = (s) => {
  for (let i = s.length; i > 0; i--) {
    const answer = checkPalindromeByLength(s, i);
    if (answer) {
      return answer;
    }
  }
};

console.log(
  longestPalindrome(
    "sadflkjasdfkahsdfkjashdfjksadgfhjasdgfjhsadgfhjsadfgjhsadfghjsdfjgsadfa"
  )
);
