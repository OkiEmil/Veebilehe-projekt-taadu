
function showQuestion(num) {
  document.querySelectorAll(".question").forEach(q => q.classList.remove("active"));
  document.getElementById("q" + num).classList.add("active");
}

function nextQuestion(current) {
  showQuestion(current + 1);
}

function prevQuestion(current) {
  showQuestion(current - 1);
}

function calculateResult() {
  let scores = { A: 0, B: 0, C: 0 };

  const formData = new FormData(document.getElementById("quizForm"));
  for (let value of formData.values()) {
    scores[value]++;
  }

  let highest = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  localStorage.setItem("quizResult", highest);
  window.location.href = "tulemus_test.html";
}
