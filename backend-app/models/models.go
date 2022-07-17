package models

import "time"

type Topic struct {
	ID          int       `json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Rating      int       `json:"rating"`
	Category    string    `json:"category"`
	VideoURL    string    `json:"videoURL"`
	CreatedAt   time.Time `json:"created_at"`
	UpDatedAt   time.Time `json:"update_at"`
}
