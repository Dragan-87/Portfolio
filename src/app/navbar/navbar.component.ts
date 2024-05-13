import { CommonModule } from '@angular/common';
import { Component, HostListener, SimpleChanges } from '@angular/core';
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
  isBurgerOpen = false;
  linkIds = ['about-me', 'skills', 'portfolio']


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

  setStartToTure() {
    this.portfolio = false;
    this.aboutMe = false;
    this.skills = false;
  }

  openOrCloseBurgerMenu() {
    this.isBurgerOpen = !this.isBurgerOpen;
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.linkIds.forEach(links => {
      let isAtEnd = this.isAtEndOfElement(links);
      console.log(isAtEnd ? 'Am Ende des Elements.' + links : 'Nicht am Ende.' + links);
      if (isAtEnd && links == 'start') {
        this.setAboutMetoTrue()
      } else if (isAtEnd && links == 'abaout-me') {
        this.setSkillsToTrue()
      } else if (isAtEnd && links == 'skills') {
        this.setPortfolioToTrue();
      }

    });

  }

  isAtEndOfElement(elementId: string): boolean {
    const element = document.getElementById(elementId);
    if (!element) return false;

    const elementHeight = element.offsetHeight; // Höhe des Elements
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Scroll-Offset

    return scrollTop >= elementHeight;
  }
}
