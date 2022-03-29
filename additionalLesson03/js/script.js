"use strict";

// 1
let lang = prompt("Выберите язык (например ru или en); Select a language (for example, ru or en)");
let weekEn = document.querySelector("#en");
let weekRu = document.querySelector("#ru");
let weekTitleEn = document.querySelector("#title-en");
let weekTitleRu = document.querySelector("#title-ru");
let ru = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let en = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// if

if (lang == "ru") {
    weekTitleRu.classList.toggle("hidden");
    weekRu.classList.toggle("hidden");
    weekEn.classList.toggle("leng-hidden");
    weekTitleEn.classList.toggle("leng-hidden");
    console.log(ru);
} else {
    weekTitleEn.classList.toggle("hidden");
    weekEn.classList.toggle("hidden");
    weekRu.classList.toggle("leng-hidden");
    weekTitleRu.classList.toggle("leng-hidden");
    console.log(en);
}

// switch-case

switch (true) {
    case lang == "ru":
        weekTitleRu.classList.toggle("hidden");
        weekRu.classList.toggle("hidden");
        weekEn.classList.toggle("leng-hidden");
        weekTitleEn.classList.toggle("leng-hidden");
        console.log(ru);
        break;
    case lang == "en":
        weekTitleEn.classList.toggle("hidden");
        weekEn.classList.toggle("hidden");
        weekRu.classList.toggle("leng-hidden");
        weekTitleRu.classList.toggle("leng-hidden");
        console.log(en);
        break;
}

// Массив

let array = [];

array["ru"] = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
array["en"] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(array[lang]);

// 2

let namePerson = prompt("Введите имя: ");

if (namePerson === "Артем") {
    console.log("директор");
} else if (namePerson === "Александр") {
    console.log("преподаватель");
} else {
    console.log("студент");
}