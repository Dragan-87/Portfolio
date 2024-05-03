import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
