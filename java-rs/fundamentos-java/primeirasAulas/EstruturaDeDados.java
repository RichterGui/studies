package primeirasAulas;

import java.util.ArrayList;
import java.util.List;

public class EstruturaDeDados {

  public static void main(String[] args) {
    // Lista
    List<String> nomes = new ArrayList<>();
    nomes.add("Claudio");
    nomes.add("Jones");
    nomes.add("Cleci");

    // for (String nome : nomes) {
    // System.out.println(nome);
    // }

    nomes.forEach(nome -> System.out.println(nome));
  }
}
