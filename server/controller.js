
const goals = require('./db.json')


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

    getGoals: (req, res) => {
        console.log(goals)
        res.status(200).send(goals)
    },

    deleteGoal: (req, res) => {
        let index = goals.findIndex(elem => elem.id === +req.params.id)
        console.log(index)
        console.log(goals)
        goals.splice(index, 1)
        console.log(goals)
        res.status(200).send(goals)

    }, updateGoal: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = goals.findIndex(elem => +elem.id === +id)
        if (type === 'plus'){
            goals[index].frequency++
            res.status(200).send(goals)
        } else if (type === 'minus') {
            goals[index].frequency--
            res.status(200).send(goals)
        } else {
            res.sendStatus(400)
        }
    }

     }
