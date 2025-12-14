let user = 0;
let computer = 0;

let choices = document.querySelectorAll('.choice');

let user_score = document.querySelector('#user-score');
let computer_score = document.querySelector('#comp-score');
let message = document.querySelector('#msg');

const draw = () => {
    message.innerText = "It's a draw!";
}

const genComputer = () => {
    return Math.floor(Math.random() * 3);
}

const computerChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    let genOpt = genComputer();
    console.log(`Generated option index: ${genOpt}`);
    return options[genOpt];
}

choices.forEach((choice)=> {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute("id");
        let compChoice = computerChoice();
        if (userChoice === compChoice) {
            draw();
        } else if ((userChoice === 'rock' && compChoice === 'scissors') ||
                   (userChoice === 'paper' && compChoice === 'rock') ||
                   (userChoice === 'scissors' && compChoice === 'paper')) {
            user++;
            user_score.innerText = user;
            message.innerText = `You win! ${userChoice} beats ${compChoice}.`;
        } else {
            computer++;
            computer_score.innerText = computer;
            message.innerText = `You lose! ${compChoice} beats ${userChoice}.`;
        }
        console.log(`User: ${userChoice} | Computer: ${compChoice}`);
    })
});