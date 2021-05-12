const URL = "http://localhost:3001/books";

export function getAllBooks() {
   return fetch(URL)
    .then(response => response.json())
}