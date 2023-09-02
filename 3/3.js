"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

function getNumbers() {
    const numbers = prompt("Введите числа через пробел:");
    return numbers.split(" ").map(num => Number.parseInt(num));
}

function findMax(...numbers) {
    let max = numbers[0];
    numbers.forEach(item => {
        if (item > max) {
            max = item;
        }
    })
    return max;
}

const numbers = getNumbers();
console.log(`Максимальное значение среди чисел ${numbers.join(", ")} равно ${findMax(...numbers)}.`);

