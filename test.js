
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

  function skoorTäheks(index) {
    return String.fromCharCode(65 + index);
  }

  const formData = new FormData(document.getElementById("quizForm"));
  for (let [name, value] of formData.entries()) {
    if (name === "slaider") {
      const numValue = parseInt(value, 10);
      const täht = skoorTäheks(numValue);
      if (scores.hasOwnProperty(täht)) {
        scores[täht]++;
      }
    } 
    else {
      scores[value]++;
      }
    }
  

  let highest = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  localStorage.setItem("quizResult", highest);
  window.location.href = "tulemus_test.html";
}
