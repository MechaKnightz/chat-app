import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../environments/environment';

import { AuthenticationService } from '@app/_services/authentication.service';
import { LoginUser } from '@app/_models/loginUser'
import { Role } from '@app/_models/role'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chat Application';

  currentUser: LoginUser;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
