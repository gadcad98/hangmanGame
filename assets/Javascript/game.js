var words = ['javascript', 'document', 'programming', 'boolean', 'soyboi'];

var guessesRemaining = 12;
var lettersGuessed = [];
var wins = 0;
var losses = 0;

var currentWord = words[Math.floor(Math.random() * words.length)];
// console.log(currentWord);

var wordSpan = document.getElementById('current-word');
wordSpan.innerHTML = "";

var letter = [];

for (var i = 0; i < currentWord.length; i++) {
    letter.push('_');
    // console.log(i);
    
    var span = document.createElement('span')
    span.id = i;
    span.textContent = '_';
    wordSpan.appendChild(span);
}

var keyPressed;

document.onkeypress = function(e) {
    keyPressed = e.key.toString();
    // console.log(keyPressed);

    if (currentWord.indexOf(keyPressed) !== -1) {
        console.log('matching letter');
    }
}