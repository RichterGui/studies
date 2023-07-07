package main

import (
	"fmt"

	"example.com/poo/clientes"
	"example.com/poo/contas"
)

func PagarBoleto(conta verificarConta, valorDoBoleto float64) {
	conta.Sacar(valorDoBoleto)
}

type verificarConta interface {
	Sacar(valor float64) string
}

func main() {
	titularDenis := clientes.Titular{Nome: "Denis de Almeida", CPF: "13253423411", Profissao: "Mestre de obras"}
	contaDoDenis := contas.ContaPoupanca{Titular: titularDenis}

	contaDoDenis.Depositar(100)
	PagarBoleto(&contaDoDenis, 600)
	fmt.Println(contaDoDenis)
}
