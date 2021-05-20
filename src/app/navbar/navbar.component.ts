import { Component, OnInit } from '@angular/core';
  
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

import { EXP_TIME } from '../shared/constants';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isAuthorized()) {
      this.validateToken();
    }
  }

  private validateToken(): void {
    setInterval(() => {
      if (this.authService.tokenExpired()) {
        if (this.authService.getRefreshToken()) {
          const token: string = this.authService.getRefreshToken() as string;
          if (!this.authService.refreshToken(token)) {
            this.notAuthorizedAction();
          }
        } else {
          this.notAuthorizedAction();
        }
      }
    }, EXP_TIME);
  }

  private notAuthorizedAction(): void {
    this.authService.logOut();
    this.router.navigate(['mainPage']);
  }

  onLogOut(event: Event) {
    // console.log(event);
    this.notAuthorizedAction();
  }
}
