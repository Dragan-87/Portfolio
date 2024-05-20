import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LinkService } from '../link.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  aboutMe = false;
  skills = false;
  portfolio = false;
  isBurgerOpen = false;
  isClicked = false;
  links = new LinkService();
  linkIds = ['home', 'about-me', 'skills', 'portfolio']

  constructor(private router: Router) {}

  async scrollTo(anker: string) {
    const element = document.getElementById(anker);
    if (anker == 'home') {
      await this.router.navigate(['/']);
    }
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    await this.router.navigate(['/']);
    this.scrollTo(anker);
  }

  setIsClickedToTrue() {
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 1000);
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
  /**
   * Handles the scroll event.
   */
  onScroll() {
    this.linkIds.forEach(links => {
      let isAtEnd = this.isAtEndOfElement(links);
      if (isAtEnd && links == 'skills' && !this.isClicked) {
        this.setPortfolioToTrue();
      } else if (isAtEnd && links == 'about-me' && !this.isClicked) {
        this.setSkillsToTrue();
      } else if (isAtEnd && links == 'home' && !this.isClicked) {
        this.setAboutMetoTrue();
      } else if (!isAtEnd && links == 'home' && !this.isClicked || isAtEnd && links == "portfolio" && !this.isClicked) {
        this.setStartToTure();
      }
    });

  }

  isAtEndOfElement(elementId: string): boolean {
    const element = document.getElementById(elementId);
    if (!element) return false;

    const elementTop = element.offsetTop; // Position des Elements von oben
    const elementHeight = element.offsetHeight; // Höhe des Elements
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Scroll-Offset

    return scrollTop >= elementTop + elementHeight;
  }
}
