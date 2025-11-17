
const playbutton = document.getElementsByClassName("playbutton")[0];
const testbutton = document.getElementById("testbutton");
const invbox = document.getElementsByClassName("invbox")[0];
const result = document.getElementById("resulttext");
const videoresult = document.getElementById("videoresult")

var resulttext = null;



console.log(playbutton)


function changeResult(result_value) {
    resulttext = result_value
    console.log(resulttext)
}

testbutton.addEventListener("click", function(){
    changeResult("tuljak");
});

playbutton.addEventListener("click", function(){
    console.log(result)
    if (resulttext == null) {
        result.innerHTML = "SINU TULEMUS ON: ... (sa pole veel küsitlust täitnud)";
    }
    else if (resulttext == "tuljak") {
        result.innerHTML = "SINU TULEMUS ON: TULJAK!!";
        videoresult.src = "https://www.youtube.com/embed/e5x9wtnkZdg";
    }
    visibleAnim()
});


function visibleAnim(){

    let start = Date.now();
    let timer = setInterval(function() {
    playbutton.style.display = "none";
        
        let timePassed = Date.now() - start;

        //yks sekund animatsiooni (1000ms)
        if (timePassed >= 1000) {
            
            clearInterval(timer);
            
            return; 
        }

        draw(timePassed);

}, 20)};

function draw(timePassed){
    console.log(invbox.style.display)
    if (invbox.style.display == ""){
        invbox.style.display = "block";
    }; 
    /* console.log(Date.now()); */
    invbox.style.opacity = timePassed/1000;
}