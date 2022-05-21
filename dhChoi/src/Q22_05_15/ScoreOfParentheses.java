package Q22_05_15;

public class ScoreOfParentheses {

  public int scoreOfParentheses(String s) {
    int open = 0;
    int score = 0;

    for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) == '(') {
        open++;
      } else if (s.charAt(i) == ')') {
        open--;
        if (s.charAt(i - 1) == '(') {
          score += Math.pow(2, open);
        }
      }
    }

    return score;
  }
}
