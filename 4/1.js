"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/
let phrase = "это ноль";
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0 && i != 0){
        phrase = "четное число";
    }
    if (i % 2 !== 0 && i != 0){
        phrase = "нечетное число";
    }

    console.log(`${i} - ${phrase}`);
}
