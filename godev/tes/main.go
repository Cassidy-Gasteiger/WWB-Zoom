package main

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"log"
	"net/http"
)

func main() {

	router := mux.NewRouter()

	router.HandleFunc("/api/connection", GetConnection).Methods("GET")
	router.HandleFunc("/api/microphone", GetMicrophone).Methods("GET")
	router.HandleFunc("/api/webcam", GetWebCam).Methods("GET")

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
	})

	handler := c.Handler(router)
	err := http.ListenAndServe(":8000", handler)
	if err != nil {
		log.Fatalln("There's an error with the server")
	}

}

func GetConnection(w http.ResponseWriter, req *http.Request) {
	json.NewEncoder(w).Encode(Connection())
}

func GetMicrophone(w http.ResponseWriter, req *http.Request) {
	json.NewEncoder(w).Encode(Microphone())
}

func GetWebCam(w http.ResponseWriter, req *http.Request) {
	json.NewEncoder(w).Encode(WebCam())
}
