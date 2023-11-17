const express = require('express');
const { clearInterval } = require('timers');

const app = express();
app.use(express.json())
portNUmber = 4000;

const BOOKS =[{
    id: 1,
    name: "Aki Ola Mathematics",
    discrription: "This book contains all the details you need to know about mathematics",
    copiesSold: 900
},
{
    id: 2,
    name: "Aki Ola Chemistry",
    discrription: "This book will guid you to learn the cocept of chemistry",
    copiesSold: 500
},
{
    id: 3,
    name: "Aki Ola Social Studies",
    discription: "This book will be able to teach the concept of the socail world",
    copiesSold: 400
}]
 app.get("/book", (req,res) => {
    const books = getBooks()
    res.send(books)
 })
 app.get("/book/:id", (req,res) => {
    const {id} = req.params
   
    const book = getBookId(id)

    if(!book){
        return res.status(400).send({
            message: "Book does not exist"
        })
    }
    res.send({
        book: data
    })
 })
 app.post("/book",(req,res) => {
    const newBook = req.body
    console.log(newBook)
    BOOKS.push(newBook)
    res.send(BOOKS)
 })

 app.put("/book/:id",(req,res) => {
    const {id} = req.params
    const book = req.body

    const bookUpdated = updateBookById(id,book)
    res.send(newBook)

 })
 app.delete("/book/:id",(req,res) => {
    const deleteBook = req.params.id
    console.log(deleteBook)
 })

app.listen(portNUmber, () =>{
    console.log(`server is running on port ${portNUmber}`);
});

                
const getBooks = () =>{
    return BOOKS
}

const getBookId = (bookId) =>{
    const bookIdToInt = parseInt(bookId) 
    const book = BOOKS.find((book)=>book.id===bookIdToInt)
    return book
}

const updateBookById = (bookId,book)=>{

    const bookIdToInt = parseInt(bookId)

    const newBook = BOOKS.map((preBook)=>{

        if(preBook.id == bookIdToInt ){
            return {...preBook,...book}
        }
    })
    return newBook
    
}
const x = [1,3,2]
console.log(getBookId)