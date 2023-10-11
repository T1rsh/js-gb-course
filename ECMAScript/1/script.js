// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];
const min = Math.min(...arr);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

const createCounter = () => {
    let counter = 0;
    const increment = () => {
        counter++;
        return counter;
    }
    const decrement = () => {
        counter--;
        return counter;
    }
    return {increment, decrement};
}

const {increment, decrement} = createCounter();
console.log(increment());
console.log(increment());
console.log(decrement());

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, className) {
    if (root.classList.contains(className)){
        return root;
    }
    const nodes = root.children;
    if (nodes.length > 0){ 
        let data = null;
        for (let i = 0; i < nodes.length; i++) {            
            data = findElementByClass(nodes[i], className);
            if (data) {
                break;
            }            
        }
        return data;
    } else {
        return null;
    }
}

const root = document.querySelector(".first");
const result = findElementByClass(root, "link");
console.log(result);
