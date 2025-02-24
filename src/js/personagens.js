const selectedLeon = document.getElementById("Leon");
const caixaLeon = document.getElementById("leon");
let img1 = document.getElementById("image1");
let img2 = document.getElementById("image2");
let visivel = true;



window.onload = function aoAbrir () {

    let caixaVideo1 = document.querySelector("botoes1-videos");

    document.querySelector(".botoes1-videos").style.backgroundColor = "rgb(187, 16, 32)";
    document.querySelector(".botoes1-videos").style.transform = "scaley(1.5)";

    let video4 = document.querySelector("caixa-maleta");
    document.querySelector(".botoes5-videos").style.backgroundColor = "rgb(187, 16, 32)";
    document.querySelector(".botoes5-videos").style.transform = "scaley(1.5)";


    selectedLeon.classList.remove("grayscale");
    selectedLeon.classList.add("hover");

    


    

setTimeout(() => {


    img1.classList.add("hidden");

    

    setTimeout(() => {
        img1.classList.remove("hidden");


        img2.classList.remove("hidden");



    

    }, 6000);

    img1.classList.add("hidden");
    img2.classList.remove("hidden");
    




}, 6000);

setInterval(repetirLeon, 14000);

  
}








function repetirLeon () {



setTimeout(() => {


    img1.classList.add("hidden");


    setTimeout(() => {
        img1.classList.remove("hidden");


        img2.classList.remove("hidden");



    

    }, 6000);

    img1.classList.add("hidden");
    img2.classList.remove("hidden");
    




}, 6000);



setInterval(repetirLeon, 14000);





}





function clicarLeon() {
    caixaAshley.style.display = 'none';
    caixaGanado.style.display = 'none';
    caixaSalvador.style.display = 'none';
    caixaBitorez.style.display = 'none';
    caixaSalazar.style.display = 'none';
    caixaHunnigan.style.display = 'none';
    caixaMercador.style.display = 'none';
    caixaKrauser.style.display = 'none';
    caixaSaddler.style.display = 'none';
    caixaFanatico.style.display = 'none';
    caixaAda.style.display = 'none';

    selectedFanatico.classList.add("grayscale");
    selectedFanatico.classList.remove("hover");

    selectedSaddler.classList.add("grayscale");
    selectedSaddler.classList.remove("hover");

    selectedKrauser.classList.add("grayscale");
    selectedKrauser.classList.remove("hover");

    selectedMercador.classList.add("grayscale");
    selectedMercador.classList.remove("hover");


    selectedHunnigan.classList.add("grayscale");
    selectedHunnigan.classList.remove("hover");

    selectedSalazar.classList.add("grayscale");
    selectedSalazar.classList.remove("hover");
    


    selectedBitorez.classList.add("grayscale");
    selectedBitorez.classList.remove("hover");

    selectedSalvador.classList.add("grayscale");
    selectedSalvador.classList.remove("hover");
    
    selectedGanado.classList.add("grayscale");
    selectedGanado.classList.remove("hover");

    selectedAshley.classList.add("grayscale");
    selectedAshley.classList.remove("hover");

    selectedAda.classList.add("grayscale");
    selectedAda.classList.remove("hover");


    selectedLeon.classList.remove("grayscale");
    selectedLeon.classList.add("hover");

    selectedLuis.classList.add("grayscale");
    selectedLuis.classList.remove("hover");
    caixaLuis.style.display = 'none';

    caixaLeon.style.display = 'block'


    repetirLeon ()


}




const selectedAshley = document.getElementById("Ashley");
const caixaAshley = document.getElementById("ashley");
let img3 = document.getElementById("image3");
let img4 = document.getElementById("image4");
let visivel2 = true;



