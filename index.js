const franc = require("franc");
const lang = require("langs");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Write your text:', async (input) => {
    await console.log(returnLang(returnLangCode(input)));
});


const returnLangCode = function (input) {
    let code = franc(input);
    readline.close();
    return code;
}
const returnLang = function (code) {
    const allLangs = lang.all();
    let langName = "";
    for (let i = 0; i < allLangs.length; i++) {
        const element = allLangs[i];
        if (element[3] === code) {
            langName = element.name;
        }
    }
    return langName;
}
