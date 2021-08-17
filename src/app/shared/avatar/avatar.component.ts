import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent implements OnInit {

  @Input()
  source: string | undefined;

  @Input()
  size: string | undefined;

  @Input()
  shape: string | undefined;

  @Input()
  alt: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
