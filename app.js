//Model
let isGameActive = true;
let kaffometer = 4;
let banana = 0;
const images = [
    'https://www.toramo.games/img/battery0.png',
    'https://www.toramo.games/img/battery25.png',
    'https://www.toramo.games/img/battery50.png',
    'https://www.toramo.games/img/battery75.png',
    'https://www.toramo.games/img/battery100.png'];
const img2 = [
    'https://cdn.discordapp.com/attachments/1135484613872062464/1146725210725302352/Dead.png',
    'https://murphysmesshall.files.wordpress.com/2017/10/cf3fbb9b8c9baa8fafcccdc551545cf4-monday-face-garfield-pictures.jpg',
    'https://cdn.discordapp.com/attachments/1135484613872062464/1146728897405259796/What.png',
    'https://cdn.discordapp.com/attachments/1135484613872062464/1146727055166296184/Give_more.png',
    'https://www.nicepng.com/png/detail/227-2271477_garfield-characters-logo-vector-happy-garfield.png',
];
const img3 = [
    'https://cdn.discordapp.com/attachments/1135484613872062464/1146782854299267182/bananAnsikt_transparent.png',
];


updateView();
const coffeeInterval = setInterval(coffeeDrain, 1000);
if (kaffometer < 0) {
    clearInterval(coffeeInterval);
}

//View
function updateView() {
    document.getElementById('app').innerHTML =  /*HTML*/ ` 
    <h1>NEED COFFEE</h1>
    <div id="display">
        <div id="imgContainer">
            <img id="img1" src="${img2[4]}">
        </div>
    
        <div id="kaffeContainer">
            <img id="kaffe" src=" ${images[4]} ">
        </div>
        <div id="bananaContainer">
            <img id="kaffe" src=" ${img3[0]} ">
        </div>
    </div>
    <button onclick="kaffeRefill()">Give coffee</button>
    <button onclick="bananPower()">Need banana NOW!</button>
    
    `;
}


//Controller

function showKaffometer(index) {
    if (index >= 0 && index <= 4) {
        document.getElementById('kaffeContainer').innerHTML = /*HTML*/`<img id="kaffe" src=" ${images[index]} ">`;
        document.getElementById('imgContainer').innerHTML = /*HTML*/`<img id="img1" src=" ${img2[index]} ">`;
        document.getElementById('bananaContainer').innerHTML = /*HTML*/`<img id="img3" src=" ${img3[0]} ">`;
    }
    }

function bananPower(){
{
    kaffometer = 4;
}
const coffeeInterval = setInterval(coffeeDrain, 1000);  // Eternal life :)
showKaffometer(kaffometer);
 } 
 

function kaffeRefill() {
    if (kaffometer > 0) {
        kaffometer++;
        if (kaffometer >= 4) {
            kaffometer = 4;
        }
        showKaffometer(kaffometer);
    }
}

function coffeeDrain() {
    kaffometer--;
    updateView();
    showKaffometer(kaffometer);
    //console.log("Kaffometer: " + kaffometer);
    if (kaffometer == 0) {
        clearInterval(coffeeInterval);  // Stop the timer at "dead pus"
        //   alert ("Game over. Dead pus");
    }
}

