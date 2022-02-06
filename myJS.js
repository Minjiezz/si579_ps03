/*
* Excercise 1
* Add style='background-color: #f08080;' inline css style to index.html file in line 19 to makesure the first click to change color workds.
*/

const bkgcolor = document.querySelector('#color-block');
bkgcolor.addEventListener('click', changeColor);

/*
* Then write a function that changes the text and the color inside the div
*
*/
function changeColor(){
    //Write a condition determine what color it should be changed to
    if(bkgcolor.style['background-color'] === 'rgb(240, 128, 128)'){
        bkgcolor.style['background-color'] = '#ffd202';
        //change the background color using JS
        document.getElementById("color-name").innerHTML = "#ffd202";
        //Change the text of the color using the span id color-name
    }
    else{
        bkgcolor.style['background-color'] = 'rgb(240, 128, 128)';
        //change the background color using JS
        document.getElementById("color-name").innerHTML = "#F08080";
        //Change the text of the color using the span id color-name
    };
}

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const convertButton = document.getElementById('convertbtn');
const Fahrenheit = document.getElementById('f-input');
convertButton.addEventListener("click", convertTemp);
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
        Centigrade = (Fahrenheit.value - 32)/9*5;
        console.log(Fahrenheit);
        //Calculate the temperature here
        document.getElementById("c-output").innerHTML = `${Centigrade}`;
        //Send the calculated temperature to HTML
}



//first attempt
// /*
// * Excercise 1
// *
// */
// window.onload = function(){
//     changeColor()
//     convertTemp()
// }
// /*
// * Then write a function that changes the text and the color inside the div
// *
// */
// function changeColor(){
//     const bkgcolor = document.getElementById('color-block');
//     //Write a condition determine what color it should be changed to
//     bkgcolor.addEventListener('click', () => {
//     if(bkgcolor.style.backgroundColor == 'rgb(240, 128, 128)'){
//         bkgcolor.style.backgroundColor = '#ffd202';
//         //change the background color using JS
//         document.getElementById("color-name").innerHTML = "#ffd202";
//         //Change the text of the color using the span id color-name
//     }
//     else{
//         bkgcolor.style.backgroundColor = 'rgb(240, 128, 128)';
//         //change the background color using JS
//         document.getElementById("color-name").innerHTML = "#F08080";
//         //Change the text of the color using the span id color-name
//     }});
// }

// /*
// * For excercise 2, you need to write an event handler for the button id "convertbtn"
// * on mouse click. For best practice use addEventListener.
// *
// */
// const convertButton = document.getElementById('convertbtn');
// const Fahrenheit = document.getElementById('f-input');
// /*
// * Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
// *
// */

// function convertTemp(){
//     convertButton.addEventListener("click", function(){
//         Centigrade = (Fahrenheit.value - 32)/9*5;
//         console.log(Fahrenheit);
//         //Calculate the temperature here
//         document.getElementById("c-output").innerHTML = `${Centigrade}`;
//         //Send the calculated temperature to HTML
//     });
// }


