import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  avatar = 'https://media-exp1.licdn.com/dms/image/C4D03AQGtYdgjqhcPGw/profile-displayphoto-shrink_800_800/0/1591357012487?e=1634774400&v=beta&t=JGtL7RnFpqNBUbvR6SHHKzbMetNXZ24Ru_E8oDgfwNA'
  constructor() { }

  ngOnInit(): void {
  }

}
