//siema


function IPasekWood() {
    TWood.textContent="00:00:"+x
    PasekWood.style.animation= x+"s infinite pasek linear";
    TimerWood();

}
function TimerWood()    {
    var i=x;
    TWood.textContent="00:00:"+i;
    let IntervalWood=setInterval(i_wood2,1000);
    function i_wood2()  {
        i--; 
        if(i>0) {
        TWood.textContent="00:00:0"+i;
    }
    else    {
        PasekWood.style.animation= "";
        TWood.textContent="00:00:0"+i;
        clearInterval(IntervalWood); }
    }
}

    
class KWood {
    constructor()   {
        this.Wame = "Wood";
        this.Wood = 0;
        this.LvlWood = 0;

    }
}

const PasekWood = document.querySelector("#PasekWood");

const TWood = document.querySelector("#TWood");
const BWood = document.querySelector("#BWood");
var x = 10;