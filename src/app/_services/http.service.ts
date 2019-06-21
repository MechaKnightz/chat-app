import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OpenGraph } from '@app/_models/openGraph';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getOpenGraphOfUrl(url: string): Observable<HttpResponse<OpenGraph>> {
    return this.http.get<OpenGraph>(
     url, { observe: 'response' });
  }
}
