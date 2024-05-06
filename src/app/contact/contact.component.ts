import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactObj: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]),
    message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(5000), Validators.pattern('^[a-zA-Z0-9.,!? ]*$')]),
    privacyPolicy: new FormControl(false, [Validators.requiredTrue])
  });

  constructor() {

  }

  submitData() {
    this.contactObj.reset();
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
