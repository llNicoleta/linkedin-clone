import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'header-option',
  templateUrl: './header-option.component.html',
  styleUrls: ['./header-option.component.css']
})
export class HeaderOptionComponent implements OnInit {

  @Input()
  optionTitle: string | undefined;

  @Input()
  optionIcon: string | undefined;

  @Input()
  optionAvatar: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
