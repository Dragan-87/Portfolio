import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, ReactiveFormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {


  projects = [
    {
      projectImg: 'join',
      projectTitle: 'Join',
      techStack: 'JavaScript | HTML | CSS',
      projectDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. '
    },
    {
      projectImg: 'el-pollo-loco',
      projectTitle: 'El Pollo Loco',
      techStack: 'JavaScript | HTML | CSS',
      projectDescription: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.'
    },

  ];
}
