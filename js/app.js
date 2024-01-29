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
    assignTextElement("result-text", "...")
    toggleButtonState("btn_copy", true);
}

function encryptionProcess() {
    let input_txt = document.getElementById("input_txt").value;

    // Verificar si el cuadro de texto está vacío
    if (!input_txt.trim()) {
        alert("Ingrese una palabra antes de encriptar.");
        return;
    }

    let encryptedWord = processEncryptedLetter(input_txt);

    toggleButtonState("btn_copy", true);
    assignTextElement("result-text", encryptedWord);
    assignTextElement("title_content_text", "Texto Encriptado.");
}

function processEncryptedLetter(inputLetter) {
    let letter = inputLetter.toLowerCase();
    let listLettersToProcess = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };
    letter = letter.split("");

    letter.forEach(function (char, index) {
        Object.entries(listLettersToProcess).forEach(function ([key, value]) {
            if (char === key) {
                letter[index] = value;
            }
        });
    });

    document.getElementById("result-image").style.display = "none";

    return letter.join("");
}

function decryptionProcess() {
    let input_txt = document.getElementById("input_txt").value;

    if (!input_txt.trim()) {
        alert("Ingrese una palabra antes de desencriptar.");
        return;
    }

    let decryptedWord = letterDecryptionProcess(input_txt);

    toggleButtonState("btn_copy", true);
    assignTextElement("result-text", decryptedWord);
    assignTextElement("title_content_text", "Texto Desencriptar")
}

function letterDecryptionProcess(inputLetter) {
    let letter = inputLetter.toLowerCase(); 

    let listLettersToProcess = { "e":"enter", "i":"imes", "a": "ai", "o": "ober", "u": "ufat" };

    Object.entries(listLettersToProcess).forEach(function ([key, value]) {
        const regex = new RegExp(value, 'g');
        letter = letter.replace(regex, key);
    });

    return letter;
}
