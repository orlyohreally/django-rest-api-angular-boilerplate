import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { PostsService } from './posts.service';
import { Post } from '../types/post';
import { BlogUser } from '../types/user';

describe('PostsService', () => {
  let httpTestingController: HttpTestingController;
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(PostsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPosts should get posts from api', () => {
    const mockUser: BlogUser = {
      url: 'user-url',
      username: 'username',
      email: 'email@gmail.com'
    };
    const mockPosts: { results: Post[] } = {
      results: [
        {
          url: 'post-url',
          user: mockUser,
          title: 'post-title',
          content: 'post-content',
          updated: new Date().toString(),
          timestamp: new Date().toString()
        }
      ]
    };

    service.getPosts().subscribe((posts: { results: Post[] }) => {
      expect(posts).toBe(mockPosts);
    });

    const req = httpTestingController.expectOne('/api/posts/');
    expect(req.request.method).toEqual('GET');
    req.flush(mockPosts);
  });
});
