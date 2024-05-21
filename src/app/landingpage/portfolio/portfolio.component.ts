import { Component, Inject } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../assets/services/translation.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, FormsModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './portfolio-responsive.scss']
})
export class PortfolioComponent {
  translate = Inject(TranslationService);

  projects = [
    {
      projectImg: 'join',
      projectTitle: 'Join',
      techStack: 'JavaScript | HTML | CSS',
      projectDescription: 'portfolio_join_project_text',
      githubLink: 'https://github.com/Dragan-87/join',
      liveLink: 'http://join.dragan-saric.de/'
    },
    {
      projectImg: 'el-pollo-loco',
      projectTitle: 'El Pollo Loco',
      techStack: 'JavaScript | HTML | CSS',
      projectDescription: 'portfolio_el_pollo_loco_text',
      githubLink: 'https://github.com/Dragan-87/el-pollo-loco',
      liveLink: 'http://el-pollo-loco.dragan-saric.de/',
    },

  ];
}
