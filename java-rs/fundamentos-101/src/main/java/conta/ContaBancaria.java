package conta;

public class ContaBancaria {
    private String numero;
    private String titular;
    private double saldo;

    public ContaBancaria() {
        saldo = 0;
    }

    public void setConta(String numero, String titular) {
        this.numero = numero;
        this.titular = titular;
    }


    void depositar(double valor) {
    if(valor > 0) {
        this.saldo += valor;
        System.out.println("Deposito de R$ " + valor);
    }else System.out.println("Valor de deposito invalido");


    }

    void sacar(double valor) {
        if(valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            System.out.println("Saque de "+ valor + ". Saldo atual de " + this.saldo );
        }
    }

}