function clicarAshley() {

    caixaLeon.style.display = 'none';
    caixaGanado.style.display = 'none';
    caixaSalvador.style.display = 'none';
    caixaBitorez.style.display = 'none';
    caixaSalazar.style.display = 'none';
    caixaHunnigan.style.display = 'none';
    caixaMercador.style.display = 'none';
    caixaKrauser.style.display = 'none';
    caixaSaddler.style.display = 'none';
    caixaFanatico.style.display = 'none';
    caixaAda.style.display = 'none';

    selectedFanatico.classList.add("grayscale");
    selectedFanatico.classList.remove("hover");

    selectedSaddler.classList.add("grayscale");
    selectedSaddler.classList.remove("hover");

    selectedKrauser.classList.add("grayscale");
    selectedKrauser.classList.remove("hover");

    selectedMercador.classList.add("grayscale");
    selectedMercador.classList.remove("hover");


    selectedHunnigan.classList.add("grayscale");
    selectedHunnigan.classList.remove("hover");

    selectedSalazar.classList.add("grayscale");
    selectedSalazar.classList.remove("hover");


    selectedBitorez.classList.add("grayscale");
    selectedBitorez.classList.remove("hover");

    selectedSalvador.classList.add("grayscale");
    selectedSalvador.classList.remove("hover");
    
    selectedGanado.classList.add("grayscale");
    selectedGanado.classList.remove("hover");

    selectedLeon.classList.add("grayscale");
    selectedLeon.classList.remove("hover");

    selectedAda.classList.add("grayscale");
    selectedAda.classList.remove("hover");


    


    
    selectedAshley.classList.remove("grayscale");
    selectedAshley.classList.add("hover");

    selectedLuis.classList.add("grayscale");
    selectedLuis.classList.remove("hover");
    caixaLuis.style.display = 'none';





    caixaAshley.style.display = 'block'

    repetirAshley()


}


function repetirAshley () {


    
    
    setTimeout(() => {
    
    
        img3.classList.add("hidden");
    
    
        setTimeout(() => {
            img3.classList.remove("hidden");
    
    
            img4.classList.remove("hidden");
    
    
    
        
    
        }, 6000);
    
        img3.classList.add("hidden");
        img4.classList.remove("hidden");
        
    
    
    
    
    }, 6000);

    setInterval(repetirAshley, 14000);
    
}




const selectedLuis = document.getElementById("Luis");
const caixaLuis = document.getElementById("luis");
let img5 = document.getElementById("image5");
let img6 = document.getElementById("image6");
let visivel3 = true;



function clicarluis() {

    caixaLeon.style.display = 'none';
    caixaAshley.style.display = 'none';
    caixaGanado.style.display = 'none';
    caixaAda.style.display = 'none';
    caixaSalvador.style.display = 'none';
    caixaBitorez.style.display = 'none';
    caixaSalazar.style.display = 'none';
    caixaHunnigan.style.display = 'none';
    caixaMercador.style.display = 'none';
    caixaKrauser.style.display = 'none';
    caixaSaddler.style.display = 'none';
    caixaFanatico.style.display = 'none';

    selectedFanatico.classList.add("grayscale");
    selectedFanatico.classList.remove("hover");

    selectedSaddler.classList.add("grayscale");
    selectedSaddler.classList.remove("hover");

    selectedKrauser.classList.add("grayscale");
    selectedKrauser.classList.remove("hover");

    selectedMercador.classList.add("grayscale");
    selectedMercador.classList.remove("hover");


    selectedHunnigan.classList.add("grayscale");
    selectedHunnigan.classList.remove("hover");

    selectedSalazar.classList.add("grayscale");
    selectedSalazar.classList.remove("hover");


    selectedBitorez.classList.add("grayscale");
    selectedBitorez.classList.remove("hover");

    selectedSalvador.classList.add("grayscale");
    selectedSalvador.classList.remove("hover");
    
    selectedGanado.classList.add("grayscale");
    selectedGanado.classList.remove("hover");

    selectedAshley.classList.add("grayscale");
    selectedAshley.classList.remove("hover");

    selectedLeon.classList.add("grayscale");
    selectedLeon.classList.remove("hover");

    selectedAda.classList.add("grayscale");
    selectedAda.classList.remove("hover");


    selectedLuis.classList.remove("grayscale");
    selectedLuis.classList.add("hover");
    

    caixaLuis.style.display = 'block';

    


    
    





    

    repetirLuis()


}


