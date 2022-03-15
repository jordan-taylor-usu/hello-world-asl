// Input test code
const txt1 = document.getElementById('user-input');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function fun1() {
    out1.innerHTML = txt1.value;
}

btn1.addEventListener('click', fun1);
// end test

var count = 0;
const message = 'Hello, world!';
// const message = 'abcdefghijklmnopqrstuvwxyz';
var letters = Array.from(message.replace(/\W/g, ''));

document.title = message;
document.getElementById("letters").innerHTML = message;

function changeSVG() {
    var svgImage = document.getElementById("asl");
    removeAnimation(svgImage);
    var letter = letters[count % letters.length];
    svgImage.src = "images/alphabet/" + letter.toLowerCase() + ".svg";
    svgImage.alt = "asl letter " + letter;
    // highlightLetter1(count);
    highlightLetter2(count);
    count++;
}

// remove animation after first click
function removeAnimation(svgImage) {
    if (svgImage.src != "images/hand-colored-r.svg") {
        svgImage.className = "hand";
    }
}

// highlight the current corresponding letter
function highlightLetter1(count) {
    var colorText = "";
    for (var i = 0; i < letters.length; i++) {
        if (i == count % letters.length) {
            colorText += "<span style=\"color: red;\">" + letters[i] + "</span>"
        } else {
            colorText += letters[i];
        }
    }
    document.getElementById("letters").innerHTML = colorText;
}

// Hard-coded punctuation for "hello, world!"
function highlightLetter2(count) {
    var colorText = "";
    for (var i = 0; i < 5; i++) {
        if (i == count % 10) {
            colorText += "<span style=\"color: red;\">" + letters[i] + "</span>"
        } else {
            colorText += letters[i];
        }
    }
    colorText += ", ";
    for (var i = 5; i < 10; i++) {
        if (i == count % 10) {
            colorText += "<span style=\"color: red;\">" + letters[i] + "</span>"
        } else {
            colorText += letters[i];
        }
    }
    colorText += "!";
    document.getElementById("letters").innerHTML = colorText;
}