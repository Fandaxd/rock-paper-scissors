const computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    // console.log(randomNumber)
    if(randomNumber === 0) return "rock"
        else if (randomNumber === 1) return "paper"
        else return "scissors"
}

// console.log(computerPlay())
let losses = 0
let wins = 0
const oneRound = (playerSelection, computerSelection) => {
    
    
    
    if(playerSelection.toLowerCase() === computerSelection) console.log("It's a tie!")
        else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
            losses++
            console.log("You lose! Paper beats Rock")
        }
        else if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
            wins++
            console.log("You win! Rock beats Scissors")
        }
        else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            wins++
            console.log("You win! Paper beats Rock")
        }
        else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
            losses++
            console.log("You lose! Scissors beat paper")
        }
        else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
            wins++
            console.log("You win! Scissors beat paper")
        }
        else {
            losses++
            console.log("You lose. Rock beats scissors")
        }
    
}



const game = () => {
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('Type here "rock", "paper" or "scissors"')
        const computerSelection = computerPlay()
        console.log(`player is ${playerSelection}`)
        console.log(`comp is ${computerSelection}`)
        // console.log(oneRound(playerSelection, computerSelection))

        oneRound(playerSelection, computerSelection)
        console.log(wins)
        console.log(losses)
    }
    alert(`won: ${wins}, lost: ${losses}`)
}

game()