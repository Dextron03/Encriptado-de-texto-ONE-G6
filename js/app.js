function toggleButtonState(buttonId, isEnabled) {
    let button = document.getElementById(buttonId);
    if (isEnabled) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', 'true');
    }
}


function assignTextElement(element, text) {
    let elementoHTML = document.getElementById(element);
    elementoHTML.innerHTML = text;
    return;
}

function copyTextEcrypted() {
    let textToCopy = document.getElementById("result-text").textContent;
    document.getElementById("input_txt").value = textToCopy;
    toggleButtonState("btn_copy", true);
}


function encryptionProcess() {
    let input_txt = document.getElementById("input_txt").value;
    // let lyricsList = [];

    // for (let letter = 0; letter < input_txt.length; letter++) {
    //     lyricsList.push(processEncryptedLetter(input_txt[letter]));
    // }

    // let encryptedWord = lyricsList.join("");
    // toggleButtonState("btn_decrypt", true);
    // toggleButtonState("btn_copy", true);
    // assignTextElement("result-text", encryptedWord);
}

function decryptionProcess() {
    let input_txt = document.getElementById("input_txt").value;
    // let lyricsList = [];

    // for (let letter = 0; letter < input_txt.length; letter++) {
    //     lyricsList.push(letterDecryptionProcess(input_txt[letter]));
    // }

    // let decryptedWord = lyricsList.join("");

    // toggleButtonState("btn_copy", true);
    // assignTextElement("result-text", decryptedWord);
}

function processEncryptedLetter(letter) {
    // letter = letter.toLowerCase();
    // let listLettersToProcess = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

    // Object.entries(listLettersToProcess).forEach(function ([key, value]) {
    //     if (letter === key) {
    //         letter = value;
    //     }
    // });

    // return letter;
}

function letterDecryptionProcess(letter) {
    // letter = letter.toLowerCase();
    // let listLettersToProcess = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

    // // Invertimos las claves y valores para facilitar la búsqueda inversa
    // let invertedList = {};
    // Object.entries(listLettersToProcess).forEach(([key, value]) => {
    //     invertedList[value] = key;
    // });

    // return invertedList[letter] || letter;

}
