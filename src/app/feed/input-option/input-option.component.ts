import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'input-option',
  templateUrl: './input-option.component.html',
  styleUrls: ['./input-option.component.css']
})
export class InputOptionComponent implements OnInit {
  @Input()
  title: string | undefined;
  @Input()
  icon: string | undefined;
  @Input()
  color: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
