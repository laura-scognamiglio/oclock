document.addEventListener("DOMContentLoaded", (event) => {

class DigitalClock{
    constructor(element) {
        //prendra un element html et permet de le transformer en
        //objet modifiable
        this.element = element;
    }

    start(){
        this.update();
        //va appeller la fonction à intervals réguliers
        setInterval(() => {
            this.update();
        }, 200);
    }

    update(){
        const parts = this.getTimesParts();
        //s'assure que la valeur a deux caractères. Si non, 
        //padStart() rajoute un 0
        const minuteFormatted = parts.minute.toString().padStart(2, '0');
        const hourFormatted = parts.hour.toString().padStart(2, '0');
        //guillemets templates `` pr passer des variables 
        //permet affichage 09:09; 
        const timeFormatted = `${hourFormatted}:${minuteFormatted}`;
        //si isAm true alors "AM" sinon "PM". ma première ternaire!!!
        const am = parts.isAm ? "am" : "pm";

        // console.log(timeFormatted);

        //les values des elements sefont remplacer par les valeurs formatées. 
        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-pm").textContent = am;
    }

    // methode pour heure en AM/PM
    getTimesParts(){
        const now = new Date();

        return{
            //permet heure en pm ,si heure est false alors ça sera 12 comme valeur, 
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            //boolean 
            isAm: now.getHours() < 12
        };
    }
}

//selection de l'élément via sa classe 
const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

// console.log(clockObject.getTimesParts());
clockObject.start();

});