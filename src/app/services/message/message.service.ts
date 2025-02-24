import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-platform': 'fuse'
    });
  }

  sendText(text: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/text-to-speech`, { text }, { headers: this.getHeaders() });
  }

  sendImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post(`${this.baseUrl}/image-to-speech`, formData, { headers: this.getHeaders() });
  }

  sendPdf(pdf: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', pdf);
    return this.http.post(`${this.baseUrl}/pdf-to-speech`, formData, { headers: this.getHeaders() });
  }
}
