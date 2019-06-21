import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logout()
  {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
