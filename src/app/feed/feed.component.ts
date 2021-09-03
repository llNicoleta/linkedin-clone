import {Component, OnInit } from '@angular/core';
import {PostsService} from "./posts.service";
import {map} from "rxjs/operators";
import {Post} from "./post.model";

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: Array<Post> | undefined;
  inputValue: string = '';

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.retrievePosts();
  }

  retrievePosts(): void {
    this.postsService.getPosts().snapshotChanges().pipe(
      map(changes =>
      changes.map(c =>
        ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(data => {
      this.posts = data;
    });
  }

  addPost(): void {
    this.postsService.create( {
      name: 'Nicoleta',
      description: 'Developer',
      message: this.inputValue,
      imageUrl: '',
      timestamp: Date.now()
    }).then(r => this.inputValue = '');
  }

}
