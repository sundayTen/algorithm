package Q22_05_15;

public class RomanToInteger {

  static int romanToInt(String s) {
    int response = 0;
    for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) == 'I') {
        if (i != s.length() - 1 && s.charAt(i + 1) == 'V') {
          response += 4;
          i++;
        } else if (i != s.length() - 1 && s.charAt(i + 1) == 'X') {
          response += 9;
          i++;
        } else {
          response += 1;
        }
      } else if (s.charAt(i) == 'V') {
        response += 5;
      } else if (s.charAt(i) == 'X') {
        if (i != s.length() - 1 && s.charAt(i + 1) == 'L') {
          response += 40;
          i++;
        } else if (i != s.length() - 1 && s.charAt(i + 1) == 'C') {
          response += 90;
          i++;
        } else {
          response += 10;
        }
      } else if (s.charAt(i) == 'L') {
        response += 50;
      } else if (s.charAt(i) == 'C') {
        if (i != s.length() - 1 && s.charAt(i + 1) == 'D') {
          response += 400;
          i++;
        } else if (i != s.length() - 1 && s.charAt(i + 1) == 'M') {
          response += 900;
          i++;
        } else {
          response += 100;
        }
      } else if (s.charAt(i) == 'D') {
        response += 500;
      } else if (s.charAt(i) == 'M') {
        response += 1000;
      }
    }
    return response;
  }

  public static void main(String[] args) {
    System.out.println(romanToInt("III"));
    System.out.println(romanToInt("LVIII"));
    System.out.println(romanToInt("MCMXCIV"));
  }
}
