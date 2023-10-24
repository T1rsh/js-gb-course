// Задание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует
//  fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который 
//  разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть 
//  отклонен с соответствующим сообщением об ошибке.

const dataRequestLink = "https://reqres.in/api";

const getUserData = async (id) => {
    const link = `${dataRequestLink}/user/${id}`;
    const res = await fetch(link)
    let result;
    if (res.ok) {
        await res.json()
            .then(item => {result = item.data});
        return result;
    }
    else {
        throw new Error("Smthg went wrong!");
    }
}

getUserData(3)
    .then(console.log)
    .catch(e => console.log(e.message));


// Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch
// для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные
// успешно отправлены, или отклоняется в случае ошибки.

const saveUserData = async (user) => {
    const link = `${dataRequestLink}/users`;
    const res = await fetch(link, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    if(res.status === 201) {
        return res;
    }
    else {
        return new Error("Request was not successful!");
    }
}

const user = {
    "name": "John Doe",
    "job": "unknown"
  };
  
  saveUserData(user)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
      console.log(error.message);
    });


// Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).

// Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов.
// Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

const changeStyleDelayed = (id, delay) => {
    const elem = document.getElementById(id);
    setTimeout(() => {
        elem.style.color = "green";
    }, delay);
}

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"