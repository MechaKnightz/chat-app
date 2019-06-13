import { Component, OnInit, Input } from '@angular/core';

import { Action } from '@app/_models/action';
import { Event } from '@app/_models/event';
import { Message } from '@app/_models/message';
import { User } from '@app/_models/user';
import { SocketService } from '@app/_services/socket.service';

@Component({
  selector: 'tcc-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  action = Action;
  messages: Message[] = [];
  messageContent: string;
  ioConnection: any;
  @Input() inputMessage: string;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.initIoConnection();
  }

  onKeydown(event) {
    this.sendMessage(this.inputMessage);
    this.inputMessage = "";
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: Message) => {
        this.messages.push(message);
      });

    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });
      
    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

  public sendMessage(message: string): void {
    if (!message) {
      return;
    }

    this.socketService.send({
      content: message
    });
    this.messageContent = null;
  }

  public sendNotification(params: any, action: Action): void {
    let message: Message;

    if (action === Action.JOINED) {
      message = {
        action: action
      }
    } else if (action === Action.RENAME) {
      message = {
        action: action,
        content: {
          previousUsername: params.previousUsername
        }
      };
    }

    this.socketService.send(message);
  }
}