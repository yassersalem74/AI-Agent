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

  private getHeaders(voice: string): HttpHeaders {
    return new HttpHeaders({
      'x-platform': 'fuse',
      'voice': voice
    });
  }

  sendText(text: string, voice: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/text-to-speech`, { text }, { headers: this.getHeaders(voice) });
  }

  sendImage(image: File, voice: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post(`${this.baseUrl}/image-to-speech`, formData, { headers: this.getHeaders(voice) });
  }

  sendPdf(pdf: File, voice: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', pdf);
    return this.http.post(`${this.baseUrl}/pdf-to-speech`, formData, { headers: this.getHeaders(voice) });
  }
}