function repetirLuis () {


    
    
    setTimeout(() => {
    
    
        img5.classList.add("hidden");
    
    
        setTimeout(() => {
            img5.classList.remove("hidden");
    
    
            img6.classList.remove("hidden");
    
    
    
        
    
        }, 6000);
    
        img5.classList.add("hidden");
        img6.classList.remove("hidden");
        
    
    
    
    
    }, 6000);

    setInterval(repetirLuis, 14000);
    
}


const selectedAda = document.getElementById("Ada");
const caixaAda = document.getElementById("ada");
let img7 = document.getElementById("image7");
let visivel4 = true;




function clicarAda() {

    caixaLeon.style.display = 'none';
    caixaAshley.style.display = 'none';
    caixaLuis.style.display = 'none';
    caixaGanado.style.display = 'none';
    caixaSalvador.style.display = 'none';
    caixaBitorez.style.display = 'none';
    caixaSalazar.style.display = 'none';
    caixaHunnigan.style.display = 'none';
    caixaMercador.style.display = 'none';
    caixaKrauser.style.display = 'none';
    caixaSaddler.style.display = 'none';
    caixaFanatico.style.display = 'none';

    selectedFanatico.classList.add("grayscale");
    selectedFanatico.classList.remove("hover");

    selectedSaddler.classList.add("grayscale");
    selectedSaddler.classList.remove("hover");

    selectedKrauser.classList.add("grayscale");
    selectedKrauser.classList.remove("hover");

    selectedMercador.classList.add("grayscale");
    selectedMercador.classList.remove("hover");


    selectedHunnigan.classList.add("grayscale");
    selectedHunnigan.classList.remove("hover");

    selectedSalazar.classList.add("grayscale");
    selectedSalazar.classList.remove("hover");


    selectedBitorez.classList.add("grayscale");
    selectedBitorez.classList.remove("hover");

    selectedSalvador.classList.add("grayscale");
    selectedSalvador.classList.remove("hover");
    
    selectedGanado.classList.add("grayscale");
    selectedGanado.classList.remove("hover");

    selectedAshley.classList.add("grayscale");
    selectedAshley.classList.remove("hover");

    selectedLeon.classList.add("grayscale");
    selectedLeon.classList.remove("hover");


    selectedLuis.classList.add("grayscale");
    selectedLuis.classList.remove("hover");



    selectedAda.classList.remove("grayscale");
    selectedAda.classList.add("hover");


    caixaAda.style.display = 'block';



}







const selectedGanado = document.getElementById("Ganado");
const caixaGanado = document.getElementById("ganado");
let img8 = document.getElementById("image8");
let img9 = document.getElementById("image9");
let visivel5 = true;



