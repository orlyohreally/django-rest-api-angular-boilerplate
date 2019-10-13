import { Component, OnInit } from '@angular/core';
import { Post } from './types/post';
import { Observable } from 'rxjs';
import { PostsService } from './core/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Observable<{ results: Post[] }>;
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }
}
