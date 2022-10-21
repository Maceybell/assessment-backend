const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller.js')
const { getFortune } = require('./controller.js')
const {
    getMovies,
    deleteMovie, 
    createMovie, 
    updateMovie
} = require('./controller')

app.get(`/api/movies`, getMovies)
app.delete(`/api/movies/:id`, deleteMovie)
app.post(`/api/movies`, createMovie)
app.put(`/api/movies/:id`, updateMovie)



app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)



app.listen(4000, () => console.log("Server running on 4000"));
