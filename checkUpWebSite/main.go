package main

import "fmt"

type ContaCorrente struct {
	titular       string
	numeroAgencia int32
	numeroConta   int32
	saldo         float64
}

func main() {
	contaClaudio := ContaCorrente{"Claudio", 555, 1234455, 12.5}
	contaJulia := ContaCorrente{"Julia", 432, 323455, 3455.5}
	fmt.Println(contaClaudio, contaJulia)
}
