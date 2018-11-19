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

document.onkeypress = function (e) {
    keyPressed = e.key.toString();
    // console.log(keyPressed);

    if (currentWord.indexOf(keyPressed) !== -1) {
        // console.log('matching letter');
        for (var j = 0; j < currentWord.length; j++) {

            if (currentWord.charAt(j) === keyPressed) {
                // console.log("match");
                letter.splice(j, 1, keyPressed);
                // console.log("letter", letter);

                document.getElementById(j).textContent = keyPressed;

                if (letter.join("") === currentWord) {

                    document.getElementById('guesses-remaining').textContent = "12";
                    guessesRemaining = 12;
                    document.getElementById('guessed-letters').textContent = " ";
                    lettersGuessed = [];
                    letter = [];
                    currentWord = words[Math.floor(Math.random() * words.length)];
                    wordSpan.innerHTML = " ";

                    for (var i = 0; i < currentWord.length; i++) {
                        letter.push('_');
                        // console.log(i);

                        var span = document.createElement('span')
                        span.id = i;
                        span.textContent = '_';
                        wordSpan.appendChild(span);
                    }

                    wins++;
                    document.getElementById("wins").textContent = wins;
                    alert("Congratulations you've won!");
                }
            }
        }
    } else {

        if (lettersGuessed.indexOf(keyPressed) === -1) {
            lettersGuessed.push(keyPressed);
            document.getElementById('guessed-letters').textContent = lettersGuessed;
            guessesRemaining--;
            document.getElementById('guesses-remaining').textContent = guessesRemaining;


            if (guessesRemaining === 0) {

                document.getElementById('guesses-remaining').textContent = "12";
                guessesRemaining = 12;
                document.getElementById('guessed-letters').textContent = " ";
                lettersGuessed = [];
                letter = [];
                currentWord = words[Math.floor(Math.random() * words.length)];
                wordSpan.innerHTML = " ";

                for (var i = 0; i < currentWord.length; i++) {
                    letter.push('_');
                    // console.log(i);

                    var span = document.createElement('span')
                    span.id = i;
                    span.textContent = '_';
                    wordSpan.appendChild(span);
                }
                
                losses++;
                document.getElementById("losses").textContent = losses;
                alert("You've lost. Try again!");
            }
        }
    }
}
