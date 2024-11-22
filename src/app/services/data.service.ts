import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private bookUrl = 'https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10'; 
  private dogUrl = 'https://dog.ceo/api/breed/beagle/images/random';
  private robotUrl = 'https://robohash.org/hola';

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getBooks(): Observable<any> {
    return this.http.get(this.bookUrl);
  }

  getRandomDog(): Observable<any> {
    return this.http.get(this.dogUrl);
  }

  getRandomRobot(title: string) {
    return this.http.get(`https://robohash.org/${title}`, { responseType: 'blob' });
  }
  saveBook(book: any) {
    return this.firestore.collection('Libros').add(book);
  }
}

