import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  books: any[] = [];
  loading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.dataService.getBooks().subscribe((data: any) => {
      this.books = data.results; 
      this.books.forEach((book, index) => {
        if (index % 2 === 0) {
          this.dataService.getRandomDog().subscribe((dogData: any) => {
            book.dogImage = dogData.message; 
          });
        } else {
          this.dataService.getRandomRobot(book.title).subscribe((robotBlob: Blob) => {
            book.robotImage = URL.createObjectURL(robotBlob);
          });
        }
      });
    });
  }
  saveBook(book: any) {
    const bookData = {
      title: book.title,
      image: book.dogImage || book.robotImage
    };
    this.dataService.saveBook(bookData).then(() => {
      alert('Se guardo el libro exitosamente!');
    }).catch((error) => {
      alert('No se pudo guardar el libro');
    });
  }
}
