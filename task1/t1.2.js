// ----------- ENTER INPUT HERE -----------
////////////////////////////////////////////

let input = ["AABBBCCCCCAADDDD",
             "PPPQRRRSTTQQS",
             "XYZ"];

////////////////////////////////////////////
function RLE(s){
    let output = "";
    let count = 1;
    let tmp = s[0];
    for(let i = 1; i <= s.length;i++){
        if(s[i] === s[i-1]){
            count++;
        }
        else{
            output += count === 1 ? tmp : count.toString() + tmp;
            count = 1;
            tmp = s[i];
        }
    }

    return output;
}

input.forEach(item => console.log(RLE(item)));

