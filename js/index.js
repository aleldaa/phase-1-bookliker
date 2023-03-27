document.addEventListener("DOMContentLoaded", function() {});

fetch(`http://localhost:3000/books`)
.then(res => res.json())
.then (bookName => {
    bookName.forEach((book)=>{
        getBooks(book)
    })
})

const getBooks = (book)=>{
    const bookId = document.querySelector('ul#list')
    const bookList = document.createElement('li')
    bookList.addEventListener('click',()=> bookData(book))
    bookList.textContent = book.title
    bookId.append(bookList)
}
 
const bookData = (books)=>{
    const data = document.querySelector('div#show-panel')
    const bookThumbnail = document.createElement('img')
    const bookDes = document.createElement('h4')
    const users = document.createElement('li')
    const likeBtn = document.createElement('button')
    bookThumbnail.src = books.img_url
    bookDes.textContent = books.description
    books.users.forEach((b) => {
        console.log(b)
        const usernames = document.createElement('h4')
        usernames.textContent = b.username
        data.append(usernames)
    })
    likeBtn.addEventListener('click',()=> )
    likeBtn.textContent = 'like'

    

    data.append(bookThumbnail, bookDes)
}
 const likeButton = (like) => {
    
 }
//console.log(getBooks())