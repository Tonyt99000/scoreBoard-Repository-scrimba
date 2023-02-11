//JavaScript
//HOME BUTTON #1
let homeStore = document.getElementById("home-score")
//let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScore = 0
function increaseHomeScoreOne(){
    homeScore = homeScore + 1
    homeStore.textContent = homeScore   
}
//HOME BUTTON #2
//let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
function increaseHomeScoreTwo(){
    homeScore = homeScore + 2
    homeStore.textContent = homeScore
}
//HOME BUTTON #3
function increaseHomeScoreThree(){
    homeScore = homeScore + 3
    homeStore.textContent = homeScore
}

//AWAY BUTTON #1
let awayStore = document.getElementById("away-score")
let awayScore = 0

function add1(){
    awayScore = awayScore + 1
    awayStore.textContent = awayScore
}
//AWAY BUTTON #2
function add2(){
    awayScore = awayScore + 2
    awayStore.textContent = awayScore
}
//AWAY BUTTON #3
function add3(){
    awayScore = awayScore + 3
    awayStore.textContent = awayScore
}
console.log(awayScore)