import { useState } from 'react'

const Bookshelf = () => {
    
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);      
    const [newBook, setNewBook] = useState([
        {title: '', author: ''},
    ])

    const handleInputChange = (event) => {
        //console.log(event.target.title)
        setNewBook({...newBook, [event.target.name]: event.target.value})
    }
//need to add use effect
    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]) //was having a hard time with understanding the brackets needed around this. got the answer from chatgpt.
        setNewBook({title: '', author: ''})
        console.log(books)
    }
    
    return (
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
             {/* Form will go here */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input
            id="title"
            name="title"
            value={newBook.title} //3.4.2) the <input> element. the value of the "name" prop alligns with the "firstName" property in the "formData" state. The formData.firstName state is used as the value of the input
            onChange={handleInputChange}
            />
            <label htmlFor="author">Author: </label>
            <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
            />
            <button type="submit">Submit your book</button>
      </form>
        </div>
         <div className="bookCardsDiv">{/* Book cards will display here */}
 
             {books.map((book, index) => {
                return (<div className="bookCard" key={index}>Title: {book.title} Author: {book.author}</div>)
            })}    

         </div>
    </div>
    )
}


export default Bookshelf;