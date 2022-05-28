package Q22_05_22;

import java.util.ArrayList;
import java.util.List;

public class BaseballGame {

  public int calPoints(String[] ops) {
    int sum = 0;
    List<Integer> list = new ArrayList<>();
    list.add(Integer.parseInt(ops[0]));
    for (int i = 1; i < ops.length; i++) {
      if (ops[i].matches("-?[0-9]+")) {
        list.add(Integer.parseInt(ops[i]));
      } else if (ops[i].equals("C")) {
        list.remove(list.size() - 1);
      } else if (ops[i].equals("D")) {
        list.add(list.get(list.size() - 1) * 2);
      } else if (ops[i].equals("+")) {
        list.add(list.get(list.size() - 1) + list.get(list.size() - 2));
      }
    }
    sum = list.stream().mapToInt(Integer::intValue).sum();
    return sum;
  }
}
