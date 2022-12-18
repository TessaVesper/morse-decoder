const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const str = expr.match(/.{1,10}/g);
    let decodedArr = [];
    for (let word of str) {
        let letter = word.match(/.{1,2}/g);
        let completeWord = [];
        for (i of letter) {
            if (i === '10') {
                completeWord.push('.');
            } else if (i === '11') {
                completeWord.push('-');
            }
    }
    decodedArr.push(completeWord);
}

    let decodedStr = [];
    for (let decodedWord of decodedArr) {
        if (decodedWord.length === 0) {
            decodedStr.push(' ');
        }
        for (const [key, value] of Object.entries(MORSE_TABLE)) {
            if (decodedWord.length === key.length && decodedWord.join('') === key) {
                decodedStr.push(value);
            } 
        }
    }
    return decodedStr.join('');
    }

module.exports = {
    decode
}
