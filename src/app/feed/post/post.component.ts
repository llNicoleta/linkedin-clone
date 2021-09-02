import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  name: string | undefined;

  @Input()
  description: string | undefined;

  @Input()
  message: string | undefined;

  @Input()
  imageUrl: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
