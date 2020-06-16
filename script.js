const colors =[
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(255, 0, 255)',
    'rgb(0, 255, 255)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)'
];
const squares = document.querySelectorAll('.square');
const displayColor = document.querySelector('#display-color');
const h1Background = document.querySelector('.container-fluid');
const displayMessage = document.querySelector('#message')
const playBtn = document.querySelector('#play-btn');
const easyBtn = document.querySelector('#easy-btn');
const hardBtn = document.querySelector('#hard-btn');
const hardSquares = document.querySelectorAll('.hard');
let pickedColor;
let hardMode = true;
colorGenerator();

// ****************************** Squares click event**********************************************//
squares.forEach(function(e, i){
    e.addEventListener('click',function(){
        if(this.style.backgroundColor == pickedColor){
            squares.forEach(function(e,i){
                e.style.backgroundColor = pickedColor;
            });
            h1Background.style.backgroundColor = pickedColor;
            displayMessage.textContent = 'Correct';
        }
        else {
            this.style.backgroundColor = '#232323';
            displayMessage.textContent = 'Incorrect';
        };
    });
});
//********************************Color generator************************************************ */
function colorGenerator(){
    for(let i = 0; i < squares.length; i++){
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        colors[i] = `rgb(${red}, ${green}, ${blue})`;   
        squares[i].style.backgroundColor = colors[i];
    };
    let pickColorIndex;
    if(hardMode){
        pickColorIndex = Math.floor(Math.random()*6);
    } else {
        pickColorIndex = Math.floor(Math.random()*3);
    };
    pickedColor = colors[pickColorIndex];
    displayColor.textContent = pickedColor.toUpperCase();
}; 
//*****************************Play again button***************************************************** */
playBtn.addEventListener('click', function(){
    colorGenerator();
    displayMessage.textContent = 'Pick a color';
});
//*********************************Hard btn**************************************************************/
hardBtn.addEventListener('click', function(){
    hardSquares.forEach(function(e){
        e.classList.add('square');
    });
    hardMode = true;
    colorGenerator();
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
});
//**********************************easy btn************************************************************ */
easyBtn.addEventListener('click',function(){
    hardSquares.forEach(function(e){
        e.classList.remove('square');
    });
    hardMode = false;
    colorGenerator();
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
});