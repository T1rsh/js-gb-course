import {getBooksInfo} from "./data.js";

function createAndAppendElement(data, parrent){
    const book = document.createElement("div");
    book.classList.add("book__card");
    book.innerHTML = `
        <img src="${data.imageLinks.thumbnail}" alt="${data.title}" className="book__img" /> 
        <div className="book__info">
            <h2 className="book__title">${data.title}</h2>
            <div className="book_authors">${data.authors ? data.authors.join(", ") : null}</div>
            <div className="book_descr">${data.description.substr(0, 200)}</div>
            <a href="${data.previewLink}" className="book__link">Link</a>
        </div>   
    `;
    parrent.appendChild(book);
}

const booksWrapper = document.querySelector(".books__wrapper");
const search = "cats";

getBooksInfo(search)
    .then(item => {
        item.items.forEach(element => {
            createAndAppendElement(element.volumeInfo, booksWrapper);          
        });
    });