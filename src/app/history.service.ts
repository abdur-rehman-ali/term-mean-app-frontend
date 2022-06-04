import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHistory } from './history';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {


  constructor(private http:HttpClient) { }

  private url = 'https://jsonplaceholder.typicode.com/posts';

  getData(): Observable<IHistory[]>{
    return this.http.get<IHistory[]>(this.url);
  }
}
