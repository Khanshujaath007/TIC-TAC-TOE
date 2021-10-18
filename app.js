console.log("Welcome to Tic Tac Toe")
let bgmusic = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = 'X';
let isgameover = false;

//function to change turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 2, 6, 0],
        [3, 4, 5, 2, 20, 0],
        [6, 7, 8, 2, 33, 0],
        [0, 3, 6, -11, 20, 90],
        [1, 4, 7, 2, 20, 90],
        [2, 5, 8, 15, 20, 90],
        [0, 4, 8, 2, 20, 45],
        [2, 4, 6, 2, 20, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText) === (boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px"
            document.querySelector('.line').style.width = "35vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

//gamelogic
let box = document.getElementsByClassName("box");
Array.from(box).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            checkWin();
            turn = changeTurn();
            audioTurn.play();
            // bgmusic.play();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//Reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.line').style.width = "0vw";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
