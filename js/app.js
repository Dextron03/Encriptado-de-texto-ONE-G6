function removeDisabled(element){
    document.getElementById(element).removeAttribute('disabled');
}

function addDisabled(element){
    document.getElementById(element).setAttribute('disabled',"true")
}

function processEncryptedLetter(letter){
    letter = letter.toLowerCase()
    let listLettersToProcess = { "e":"enter", "i":"imes", "a":"ai", "o":"ober", "u":"ufat"};

    Object.entries(listLettersToProcess).forEach(function([key, value]) {
        if(letter === key){
            letter = value
        }
    });

    return letter
}

function assignTextElement(element, text) {
    let elementoHTML = document.getElementById(element);
    elementoHTML.innerHTML = text;
    return;
}

function copyTextEcrypted(){
    let textToCopy = document.getElementById("result-text").textContent;
    document.getElementById("input_txt").value = textToCopy;// Asignar el texto cifrado al área de texto de entrada
    addDisabled("btn_copy")

}

function encryptionProcess(){
    let input_txt = document.getElementById("input_txt").value;
    let lyricsList = []

    for(let letter = 0; letter < input_txt.length; letter++){
        lyricsList.push(processEncryptedLetter(input_txt[letter]));
    }

    let encryptedWord = lyricsList.join("")
    removeDisabled("btn_decrypt")
    removeDisabled("btn_copy")

    assignTextElement("result-text", encryptedWord)
}

function decryptionProcess(){
    
}