
const playbutton = document.getElementsByClassName("playbutton")[0];
const testbutton = document.getElementById("testbutton");
const invbox = document.getElementsByClassName("invbox")[0];
const result = document.getElementById("resulttext");
const videoresult = document.getElementById("videoresult")
const container = document.getElementById("container")
let container_height = container.clientHeight   

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
            console.log(container.style.height  )
            clearInterval(timer);
            
            return; 
        }

        draw(timePassed);

}, 20)};

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