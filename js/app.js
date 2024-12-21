const toggleButtonState = (buttonId, isEnabled) => {
    const $button = document.getElementById(buttonId);

    (isEnabled) ? $button.removeAttribute('disabled') : $button.setAttribute('disabled', 'true');
}

const copyTxt = () => {
    const $texto = document.getElementById("input_txt");
    $texto.select();
    document.execCommand("copy"); 
}

const assignTextElement = (element, text) => {
    const $elementoHTML = document.getElementById(element);
    $elementoHTML.innerHTML = text;
}

const copyTextEcrypted = () => {
    const $textToCopy = document.getElementById("result-text").textContent;
    document.getElementById("input_txt").value = $textToCopy;
    assignTextElement("result-text", "...")
    toggleButtonState("btn_copy", true);
    copyTxt();
}

const encryptionProcess = () => {
    const $inputTxt = document.getElementById("input_txt").value;

    // Verificar si el cuadro de texto está vacío
    if (!$inputTxt.trim()) {
        alert("Ingrese una palabra antes de encriptar.");
        return;
    }

    let encryptedWord = processEncryptedLetter($inputTxt);

    toggleButtonState("btn_copy", true);
    assignTextElement("result-text", encryptedWord);
    assignTextElement("title_content_text", "Texto Encriptado.");
}

const processEncryptedLetter = (inputLetter) => {
    let letter = inputLetter.toLowerCase();
    const listLettersToProcess = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };
    letter = letter.split("");

    letter.forEach((char, index) => {
        Object.entries(listLettersToProcess).forEach(([key, value])=> {
            if (char === key) {
                letter[index] = value;
            }
        });
    });

    document.getElementById("result-image").style.display = "none";

    return letter.join("");
}

const decryptionProcess = () => {
    const $inputTxt = document.getElementById("input_txt").value;

    if (!$inputTxt.trim()) {
        alert("Ingrese una palabra antes de desencriptar.");
        return;
    }

    let decryptedWord = letterDecryptionProcess($inputTxt);

    toggleButtonState("btn_copy", true);
    assignTextElement("result-text", decryptedWord);
    assignTextElement("title_content_text", "Texto Desencriptar")
}

const letterDecryptionProcess = (inputLetter) => {
    let letter = inputLetter.toLowerCase(); 

    const objLettersToProcess = { "e":"enter", "i":"imes", "a": "ai", "o": "ober", "u": "ufat" };

    Object.entries(objLettersToProcess).forEach(([key, value]) => {
        const regex = new RegExp(value, 'g');
        letter = letter.replace(regex, key);
    });

    return letter;
}

const $botonEncriptar = document.getElementById("btn-encriptar"),
$botonDesencriptar = document.getElementById("btn-decrypt"),
$btnCopy = document.getElementById("btn_copy");

$botonEncriptar.onclick = encryptionProcess;
$botonDesencriptar.onclick = decryptionProcess;
$btnCopy.onclick = copyTextEcrypted;