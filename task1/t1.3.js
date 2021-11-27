// ----------- ENTER INPUT HERE -----------
////////////////////////////////////////////

let arrayNumber = [-1 , -2, -3, 0, -4, -2, 9, -13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let k = 10;

////////////////////////////////////////////
let max = arrayNumber[0], min= arrayNumber[0];
arrayNumber.forEach(item=>{
    if(item > max) max = item;
    if(item < min) min = item;
});

if(Math.abs(min) > max){
    max = Math.abs(min)
}

let checkPositive = [];
let checkNegative = [];
for(let i = 0; i <= max; i++){
    checkPositive[i] = 0;
    checkNegative[i] = 0;
}

function canAdd(n){
    if(k - n < 0 && checkNegative[-(k - n)] > 0) return true;
    if(k - n >= 0 && checkPositive[k -n] > 0) return true;
    return false;
}

function handle(arr){
    let output = [];
    arr.forEach(item=>{
        if(canAdd(item)){
            output.push([item, k - item]);
        }
        else{
            item >= 0 ? checkPositive[item]++ : checkNegative[-item]++;
        }
    });

    console.log(output);
    return output.length > 0 ? true : false;
}

console.log(handle(arrayNumber));