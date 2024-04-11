package primeirasAulas;

import java.util.HashMap;
import java.util.Map;

public class Colecoes {

  public static void main(String[] args) {
    Map<String, Integer> notas = new HashMap<>();
    notas.put("Bruno", 6);
    notas.put("Cleiton", 8);
    notas.put("Homero", 10);

    for (Map.Entry<String, Integer> entry : notas.entrySet()) {
      String nome = entry.getKey();
      int nota = entry.getValue();
      String status = (nota >= 7) ? "Aprovado" : "Reprovado";

      System.out.printf("A nota do aluno %s foi %d, portanto o aluno foi %s \n", nome, nota, status);
    }

  }
}
