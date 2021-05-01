import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { SignUpData } from '../../data/sign-up-form.interface';
import { NgForm } from '@angular/forms';
import { TOKEN_KEY } from 'src/app/shared/constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpData: SignUpData = {
    email: 'takko.city@mail.com',
    password: 'takotako',
  };
  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: LocalStorageService,
  ) {}

  ngOnInit(): void {}

  async onSubmit(signUpForm: NgForm) {
    try {
      const record = await this.authService.firebaseSignUp(this.signUpData);
      const idTokeResult = await record.user?.getIdTokenResult();
      console.log(record);
      if (idTokeResult?.token) {
        this.storageService.set(TOKEN_KEY, idTokeResult.token);
        if (this.authService.redirectUrl !== '') {
          this.router.navigateByUrl(this.authService.redirectUrl);
        } else {
          this.router.navigate(['auth/account']);
        }
      }
      //  this.router.navigate(['auth/account']);
    } catch (err) {
      console.log('ERROR', err.message);
    }
  }
}