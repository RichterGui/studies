package main

import (
	"net/http"
	"webApp/webApp/routes"
)

func main() {
	routes.CarregaRotas()
	http.ListenAndServe(":8000", nil)
}
