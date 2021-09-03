import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Post} from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private dbPath = '/posts';
  postsReference: AngularFirestoreCollection<Post>;

  constructor(private firestore: AngularFirestore) {
    this.postsReference = firestore.collection(this.dbPath, ref => ref.orderBy('timestamp', "desc"));
  }

  getPosts(): AngularFirestoreCollection<Post> {
    return this.postsReference;
  }

  create(post: Post) {
    return this.postsReference.add({...post});
  }

}
