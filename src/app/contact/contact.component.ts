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

  messageForm!: FormGroup;

  constructor() {

  }

  submitData() {
  }
}
