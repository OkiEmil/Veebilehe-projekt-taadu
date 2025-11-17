
const playbutton = document.getElementsByClassName("playbutton")[0];
const invbox = document.getElementsByClassName("invbox")[0];

console.log(playbutton)

playbutton.addEventListener("click", function(){
    console.log("TERE")
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