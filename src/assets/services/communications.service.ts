import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CommunicationsService {
  DEFAULT_API = 'https://keresztes-zs-default-rtdb.europe-west1.firebasedatabase.app';
  EMAIL_FORMSPREE_API = 'https://formspree.io/f/myyazgba';

  constructor(private http: HttpClient) {
  }

  reachOutWithContact(contact: object): Observable<object> {
    return this.http.post(`${this.DEFAULT_API}/contact.json`, contact);
  }

  reachOutWithProposal(proposal: object): Observable<object> {
    return this.http.post(`${this.DEFAULT_API}/proposal.json`, proposal);
  }

  getContactList(): Observable<object> {
    return this.http.get(`${this.DEFAULT_API}/contact.json`);
  }

  getProposalList(): Observable<object> {
    return this.http.get(`${this.DEFAULT_API}/proposal.json`);
  }

  sendMail(data: object): Observable<object> {
    return this.http.post(`${this.EMAIL_FORMSPREE_API}`, data);
  }
}
