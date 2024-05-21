import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { LinkService } from '../../../assets/services/link.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contac-responsive.scss']
})
export class ContactComponent {
  link = new LinkService();
  imgSrt = "assets/img/icons/menu-btn/go-up-btn-inactive.png";
  mailTest = false;
  contactObj: FormGroup;

  constructor(private http: HttpClient) {
    this.contactObj = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-ZäöüÄÖÜß ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]),
      message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5000), Validators.pattern('^[a-zA-Z0-9.,!?äöüÄÖÜß#(): ]*$')]),
      privacyPolicy: new FormControl(false, [Validators.requiredTrue])
    });
  }

  post = {
    endPoint: 'https://dragan-saric.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        responseType: 'json',
      },
    },
  };

  onSubmit() {
    if (this.contactObj.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactObj.value), this.post.options)
        .subscribe({
          next: (response: any) => {
            console.log(response);
            this.contactObj.reset();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('Send POST request complete'),
        });
    } else {
      console.error('Form is invalid');
    }
  }

  changeImgSrc() {
    this.imgSrt = "assets/img/icons/menu-btn/go-up-btn-active.png";
  }

  resetImgSrc() {
    this.imgSrt = "assets/img/icons/menu-btn/go-up-btn-inactive.png";
  }

  isEmailInvalid() {
    return this.contactObj.controls['email'].invalid && (this.contactObj.controls['email'].touched || this.contactObj.controls['email'].dirty);
  }

  isNameInvalid() {
    return this.contactObj.controls['name'].invalid && (this.contactObj.controls['name'].touched || this.contactObj.controls['name'].dirty);
  }

  isMessageInvalid() {
    return this.contactObj.controls['message'].invalid && (this.contactObj.controls['message'].touched || this.contactObj.controls['message'].dirty);
  }

  isPrivacyPolicyInvalid() {
    return this.contactObj.controls['privacyPolicy'].invalid && (this.contactObj.controls['privacyPolicy'].touched || this.contactObj.controls['privacyPolicy'].dirty);
  }

  isEmailValidAndTouched() {
    return this.contactObj.controls['email'].valid && (this.contactObj.controls['email'].touched || this.contactObj.controls['email'].dirty);
  }

  isNameValidAndTouched() {
    return this.contactObj.controls['name'].valid && (this.contactObj.controls['name'].touched || this.contactObj.controls['name'].dirty);
  }

  isMessageValidAndTouched() {
    return this.contactObj.controls['message'].valid && (this.contactObj.controls['message'].touched || this.contactObj.controls['message'].dirty);
  }

  isPrivacyPolicyValidAndTouched() {
    return this.contactObj.controls['privacyPolicy'].valid && (this.contactObj.controls['privacyPolicy'].touched || this.contactObj.controls['privacyPolicy'].dirty);
  }

}
