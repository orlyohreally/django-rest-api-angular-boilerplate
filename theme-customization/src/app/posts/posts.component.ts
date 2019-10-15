import { Component, OnInit } from '@angular/core';
import { Post } from './types/post';
import { Observable, throwError } from 'rxjs';
import { PostsService } from './core/posts.service';
import { catchError, delay } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Observable<{ results: Post[] }>;
  errorMessage: string;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts().pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorMessage = error.statusText;
        return throwError(error);
      })
    );
  }
}
