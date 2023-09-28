import React from 'react'

const Books = () => {
  const books = [
    {name:'Rabindranath Tagore',
    books:["Gitanjali","Kabuliwala","The Home and the World"] 
    },
    {name:'Neha Yadav',
    books:["sleep All day","All About Food","How to make your Life Shitty"] 
    }

  ]

  return (
    <div>
      <div >
      {books.map((book)=>{
       return( <div style={{margin:"10px 10px ",color:"green",background:"rgba(0, 2, 122,0.2)"}}>
          <div>Author Name:- {book.name}</div>
          <div> The Author {book.name} Articles And Books</div>
          <ul>
            {book.books.map((book, index) => (
              <li key={index}> {book}</li>
            ))}
          </ul>
        </div>)
      })}
      </div>

    </div>
  )
}

export default Books
