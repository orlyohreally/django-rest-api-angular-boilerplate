import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../types/post';
import { share } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = '/api/posts/';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<{ results: Post[] }> {
    return this.http.get<{ results: Post[] }>(this.apiUrl).pipe(share());
  }
}