function clicarGanado() {

    caixaLeon.style.display = 'none';
    caixaAshley.style.display = 'none';
    caixaLuis.style.display = 'none';
    caixaAda.style.display = 'none';
    caixaSalvador.style.display = 'none';
    caixaBitorez.style.display = 'none';
    caixaSalazar.style.display = 'none';
    caixaHunnigan.style.display = 'none';
    caixaMercador.style.display = 'none';
    caixaKrauser.style.display = 'none';
    caixaSaddler.style.display = 'none';
    caixaFanatico.style.display = 'none';

    selectedFanatico.classList.add("grayscale");
    selectedFanatico.classList.remove("hover");

    selectedSaddler.classList.add("grayscale");
    selectedSaddler.classList.remove("hover");

    selectedKrauser.classList.add("grayscale");
    selectedKrauser.classList.remove("hover");

    selectedMercador.classList.add("grayscale");
    selectedMercador.classList.remove("hover");


    selectedHunnigan.classList.add("grayscale");
    selectedHunnigan.classList.remove("hover");

    selectedSalazar.classList.add("grayscale");
    selectedSalazar.classList.remove("hover");


    selectedBitorez.classList.add("grayscale");
    selectedBitorez.classList.remove("hover");

    selectedSalvador.classList.add("grayscale");
    selectedSalvador.classList.remove("hover");

    selectedAshley.classList.add("grayscale");
    selectedAshley.classList.remove("hover");

    selectedLeon.classList.add("grayscale");
    selectedLeon.classList.remove("hover");

    selectedAda.classList.add("grayscale");
    selectedAda.classList.remove("hover");

    selectedLuis.classList.add("grayscale");
    selectedLuis.classList.remove("hover");

    selectedAda.classList.add("grayscale");
    selectedAda.classList.remove("hover");


    selectedGanado.classList.remove("grayscale");
    selectedGanado.classList.add("hover");



    caixaGanado.style.display = 'block';
    

    

    


    
    





    

    repetirGanado()


}


function repetirGanado () {


    
    
    setTimeout(() => {
    
    
        img58.classList.add("hidden");
    
    
        setTimeout(() => {
            img8.classList.remove("hidden");
    
    
            img9.classList.remove("hidden");
    
    
    
        
    
        }, 6000);
    
        img8.classList.add("hidden");
        img9.classList.remove("hidden");
        
    
    
    
    
    }, 6000);

    setInterval(repetirGanado, 14000);
    
}






const selectedSalvador = document.getElementById("Salvador");
const caixaSalvador = document.getElementById("salvador");
let img10 = document.getElementById("image10");
let visivel6 = true;




function clicarSalvador() {

    caixaLeon.style.display = 'none';
    caixaAshley.style.display = 'none';
    caixaLuis.style.display = 'none';
    caixaAda.style.display = 'none';
    caixaGanado.style.display = 'none';
    caixaBitorez.style.display = 'none';
    caixaSalazar.style.display = 'none';
    caixaHunnigan.style.display = 'none';
    caixaMercador.style.display = 'none';
    caixaKrauser.style.display = 'none';
    caixaSaddler.style.display = 'none';
    caixaFanatico.style.display = 'none';

    selectedFanatico.classList.add("grayscale");
    selectedFanatico.classList.remove("hover");

    selectedSaddler.classList.add("grayscale");
    selectedSaddler.classList.remove("hover");

    selectedKrauser.classList.add("grayscale");
    selectedKrauser.classList.remove("hover");

    selectedMercador.classList.add("grayscale");
    selectedMercador.classList.remove("hover");


    selectedHunnigan.classList.add("grayscale");
    selectedHunnigan.classList.remove("hover");

    selectedSalazar.classList.add("grayscale");
    selectedSalazar.classList.remove("hover");


    selectedBitorez.classList.add("grayscale");
    selectedBitorez.classList.remove("hover");
    
    selectedGanado.classList.add("grayscale");
    selectedGanado.classList.remove("hover");

    selectedAshley.classList.add("grayscale");
    selectedAshley.classList.remove("hover");

    selectedLeon.classList.add("grayscale");
    selectedLeon.classList.remove("hover");


    selectedLuis.classList.add("grayscale");
    selectedLuis.classList.remove("hover");

    selectedAda.classList.remove("grayscale");
    selectedAda.classList.add("hover");

    selectedAda.classList.add("grayscale");
    selectedAda.classList.remove("hover");


    selectedSalvador.classList.remove("grayscale");
    selectedSalvador.classList.add("hover");


    caixaSalvador.style.display = 'block';



}






const selectedBitorez = document.getElementById("Bitorez");
const caixaBitorez = document.getElementById("bitorez");
let img11 = document.getElementById("image11");
let visivel7 = true;




