
const playbutton = document.getElementsByClassName("playbutton")[0];
const invbox = document.getElementsByClassName("invbox")[0];
const result = document.getElementById("resulttext");
const kirjeldus = document.getElementById("kirjeldus");
const videoresult = document.getElementById("videoresult");
const container = document.getElementById("container");
let container_height = container.clientHeight   ;
const resultvalue = localStorage.getItem("quizResult");
var resulttext = null;

/* Selle koodi autoriks on Emil */


/* Määrab tulemuse vastavalt salvestatud väärtusele */
if (resultvalue === "A") {
    changeResult("tuljak");
}
else if (resultvalue === "B") {
    changeResult("kaerajaan");
}
else if (resultvalue === "C") {
    changeResult("reilender");
}
else if (resultvalue === "D") {
    changeResult("oigejavasemba");
}
 if (resulttext == null) {
        result.innerHTML = "SINU TULEMUS ON: ... (sa pole veel küsitlust täitnud)";
        kirjeldus.innerHTML = "Siin kohal oleks tantsu kirjeldus"
    }
else if (resulttext == "tuljak") {
        result.innerHTML = "SINU TULEMUS ON: TULJAK!!";
        kirjeldus.innerHTML = 'Nagu "Tuljak", oled ka sina energiline ja krapsakas. Oled arvatavasti leidnud oma eluarmastuse või aktiivselt seda otsimas. Sinu iga liigutus on kalkuleeritud, kuid samas ülimalt hingestatud. Sa ei karda võtta ette suuri raskuseid. Laskem elada!'

        videoresult.src = "https://www.youtube.com/embed/e5x9wtnkZdg";
    }
else if (resulttext == "kaerajaan") {
        result.innerHTML = "SINU TULEMUS ON: KAERA-JAAN!!";
        kirjeldus.innerHTML = 'Oled lihtsameelne eestlane, kes on mõeldud olema talunik. Sulle meeldib olla rambivalguses, mistõttu kipud vahel liigselt hooplema. Samas on sul sisimas soe süda, mis toob kokku inimesi su ümber'
        
        videoresult.src = "https://www.youtube.com/embed/xwUUq29YR9o?si=67KyBa-u2M6SHz9E";
    }
else if (resulttext == "reilender") {
        result.innerHTML = "SINU TULEMUS ON: REILENDER!!";
        kirjeldus.innerHTML = 'Sulle sobib väga rutiin, kuna suudad leida võlu igapäevastes asjades. Samuti meeldib sulle teha asju oma tempos ja mingil imelikul põhjusel armastad luua silmsidet, vahel isegi tundes, et võiksid oma sõprade silmades uppuda. Karusell on sinu lemmikatraktsioon lõbustuspargis'
        
        videoresult.src = "https://www.youtube.com/embed/jjBwArIE9fQ";
    }
else if (resulttext == "oigejavasemba") {
        result.innerHTML = "SINU TULEMUS ON: OIGE JA VASEMBA!!";
        kirjeldus.innerHTML = 'Sul on hästi palju tutvusi, kuid lähedasi inimesi on vähe. Oled rahulik inimene, kes hindab kvaliteeti üle kvantiteedi. Sulle meeldib käia jalutamas ja mõtiskleda omi mõtteid näiteks oma sõpradest, ümbritsevast loodusest või ilmast. Sul ei lähe mitte kunagi vasak ja parem käsi sassi'
        
        videoresult.src = "https://www.youtube.com/embed/CSzDwH4xJHw";
    }





/* Paneb muutuja õigeks vastusevariandiks */
function changeResult(result_value) {
    resulttext = result_value
}

/* const testbutton = document.getElementById("testbutton");
testbutton.addEventListener("click", function(){
    changeResult("tuljak");
}); */

/* Kuvab peale nupu vajutamist tulemuse ja aktiveerib animatsiooni */
playbutton.addEventListener("click", function(){
   
    visibleAnim()
});


/* Teeb animatsioonid peale nupu vajutamist */
function visibleAnim(){
    
    let start = Date.now();
    let timer = setInterval(function() {
    
    playbutton.style.display = "none";
        
        let timePassed = Date.now() - start;

        //yks sekund animatsiooni (1000ms)
        if (timePassed >= 1000) {
            console.log(container.style.height  )
            clearInterval(timer);
            
            return; 
        }

        draw(timePassed);

}, 20)};


/* Muudab css elementide omadusi aja jooksul */
function draw(timePassed){
    if (invbox.style.display == ""){
        invbox.style.display = "block";
    }; 
    /* console.log(Date.now()); */
    invbox.style.opacity = timePassed/1000;

    /* console.log(parseInt(container.style.height.slice(0, -2))); */
    if (container.clientHeight < container.scrollHeight && container.style.height != "auto") {
        container.style.height = String(container_height + 1.2*timePassed)+"px";
    }
    else {
        container.style.height = "auto";
    }
    
}
