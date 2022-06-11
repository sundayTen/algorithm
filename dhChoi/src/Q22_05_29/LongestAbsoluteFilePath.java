package Q22_05_29;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class LongestAbsoluteFilePath {

  public static int countChar(String str, char ch) {
    int count = 0;
    for (int i = 0; i < str.length(); i++) {
      if (str.charAt(i) == ch) {
        count++;
      }
    }
    return count;
  }

  public int lengthLongestPath(String input) {
    List<String> array = new ArrayList<>(Arrays.asList(input.split("\\n")));
    Stack<String> path = new Stack<>();
    int depth = -1;
    int response = 0;

    // for(String test : array){
    //     System.out.println(test);
    // }
    for (String node : array) {
      if (countChar(node, '\t') > depth) {
        depth = countChar(node, '\t');
      } else if (countChar(node, '\t') == depth) {
        path.pop();
      } else {
        // System.out.println(depth);
        for (int i = countChar(node, '\t'); i <= depth; i++) {
          path.pop();
        }
        depth = countChar(node, '\t');
      }

      path.push(node.replace("\t", ""));

      if (node.contains(".")) {
        // System.out.println(String.join("/", path));
        if (response < String.join("/", path).length()) {
          response = String.join("/", path).length();
        }
      }
    }
    // System.out.println(response);
    return response;
  }
}
