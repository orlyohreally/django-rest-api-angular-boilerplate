import { BlogUser } from './user';

export interface Post {
  url: string;
  user: BlogUser;
  title: string;
  content: string;
  updated: string;
  timestamp: string;
}
