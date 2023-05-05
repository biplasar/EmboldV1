import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  //private baseURL = "/api";
  //private baseURL = "/";
  private baseURL = "http://sipembold.eastus.cloudapp.azure.com:7790/repositories";

  constructor(private httpClient: HttpClient) {
  }

getRepositoryList(): Observable<any> {

    return this.httpClient.get(`${this.baseURL}`);
  }

getRepositoryIssueList(uid: string): Observable<any> {

    let repositoryCodeIssueListURL = `${this.baseURL}` +'/' + uid + '/issues/codeissues/details'
    return this.httpClient.get(`${repositoryCodeIssueListURL}`);
  }

scanRepository(uid: string) : Observable<any> 
  {
     let scanURL = `${this.baseURL}` +'/' + uid + '/scan'
     console.log(scanURL);
     return this.httpClient.post(`${scanURL}`, null);
  }

}
