import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { AtfComponent } from '../atf/atf.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    AtfComponent,
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

 }
