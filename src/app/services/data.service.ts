import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllData(): Observable<any> {
    return this.http.get<Note[]>(this.apiUrl + '/testData');
  }

  // createPost(postData: any): void {
  //   this.http.post(this.apiUrl + '/posts', postData).subscribe((response) => {
  //     console.log('Post Created: ', response);
  //   });
  // }
}
