function showQuestion(num) {
  document.querySelectorAll(".question").forEach(küsimus => küsimus.classList.remove("active"));
  document.getElementById("küsimus" + num).classList.add("active");
}

function nextQuestion(current) {
  if (isRadioSelected(current)){
    showQuestion(current + 1);
  }
}

function prevQuestion(current) {

  showQuestion(current - 1);
  
  
}


/* Kontrollib, kas küsimus on raadio-tüüpi ja kui on, siis kontrollib, kas üks valikvastustest on valitud */
function isRadioSelected(current) {

  let selector = 'input[type="radio"][name="'+'küsimus'+current+'"]';
  
  if (document.querySelector(selector) == null) {
    return true;
  }
  else{
    selector += ':checked';
  }
  const selectedRadio = document.querySelector(selector);

  if (selectedRadio) {
    return true; 
  } else {
    alert("Sa ei valinud veel vastust...")
    return false;
  }
}


function calculateResult() {

  let scores = { A: 0, B: 0, C: 0 , D: 0};
  
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
  /* console.log("Salvestatud tulemus:", highest);
  alert(localStorage.getItem("quizResult")); */
  window.location.href = "viimane.html";
}