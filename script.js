let userScore = 0;
let computerScore = 0;
const userSpan = document.querySelector(".userScore");
const computerSpan = document.querySelector(".computerScore");
const scoreBoard = document.querySelector(".scoreBoard");
const result = document.querySelector(".result > p");
const pierre = document.querySelector(".pierre");
const papier = document.querySelector(".papier");
const ciseaux = document.querySelector(".ciseaux");

function getChoiceComputer() {
    const choices = ['pierre', 'papier', 'ciseaux'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function lose(choiceComputer, choiceUser) {
    computerScore++;
    userSpan.innerHTML = userScore;
    computerSpan.innerHTML = computerScore;
    result.innerHTML = choiceComputer + " est plus fort que " + choiceUser + ". Défaite.";
}

function win(choiceComputer, choiceUser) {
    userScore++;
    userSpan.innerHTML = userScore;
    computerSpan.innerHTML = computerScore;
    result.innerHTML = choiceUser + " est plus fort que " + choiceComputer + ". Victoire!";
}

function draw(choiceComputer, choiceUser) {
    userSpan.innerHTML = userScore;
    computerSpan.innerHTML = computerScore;
    result.innerHTML = "C'est une égalité...";
    
}

function game(choiceUser){
    let choiceComputer = getChoiceComputer();
    switch (choiceComputer + choiceUser) {
        case "pierreciseaux":
        case "papierpierre":
        case "ciseauxpapier":
            lose(choiceComputer, choiceUser);
            break;
        case "pierrepapier":
        case "papierciseaux":
        case "ciseauxpierre":
            win(choiceComputer, choiceUser);
            break;
        case "pierrepierre":
        case "papierpapier":
        case "ciseauxciseaux":
            draw(choiceComputer, choiceUser);
            break;
    }
}

function principale() {
    pierre.addEventListener('click', function() {
        game("pierre");
    })

    papier.addEventListener('click', function() {
        game("papier");
    })
    ciseaux.addEventListener('click', function() {
        game("ciseaux");
    })
}

principale();