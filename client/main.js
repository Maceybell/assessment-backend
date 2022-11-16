const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const display = document.querySelector('.display')



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res=> {
        const data = res.data;
        alert(data);
    })
}

const getGoals = () => {
    axios.get('http://localhost:4000/api/goals')
    .then((res) => {
        console.log(res.data)
        display.innerHTML=''
        res.data.forEach((goal) => {
            display.innerHTML+=`
                <div class = "goal-card"> 
                <img class = "card-img" src = ${goal.imageURL}> </img>
                 <h4>${goal.title}</h4>
                <div class ="frequency"> <button onclick= "updateFrequency(${goal.id}, 'plus')" >+</button> <h4> ${goal.frequency} times per week </h4> <button onclick= "updateFrequency(${goal.id}, 'minus')">-</button>  </div>
                <button onclick="deleteItem(${goal.id})"> x </button>
                </div>
            `
        })
    })
}

const deleteItem = (id) => {
    console.log(id)
    axios.delete(`http://localhost:4000/api/goals/${id}`)
    .then(() => getGoals())
    .catch(err => console.log(err))
}

const updateFrequency = (id, type) => {axios.put(`http://localhost:4000/api/goals/${id}`, {type}).then(getGoals())}


getGoals()