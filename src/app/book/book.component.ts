import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  imports: [[FormsModule, CommonModule]],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  newTitle: string="";
  newAuthor: string="";
  books: Book[] = [];
  
  ngOnInit() {
    let book_list = localStorage.getItem('books');
    if (book_list) {
      try {
        this.books = JSON.parse(book_list);
      } catch (e) {
        console.error("Error parsing books from localStorage", e);
        this.books = [];
      }
    } else {
      this.books = [];
    }
  }
  // Add a new book to the list'
  addNewBook() {
    if(!this.newTitle.trim() || !this.newAuthor.trim()) {
      return alert('Please enter a title and author');
    }
    let newBook: Book = { id:Date.now(), title: this.newTitle, author: this.newAuthor };
    this.books.push(newBook);
    this.newTitle = '';
    this.newAuthor = '';
    
    //save the new list of books
    this.saveBook();
  }
  deleteBook(id:number) {
    this.books = this.books.filter(book => book.id !== id);
    //save the new list of books
    this.saveBook();
  }
  saveBook() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
