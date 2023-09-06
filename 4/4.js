"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

function drawHill(lines, symbol = "*") {
    for (let i = 1; i <= lines; i++) {
        console.log(symbol.repeat(i));
    }
}

drawHill(20, "x");
