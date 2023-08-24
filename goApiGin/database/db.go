package database

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ConectaComBancoDeDados() {
	// Replace these with your actual database credentials
	dsn := "host=localhost user=root password=root dbname=root port=5432 sslmode=disable"

	// Connect to the PostgreSQL database
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to the database: ", err)
	}

	// Check the database connection
	sqlDB, err := db.DB()
	if err != nil {
		log.Fatal("Failed to get DB instance: ", err)
	}
	defer sqlDB.Close()

}
