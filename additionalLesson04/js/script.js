let string = prompt("Введите");
let checkStr = function(str) {
    if (str == str * 1) {
        alert("Вы ввели число");
        return;
    } else {
        alert("Значение корректно!");
    }

    str = str.trim();
    return str.length > 30 ? str.slice(0, 30) + "..." : str;
};

checkStr(string);