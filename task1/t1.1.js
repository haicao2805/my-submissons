// ----------- ENTER INPUT HERE -----------
////////////////////////////////////////////

let input = "webaskfdhlairhauhvldzmaster";

////////////////////////////////////////////

let mapNumberToCharacter = [];
const alphabets = "abcdefghijklmnopqrstuvwxyz";
for(let i = 0; i < alphabets.length; i++){
    mapNumberToCharacter[i] = alphabets[i];
}

function findCharacter(character){
    return mapNumberToCharacter.findIndex(item => item === character);
}

function sortCharacter(s ){
    let output = "";
    let mapped = [];
    for(let i = 0; i < s.length;i++){
        mapped.push(findCharacter(s[i]));
    }
    
    mapped.sort((a, b) => (a - b)).forEach(item => {
        output += mapNumberToCharacter[item];
    });
    
    return output;
}

console.log(sortCharacter(input));