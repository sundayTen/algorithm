package Q22_05_22;

import java.util.ArrayList;
import java.util.List;

public class FindTheWinnerOfTheCircularGame {

  public int findTheWinner(int n, int k) {
    List<Integer> player = new ArrayList<>();
    int removeIdx = k - 1;

    for (int i = 1; i <= n; i++) {
      player.add(i);
    }

    while (player.size() != 1) {
      player.remove(removeIdx);
      removeIdx += k - 1;
      removeIdx = test(removeIdx, player.size() - 1);
    }
    return player.get(0);
  }

  public int test(int idx, int size) {
    int response = idx;
    if (idx > size) {
      response -= size + 1;
      return test(response, size);
    } else {
      return response;
    }
  }
}
