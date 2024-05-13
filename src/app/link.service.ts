import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() { }

  socialMediaLinks = [
    'https://github.com/Dragan-87?tab=repositories',
    'https://de.linkedin.com/'
  ]

  openLink(link: string) {
    window.open(link, '_blank');
  }

  goToContact() {
    window.location.href = '#contact';
  }

  goToStart() {
    window.location.href = '#start';
  }

}
