const wordEl = document.getElementById('word');
const wrongLetterEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notifications = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureparts = document.querySelectorAll('.figure-part');

const words = ['tuesday', 'jazz', 'coffee', 'breakfast', 'fuzzy', 'JavaScript', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];

const wrongLetter = [];

function displayWord(){
    wordEl.innerHTML = `
    ${selectedWord
        .split('')
        .map(letter => `
            <span class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `).join('')
    }
    
    `;

    
}

displayWord();