"use strict";

let lang = prompt("Выберите язык (например ru или en); Select a language (for example, ru or en)");
let weekEn = document.querySelector("#en");
let weekRu = document.querySelector("#ru");
let weekTitleEn = document.querySelector("#title-en");
let weekTitleRu = document.querySelector("#title-ru");
// if

// if (lang == "ru") {
//     weekTitleRu.classList.toggle("hidden");
//     weekRu.classList.toggle("hidden");
//     weekEn.classList.toggle("leng-hidden");
//     weekTitleEn.classList.toggle("leng-hidden");
// } else {
//     weekTitleEn.classList.toggle("hidden");
//     weekEn.classList.toggle("hidden");
//     weekRu.classList.toggle("leng-hidden");
//     weekTitleRu.classList.toggle("leng-hidden");
// }

// // switch-case

// switch (true) {
//     case lang == "ru":
//         weekTitleRu.classList.toggle("hidden");
//         weekRu.classList.toggle("hidden");
//         weekEn.classList.toggle("leng-hidden");
//         weekTitleEn.classList.toggle("leng-hidden");
//         break;
//     case lang == "en":
//         weekTitleEn.classList.toggle("hidden");
//         weekEn.classList.toggle("hidden");
//         weekRu.classList.toggle("leng-hidden");
//         weekTitleRu.classList.toggle("leng-hidden");
//         break;
// }

lang =
    (("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"),
        ("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"));

console.log(lang);