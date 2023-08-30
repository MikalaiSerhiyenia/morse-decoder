const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let output = [];
  function toMorseCode(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i += 2) {
      if (str.substr(i, 2) === "11") {
        newStr += "-";
      } else if (str.substr(i, 2) === "10") {
        newStr += ".";
      } else if (str.substr(i, 10) === "**********") {
        newStr += " ";
      }
    }
    return newStr;
  }
  for (let i = 0; i < expr.length; i += 10) {
    output.push(expr.substr(i, 10));
  }
  return output
    .map((item) => toMorseCode(item))
    .map((item) => {
      for (let key of Object.entries(MORSE_TABLE)) {
        if (item === key[0]) {
          return key[1];
        } else if (item === " ") {
          return " ";
        }
      }
    })
    .join("");
}

module.exports = {
  decode,
};