function clicarBitorez() {

    caixaLeon.style.display = 'none';
    caixaAshley.style.display = 'none';
    caixaLuis.style.display = 'none';
    caixaAda.style.display = 'none';
    caixaGanado.style.display = 'none';
    caixaSalvador.style.display = 'none';
    caixaSalazar.style.display = 'none';
    caixaHunnigan.style.display = 'none';
    caixaMercador.style.display = 'none';
    caixaKrauser.style.display = 'none';
    caixaSaddler.style.display = 'none';
    caixaFanatico.style.display = 'none';

    selectedFanatico.classList.add("grayscale");
    selectedFanatico.classList.remove("hover");

    selectedSaddler.classList.add("grayscale");
    selectedSaddler.classList.remove("hover");

    selectedKrauser.classList.add("grayscale");
    selectedKrauser.classList.remove("hover");

    selectedMercador.classList.add("grayscale");
    selectedMercador.classList.remove("hover");


    selectedHunnigan.classList.add("grayscale");
    selectedHunnigan.classList.remove("hover");

    selectedSalazar.classList.add("grayscale");
    selectedSalazar.classList.remove("hover");
    
    selectedGanado.classList.add("grayscale");
    selectedGanado.classList.remove("hover");

    selectedAshley.classList.add("grayscale");
    selectedAshley.classList.remove("hover");

    selectedLeon.classList.add("grayscale");
    selectedLeon.classList.remove("hover");


    selectedLuis.classList.add("grayscale");
    selectedLuis.classList.remove("hover");

    selectedAda.classList.remove("grayscale");
    selectedAda.classList.add("hover");

    selectedAda.classList.add("grayscale");
    selectedAda.classList.remove("hover");

    selectedSalvador.classList.add("grayscale");
    selectedSalvador.classList.remove("hover");




    selectedBitorez.classList.remove("grayscale");
    selectedBitorez.classList.add("hover");


    caixaBitorez.style.display = 'block';


}






const selectedSalazar = document.getElementById("Salazar");
const caixaSalazar = document.getElementById("salazar");
let img12 = document.getElementById("image12");
let img13 = document.getElementById("image13");
let visivel8 = true;



function clicarSalazar() {

    caixaLeon.style.display = 'none';
    caixaAshley.style.display = 'none';
    caixaGanado.style.display = 'none';
    caixaAda.style.display = 'none';
    caixaSalvador.style.display = 'none';
    caixaBitorez.style.display = 'none';
    caixaLuis.style.display = 'none';
    caixaHunnigan.style.display = 'none';
    caixaMercador.style.display = 'none';
    caixaKrauser.style.display = 'none';
    caixaSaddler.style.display = 'none';
    caixaFanatico.style.display = 'none';

    selectedFanatico.classList.add("grayscale");
    selectedFanatico.classList.remove("hover");

    selectedSaddler.classList.add("grayscale");
    selectedSaddler.classList.remove("hover");

    selectedKrauser.classList.add("grayscale");
    selectedKrauser.classList.remove("hover");

    selectedMercador.classList.add("grayscale");
    selectedMercador.classList.remove("hover");


    selectedHunnigan.classList.add("grayscale");
    selectedHunnigan.classList.remove("hover");


    selectedBitorez.classList.add("grayscale");
    selectedBitorez.classList.remove("hover");

    selectedSalvador.classList.add("grayscale");
    selectedSalvador.classList.remove("hover");
    
    selectedGanado.classList.add("grayscale");
    selectedGanado.classList.remove("hover");

    selectedAshley.classList.add("grayscale");
    selectedAshley.classList.remove("hover");

    selectedLeon.classList.add("grayscale");
    selectedLeon.classList.remove("hover");

    selectedAda.classList.add("grayscale");
    selectedAda.classList.remove("hover");


    selectedLuis.classList.add("grayscale");
    selectedLuis.classList.remove("hover");


    selectedSalazar.classList.remove("grayscale");
    selectedSalazar.classList.add("hover");
    

    caixaSalazar.style.display = 'block';

    


    
    





    

    repetirSalazar()


}


