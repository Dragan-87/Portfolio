import { CommonModule } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  aboutMe = false;
  skills = false;
  portfolio = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.aboutMe) {
      this.skills = false;
      this.portfolio = false;
    } else if (this.skills) {
      this.aboutMe = false;
      this.portfolio = false;
    } else if (this.portfolio) {
      this.aboutMe = false;
      this.skills = false;
    }
  }

  setAboutMetoTrue() {
    this.aboutMe = true;
    this.skills = false;
    this.portfolio = false;
  }

  setSkillsToTrue() {
    this.skills = true;
    this.aboutMe = false;
    this.portfolio = false;
  }

  setPortfolioToTrue() {
    this.portfolio = true;
    this.aboutMe = false;
    this.skills = false;
  }
}
