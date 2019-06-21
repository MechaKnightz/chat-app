import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { LoginUser } from '@app/_models/loginUser';
import { AuthenticationService } from '@app/_services/authentication.service';
import { UserService } from '@app/_services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
@Component({templateUrl: 'home.component.html'})
export class HomeComponent {
    currentUser: LoginUser;
    userFromApi: LoginUser;

    constructor(
        private router: Router,
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => { 
            this.userFromApi = user;
        });
    }

    logout()
    {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}