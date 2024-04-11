package execoes;

public class Execoes {

    public static void main(String[] args) {

        try {
            validarNumero();

        } catch (Exception e) {
            System.out.println("Erro");
            e.printStackTrace();


        }

    }

    public static void validarNumero()  throws Exception{
        int numero = 10;
        if(numero < 100) {
            throw new Exception("O numero e menor que 100");

        }
    }
}
