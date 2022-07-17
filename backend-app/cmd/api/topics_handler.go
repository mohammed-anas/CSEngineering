package main

import (
	"backend/models"
	"errors"
	"net/http"
	"strconv"
	"time"

	"github.com/julienschmidt/httprouter"
)

func (app *application) getTopic(w http.ResponseWriter, r *http.Request) {
	params := httprouter.ParamsFromContext(r.Context())
	id, err := strconv.Atoi(params.ByName("id"))
	if err != nil {
		app.logger.Print(errors.New("invalid id paramater"))
		app.errorJSON(w, err)
		return
	}
	app.logger.Println("id is", id)
	topic := models.Topic{
		ID:          id,
		Title:       "Arrays",
		Description: "This topic will describe the concepts of arrays",
		Rating:      0,
		Category:    "Data Structure",
		VideoURL:    "https://www.youtube.com/watch?v=55l-aZ7_F24",
		CreatedAt:   time.Now(),
		UpDatedAt:   time.Now(),
	}
	app.writeJSON(w, http.StatusOK, topic, "topic")
}

func writeJSON(w http.ResponseWriter, i int, topic models.Topic, s string) {
	panic("unimplemented")
}
func (app *application) getAllTopics(w http.ResponseWriter, r *http.Request) {

}
