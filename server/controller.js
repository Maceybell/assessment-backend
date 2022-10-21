
const movies = require('./db.json')
let globalId = 11

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A dubious friend may be an enemy in camouflage.", "A friend asks only for your time not your money.", "A smile is your personal welcome mat."];
      
        // choose random compliment
        let randomIndex2 = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex2];
      
        res.status(200).send(randomFortunes);
    },

    getMovies: (req, res) => res.status(200).send(movies),
    deleteMovie: (req, res) => {
        let index = movies.findIndex(elem => elem.id === +req.params.id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        let { title, rating, imageURL } = req.body
        let newMovie = {
            id: globalId,
            title, 
            rating,
            imageURL
        }
        movies.push(newMovie)
        res.status(200).send(movies)
        globalId++
    },
    updateMovie: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = movies.findIndex(elem => +elem.id === +id)

        if (movies[index].rating === 5 && type === 'plus') {
            res.status(400).send('cannot go above 5')
        } else if (movies[index].rating === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0')
        } else if (type === 'plus') {
            movies[index].rating++
            res.status(200).send(movies)
        } else if (type === 'minus') {
            movies[index].rating--
            res.status(200).send(movies)
        } else {
            res.sendStatus(400)
        }
    } }
