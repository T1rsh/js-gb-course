async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

const url = "https://www.googleapis.com/books/v1/volumes?q=";

export async function getBooksInfo(subject) {
    return await getResource(url + subject);
}
