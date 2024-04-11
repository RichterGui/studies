package conta;

public class TesteContaBancaria {
    public static void main(String[] args) {
        var c1 = new ContaBancaria();


    c1.setConta("13245", "Claudio Castro");

    c1.depositar(1500);

    c1.sacar(10);
    }
}
