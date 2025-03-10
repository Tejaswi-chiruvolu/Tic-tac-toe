let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let turnO = true; // true for 'O', false for 'X'

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to reset game
const resetGame = () => {
    turnO = true;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

// Function to check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos1 === pos3) {
            localStorage.setItem("winner", pos1); // Store winner
            window.location.href = "winner.html"; // Redirect to winner page
            return;
        }
    }
};

// Event listener for boxes (player turns)
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "blue";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// Event listener for resetting the game
resetBtn.addEventListener("click", resetGame);
