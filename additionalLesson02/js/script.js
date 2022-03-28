let num = 266219;

let array = ("" + num).split("").map(Number);

let result = array.reduce((acc, result) => acc * result);

result **= 3;
result = String(result);

console.log(result.substring(0, 2));