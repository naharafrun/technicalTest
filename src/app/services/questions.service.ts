import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private httpClient: HttpClient) {

  }

  get(url: string) {
    return this.httpClient.get('http://localhost:3001/' + url);
  }


  getAll ( )  {
    return [
      { id: 'angularQuestion', name: 'Angular' },
      { id: 'javaQuestion', name: 'Java' }
    ];
  }
}
