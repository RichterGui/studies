package main

import (
	"github.com/goGin/database"
	"github.com/goGin/models"
	"github.com/goGin/routes"
)

func main() {

	models.Alunos = []models.Aluno{
		{Nome: "Claudio", CPF: "123123123123", RG: "3293928392839"},
	}
	database.ConectaComBancoDeDados()
	routes.HandleRequests()
}
