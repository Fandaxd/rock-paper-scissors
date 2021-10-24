let losses = 0
let wins = 0
const container = document.querySelector(".container")

const rockBtn = document.createElement("button")
rockBtn.innerHTML = "rock"
rockBtn.addEventListener("click", () => oneRound("rock", computerPlay()))
container.appendChild(rockBtn)

const paperBtn = document.createElement("button")
paperBtn.innerHTML = "paper"
paperBtn.addEventListener("click", () => oneRound("paper", computerPlay()))
container.appendChild(paperBtn)

const scissorsBtn = document.createElement("button")
scissorsBtn.innerHTML = "scissors"
scissorsBtn.addEventListener("click", () => oneRound("scissors", computerPlay()))
container.appendChild(scissorsBtn)

const scoreDiv = document.createElement("div")
scoreDiv.innerHTML = `Player score: ${wins} <br> Computer score: ${losses}`
container.appendChild(scoreDiv)

const resultsDiv = document.createElement("div")
container.appendChild(resultsDiv)



const computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    // console.log(randomNumber)
    if(randomNumber === 0) return "rock"
        else if (randomNumber === 1) return "paper"
        else return "scissors"
}

// console.log(computerPlay())

const oneRound = (playerSelection, computerSelection) => {    
    if(playerSelection === computerSelection) {}
        else if(playerSelection === "rock" && computerSelection === "paper") {
            losses++
        }
        else if(playerSelection === "rock" && computerSelection === "scissors") {
            wins++
        }
        else if(playerSelection === "paper" && computerSelection === "rock") {
            wins++
        }
        else if(playerSelection === "paper" && computerSelection === "scissors") {
            losses++
        }
        else if(playerSelection === "scissors" && computerSelection === "paper") {
            wins++
        }
        else {
            losses++
        }
    scoreDiv.innerHTML = `Player score: ${wins} <br> Computer score: ${losses}`
    if(wins > 4) resultsDiv.innerHTML = "<h1>You Won</h1>"
        else if(losses > 4) resultsDiv.innerHTML = "<h1>You Lost</h1>"
}



// const game = () => {
//     for(let i = 0; i < 5; i++){
//         const playerSelection = prompt('Type here "rock", "paper" or "scissors"')
//         const computerSelection = computerPlay()
//         console.log(`player is ${playerSelection}`)
//         console.log(`comp is ${computerSelection}`)
//         // console.log(oneRound(playerSelection, computerSelection))

//         oneRound(playerSelection, computerSelection)
//         console.log(wins)
//         console.log(losses)
//     }
//     alert(`won: ${wins}, lost: ${losses}`)
// }

// game()