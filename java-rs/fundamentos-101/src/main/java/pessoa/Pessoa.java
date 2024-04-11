package pessoa;

public class Pessoa {
    private String name;
    private String cpf;
    private int age;


    public void setPessoa(String name, String cpf, int age) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
    }

    public void imprimePessoa() {
        System.out.printf("%s titular do cpf %s tem a idade de %d", this.name, this.cpf, this.age);
    }
}