function repetirSalazar () {


    
    
    setTimeout(() => {
    
    
        img12.classList.add("hidden");
    
    
        setTimeout(() => {
            img12.classList.remove("hidden");
    
    
            img13.classList.remove("hidden");
    
    
    
        
    
        }, 6000);
    
        img12.classList.add("hidden");
        img13.classList.remove("hidden");
        
    
    
    
    
    }, 6000);

    setInterval(repetirSalazar, 14000);
    
}





const selectedHunnigan = document.getElementById("Hunnigan");
const caixaHunnigan = document.getElementById("hunnigan");
let img14 = document.getElementById("image14");
let visivel9 = true;




function clicarHunnigan() {

    caixaLeon.style.display = 'none';
    caixaAshley.style.display = 'none';
    caixaLuis.style.display = 'none';
    caixaGanado.style.display = 'none';
    caixaSalvador.style.display = 'none';
    caixaBitorez.style.display = 'none';
    caixaSalazar.style.display = 'none';
    caixaMercador.style.display = 'none';
    caixaKrauser.style.display = 'none';
    caixaSaddler.style.display = 'none';
    caixaFanatico.style.display = 'none';
    caixaAda.style.display = 'none';

    selectedAda.classList.add("grayscale");
    selectedAda.classList.remove("hover");

    selectedFanatico.classList.add("grayscale");
    selectedFanatico.classList.remove("hover");

    selectedSaddler.classList.add("grayscale");
    selectedSaddler.classList.remove("hover");

    selectedKrauser.classList.add("grayscale");
    selectedKrauser.classList.remove("hover");

    selectedMercador.classList.add("grayscale");
    selectedMercador.classList.remove("hover");

    selectedSalazar.classList.add("grayscale");
    selectedSalazar.classList.remove("hover");


    selectedBitorez.classList.add("grayscale");
    selectedBitorez.classList.remove("hover");

    selectedSalvador.classList.add("grayscale");
    selectedSalvador.classList.remove("hover");
    
    selectedGanado.classList.add("grayscale");
    selectedGanado.classList.remove("hover");

    selectedAshley.classList.add("grayscale");
    selectedAshley.classList.remove("hover");

    selectedLeon.classList.add("grayscale");
    selectedLeon.classList.remove("hover");


    selectedLuis.classList.add("grayscale");
    selectedLuis.classList.remove("hover");



    selectedHunnigan.classList.remove("grayscale");
    selectedHunnigan.classList.add("hover");


    caixaHunnigan.style.display = 'block';


}






const selectedMercador = document.getElementById("Mercador");
const caixaMercador = document.getElementById("mercador");
let img15 = document.getElementById("image14");
let visivel10 = true;




function clicarMercador() {

    caixaLeon.style.display = 'none';
    caixaAshley.style.display = 'none';
    caixaLuis.style.display = 'none';
    caixaGanado.style.display = 'none';
    caixaSalvador.style.display = 'none';
    caixaBitorez.style.display = 'none';
    caixaSalazar.style.display = 'none';
    caixaKrauser.style.display = 'none';
    caixaSaddler.style.display = 'none';
    caixaFanatico.style.display = 'none';
    caixaHunnigan.style.display = 'none';
    caixaAda.style.display = 'none';

    selectedAda.classList.add("grayscale");
    selectedAda.classList.remove("hover");

    selectedHunnigan.classList.add("grayscale");
    selectedHunnigan.classList.remove("hover");

    selectedFanatico.classList.add("grayscale");
    selectedFanatico.classList.remove("hover");

    selectedSaddler.classList.add("grayscale");
    selectedSaddler.classList.remove("hover");

    selectedKrauser.classList.add("grayscale");
    selectedKrauser.classList.remove("hover");

    selectedSalazar.classList.add("grayscale");
    selectedSalazar.classList.remove("hover");


    selectedBitorez.classList.add("grayscale");
    selectedBitorez.classList.remove("hover");

    selectedSalvador.classList.add("grayscale");
    selectedSalvador.classList.remove("hover");
    
    selectedGanado.classList.add("grayscale");
    selectedGanado.classList.remove("hover");

    selectedAshley.classList.add("grayscale");
    selectedAshley.classList.remove("hover");

    selectedLeon.classList.add("grayscale");
    selectedLeon.classList.remove("hover");


    selectedLuis.classList.add("grayscale");
    selectedLuis.classList.remove("hover");



    selectedMercador.classList.remove("grayscale");
    selectedMercador.classList.add("hover");


    caixaMercador.style.display = 'block';


}






