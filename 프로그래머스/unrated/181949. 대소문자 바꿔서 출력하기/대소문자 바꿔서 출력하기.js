const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

function checkUppercase(str){
    return str === str.toUpperCase();
}

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let arrStr = str.split('');
    for(let i = 0; i<arrStr.length; i++){
       arrStr[i] = checkUppercase(arrStr[i]) ? arrStr[i].toLowerCase() : arrStr[i].toUpperCase();
    }
    console.log(arrStr.join(''));
});