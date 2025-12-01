/* Koodi autoriks on Oliver koos tehisintellekti abiga */
/* Näitab antud numbriga küsimust ja peidab teised ära, nii et ainult üks küsimus on korraga nähtav */
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


/* Kontrollib, kas küsimus on raadio-tüüpi ja kui on, siis kontrollib, kas ükski valikvastustest on valitud */
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

/* Võtab küsimuste vastused, slaiderilt võtab joone peal oleva tulemuse ja salvestab selle localStorage-sse */
function calculateResult(current) {
  
  if (!isRadioSelected(current)){
    return;
  }

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

    /* For-loop on, et võimaldada ühel valikvastusel anda skoori mitme tulemuse suunas */
    else {
      for (let i = 0; i < value.length; i++) {
        scores[value[i]]++; 
      }
      }
    }
  
  /* Leiab kõrgeima skoori ja selle muutuja */
  let highest = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  localStorage.setItem("quizResult", highest);
  /* console.log("Salvestatud tulemus:", highest);
  alert(localStorage.getItem("quizResult")); */
  window.location.href = "viimane.html";
}