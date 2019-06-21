import { Component, OnInit } from '@angular/core';
import { ChatComponent } from '@app/chat/chat.component'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
