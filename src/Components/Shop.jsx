import React, {useState,useEffect} from 'react';
import Book from './Book';
import axios from 'axios';
import './Book.scss';





function Shop() {

    const [books,setBooks]=useState([]);

    useEffect(()=>{
        console.log('Start');
        axios.get('https://in3.dev/knygos/')
        .then(function (response) {
            console.log(response.data);
            setBooks(response.data);
        })
    }, []);


    


    return (< div className="book-container">
        {books.map((book)=>(<Book key={book.id} data={book}></Book>))}
    </div>);
    }

export default Shop;