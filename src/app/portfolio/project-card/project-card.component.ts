import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  @Input() projectImg: string = '';
  @Input() projectTitle: string = '';
  @Input() techStack: string = '';
  @Input() projectDescription: string = '';
}
