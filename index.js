//JavaScript
//HOME BUTTON #1
let homeStore = document.getElementById("home-score")
//let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScore = 0
function add1H(){
    homeScore = homeScore + 1
    homeStore.textContent = homeScore   
}
//HOME BUTTON #2
//let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
function add2H(){
    homeScore = homeScore + 2
    homeStore.textContent = homeScore
}
//HOME BUTTON #3
function add3H(){
    homeScore = homeScore + 3
    homeStore.textContent = homeScore
}

//AWAY BUTTON #1
let awayStore = document.getElementById("away-score")
let awayScore = 0

function add1A(){
    awayScore = awayScore + 1
    awayStore.textContent = awayScore
}
//AWAY BUTTON #2
function add2A(){
    awayScore = awayScore + 2
    awayStore.textContent = awayScore
}
//AWAY BUTTON #3
function add3A(){
    awayScore = awayScore + 3
    awayStore.textContent = awayScore
}
console.log(awayScore)