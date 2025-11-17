
// Retrieve the stored value
const result = localStorage.getItem("quizResult");

let message = "";

if (result === "A") message = "You are Result A!";
if (result === "B") message = "You are Result B!";
if (result === "C") message = "You are Result C!";

document.getElementById("resultText").textContent = message;
