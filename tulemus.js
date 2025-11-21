
const result = localStorage.getItem("quizResult");

let message = "";

if (result === "A") message = "Sinule sobib kõige rohkem A";
if (result === "B") message = "Sinule sobib kõige rohkem B";
if (result === "C") message = "Sinule sobib kõige rohkem C";

document.getElementById("resultText").textContent = message;