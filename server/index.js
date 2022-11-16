const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller.js')
const { getFortune } = require('./controller.js')
const { 
    getGoals,
    deleteGoal,
    updateGoal
   
} = require('./controller')




app.get("/api/goals", getGoals)
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.delete('/api/goals/:id', deleteGoal)
app.put("/api/goals/:id", updateGoal)



app.listen(4000, () => console.log("Server running on 4000"));
