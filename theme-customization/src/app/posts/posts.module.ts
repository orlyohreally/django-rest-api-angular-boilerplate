import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { PostsService } from './core/posts.service';

@NgModule({
  declarations: [PostsComponent],
  providers: [HttpClientModule, PostsService],
  imports: [CommonModule, PostsRoutingModule, HttpClientModule, MatCardModule]
})
export class PostsModule {}