const selectedKrauser = document.getElementById("Krauser");
const caixaKrauser = document.getElementById("krauser");
let img16 = document.getElementById("image16");
let img17 = document.getElementById("image17");
let visivel11 = true;



function clicarKrauser() {

    caixaLeon.style.display = 'none';
    caixaAshley.style.display = 'none';
    caixaGanado.style.display = 'none';
    caixaAda.style.display = 'none';
    caixaSalvador.style.display = 'none';
    caixaBitorez.style.display = 'none';
    caixaLuis.style.display = 'none';
    caixaHunnigan.style.display = 'none';
    caixaSaddler.style.display = 'none';
    caixaFanatico.style.display = 'none';
    caixaMercador.style.display = 'none';
    caixaSalazar.style.display = 'none';

    selectedSalazar.classList.add("grayscale");
    selectedSalazar.classList.remove("hover");
   
    selectedMercador.classList.add("grayscale");
    selectedMercador.classList.remove("hover");

    selectedFanatico.classList.add("grayscale");
    selectedFanatico.classList.remove("hover");

    selectedSaddler.classList.add("grayscale");
    selectedSaddler.classList.remove("hover");


    selectedHunnigan.classList.add("grayscale");
    selectedHunnigan.classList.remove("hover");


    selectedBitorez.classList.add("grayscale");
    selectedBitorez.classList.remove("hover");

    selectedSalvador.classList.add("grayscale");
    selectedSalvador.classList.remove("hover");
    
    selectedGanado.classList.add("grayscale");
    selectedGanado.classList.remove("hover");

    selectedAshley.classList.add("grayscale");
    selectedAshley.classList.remove("hover");

    selectedLeon.classList.add("grayscale");
    selectedLeon.classList.remove("hover");

    selectedAda.classList.add("grayscale");
    selectedAda.classList.remove("hover");


    selectedLuis.classList.add("grayscale");
    selectedLuis.classList.remove("hover");


    selectedKrauser.classList.remove("grayscale");
    selectedKrauser.classList.add("hover");
    

    caixaKrauser.style.display = 'block';

       

    repetirKrauser()


}


function repetirKrauser () {


    
    
    setTimeout(() => {
    
    
        img16.classList.add("hidden");
    
    
        setTimeout(() => {
            img16.classList.remove("hidden");
    
    
            img17.classList.remove("hidden");
    
    
    
        
    
        }, 6000);
    
        img16.classList.add("hidden");
        img17.classList.remove("hidden");
        
    
    
    
    
    }, 6000);

    setInterval(repetirKrauser, 14000);
    
}






const selectedSaddler = document.getElementById("Saddler");
const caixaSaddler = document.getElementById("saddler");
let img18 = document.getElementById("image18");
let img19 = document.getElementById("image19");
let visivel12 = true;



