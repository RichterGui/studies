package main

import (
	"github.com/go-rest-api/database"
	"github.com/go-rest-api/routes"
)

func main() {
	database.ConectaComBancoDeDados()
	routes.HandleRequest()
}
