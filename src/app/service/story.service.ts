import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../models/story';
import { HttpClient } from '@angular/common/http';
import { ApiURL } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private httpClient: HttpClient) { }

  getStoryList(): Observable<Story[]> {
    return this.httpClient.get<Story[]>(`${ApiURL.baseUrl}/story`);
  }

  getStoryById(id: string): Observable<Story> {
    return this.httpClient.get<Story>(`${ApiURL.baseUrl}/story/${id}`)
  }
}
