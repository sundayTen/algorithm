package Q22_06_12;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class NQueens {

  int[] arr;
  List<String> stringArr = new ArrayList<>();
  List<List<String>> response = new ArrayList<>();

  public List<List<String>> solveNQueens(int n) {
    arr = new int[n];

    nQueen(0, n);

    return response;
  }

  public void nQueen(int depth, int n) {
    if (depth == n) {
      for (int i = 0; i < n; i++) {
        char arr2[] = new char[n];
        Arrays.fill(arr2, '.');
        arr2[arr[i]] = 'Q';
        stringArr.add(String.valueOf(arr2));
      }
      response.add(new ArrayList<>(stringArr));
      stringArr = new ArrayList<>();
      return;
    }

    for (int i = 0; i < n; i++) {
      arr[depth] = i;
      if (Possibility(depth)) {
        nQueen(depth + 1, n);
      }
    }
  }

  public boolean Possibility(int col) {
    for (int i = 0; i < col; i++) {
      if (arr[col] == arr[i]) {
        return false;
      } else if (Math.abs(col - i) == Math.abs(arr[col] - arr[i])) {
        return false;
      }
    }
    return true;
  }
}
