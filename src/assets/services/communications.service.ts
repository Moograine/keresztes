import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CommunicationsService {
  DEFAULT_API = 'https://keresztes-zs-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private http: HttpClient) {
  }

  reachOutWithContact(contact: object): Observable<object> {
    return this.http.post(`${this.DEFAULT_API}/contact/list.json`, contact);
  }

  reachOutWithProposal(proposal: object): Observable<object> {
    return this.http.post(`${this.DEFAULT_API}/proposal/list.json`, proposal);
  }
}