function clicarSaddler() {

    caixaLeon.style.display = 'none';
    caixaAshley.style.display = 'none';
    caixaGanado.style.display = 'none';
    caixaAda.style.display = 'none';
    caixaSalvador.style.display = 'none';
    caixaBitorez.style.display = 'none';
    caixaLuis.style.display = 'none';
    caixaHunnigan.style.display = 'none';
    caixaFanatico.style.display = 'none';
    caixaKrauser.style.display = 'none';
    caixaMercador.style.display = 'none';
    caixaSalazar.style.display = 'none';

    selectedSalazar.classList.add("grayscale");
    selectedSalazar.classList.remove("hover");
   
    selectedMercador.classList.add("grayscale");
    selectedMercador.classList.remove("hover");

    selectedKrauser.classList.add("grayscale");
    selectedKrauser.classList.remove("hover");

    selectedFanatico.classList.add("grayscale");
    selectedFanatico.classList.remove("hover");


    selectedHunnigan.classList.add("grayscale");
    selectedHunnigan.classList.remove("hover");


    selectedBitorez.classList.add("grayscale");
    selectedBitorez.classList.remove("hover");

    selectedSalvador.classList.add("grayscale");
    selectedSalvador.classList.remove("hover");
    
    selectedGanado.classList.add("grayscale");
    selectedGanado.classList.remove("hover");

    selectedAshley.classList.add("grayscale");
    selectedAshley.classList.remove("hover");

    selectedLeon.classList.add("grayscale");
    selectedLeon.classList.remove("hover");

    selectedAda.classList.add("grayscale");
    selectedAda.classList.remove("hover");


    selectedLuis.classList.add("grayscale");
    selectedLuis.classList.remove("hover");


    selectedSaddler.classList.remove("grayscale");
    selectedSaddler.classList.add("hover");
    

    caixaSaddler.style.display = 'block';

    


    
    





    

    repetirSaddler()


}


function repetirSaddler () {


    
    
    setTimeout(() => {
    
    
        img18.classList.add("hidden");
    
    
        setTimeout(() => {
            img18.classList.remove("hidden");
    
    
            img19.classList.remove("hidden");
    
    
    
        
    
        }, 6000);
    
        img18.classList.add("hidden");
        img19.classList.remove("hidden");
        
    
    
    
    
    }, 6000);

    setInterval(repetirSaddler, 14000);
    
}







const selectedFanatico = document.getElementById("Fanatico");
const caixaFanatico = document.getElementById("fanatico");
let img20 = document.getElementById("image20");
let visivel13 = true;




function clicarFanatico() {

    caixaLeon.style.display = 'none';
    caixaAshley.style.display = 'none';
    caixaLuis.style.display = 'none';
    caixaGanado.style.display = 'none';
    caixaSalvador.style.display = 'none';
    caixaBitorez.style.display = 'none';
    caixaSalazar.style.display = 'none';
    caixaKrauser.style.display = 'none';
    caixaSaddler.style.display = 'none';
    caixaHunnigan.style.display = 'none';
    caixaMercador.style.display = 'none';
    caixaAda.style.display = 'none';

    selectedAda.classList.add("grayscale");
    selectedAda.classList.remove("hover");
   
    selectedMercador.classList.add("grayscale");
    selectedMercador.classList.remove("hover");

    selectedHunnigan.classList.add("grayscale");
    selectedHunnigan.classList.remove("hover");

    selectedSaddler.classList.add("grayscale");
    selectedSaddler.classList.remove("hover");

    selectedKrauser.classList.add("grayscale");
    selectedKrauser.classList.remove("hover");

    selectedSalazar.classList.add("grayscale");
    selectedSalazar.classList.remove("hover");


    selectedBitorez.classList.add("grayscale");
    selectedBitorez.classList.remove("hover");

    selectedSalvador.classList.add("grayscale");
    selectedSalvador.classList.remove("hover");
    
    selectedGanado.classList.add("grayscale");
    selectedGanado.classList.remove("hover");

    selectedAshley.classList.add("grayscale");
    selectedAshley.classList.remove("hover");

    selectedLeon.classList.add("grayscale");
    selectedLeon.classList.remove("hover");


    selectedLuis.classList.add("grayscale");
    selectedLuis.classList.remove("hover");



    selectedFanatico.classList.remove("grayscale");
    selectedFanatico.classList.add("hover");


    caixaFanatico.style.display = 'block';


}