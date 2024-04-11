package pessoa;

public class Pessoa {

  private String nome;
  private int idade;
  private String cpf;

  public Pessoa(String cpf, String nome, int idade) {
    this.cpf = cpf;
    this.nome = nome;
    this.idade = idade;
  }

  public void imprimePessoa() {
    System.out.printf("%s de idade %d e titular do cpf %s", this.nome, this.idade, this.cpf);
  }

}
